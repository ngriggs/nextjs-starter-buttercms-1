import Head from "next/head";
import { getLandingPage, getPostsData } from "../../lib/api";

import LandingPageSection from "../../components/landing-page-sections/landing-page-section";
import Blog from "../../components/blog/blog";

export default async function LandingPage({ params }) {
	const page = await getLandingPage(params.slug);
	const blogPosts = (await getPostsData({ page: 1, pageSize: 2 })).posts;

	if (!page && !blogPosts) {
		return <div>error</div>;
	}

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<title>{page.fields.seo.title}</title>
				<meta name="description" content={page.fields.seo.description} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="shortcut icon"
					type="image/x-icon"
					href="https://buttercms.com/static/v2/images/favicon.png"
				/>
			</Head>

			{page.fields.body.map(({ type, fields: sectionData }, index) => (
				<LandingPageSection key={index} type={type} sectionData={sectionData} />
			))}
			<Blog posts={blogPosts} />
		</>
	);
}
