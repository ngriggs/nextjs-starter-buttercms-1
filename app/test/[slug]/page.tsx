import {
	getLandingPage,
	getLandingPages,
	getPostsData,
} from "../../../lib/api";

import LandingPageSection from "../../../components/landing-page-sections/landing-page-section";
import Blog from "../../../components/blog/blog";

export default async function LandingPage({ params }) {
	const page = await getLandingPage(params.slug);
	const blogPosts = (await getPostsData({ page: 1, pageSize: 2 })).posts;

	if (!page && !blogPosts) {
		return <div>error</div>;
	}

	return (
		<>
			{page.fields.body.map(({ type, fields: sectionData }, index) => (
				<LandingPageSection key={index} type={type} sectionData={sectionData} />
			))}
			<Blog posts={blogPosts} />
		</>
	);
}
