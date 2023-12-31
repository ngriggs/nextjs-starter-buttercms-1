import Head from "next/head";

import React from "react";
import Test from "./test";
import { getMainMenu } from "../lib/api";
import FooterSection from "../components/footer-section";
import HeaderSection from "../components/header-section";
import { getLandingPage, getLandingPages } from "../lib/api";
import LandingPageSection from "../components/landing-page-sections/landing-page-section";

export default async function MyApp() {
	const test = await getMainMenu();
	const page = await getLandingPage("landing-page-with-components");
	const pages = await getLandingPages();
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<title>
					Sample Landing Page with Components - powered by ButterCMS
				</title>
				<meta
					name="description"
					content="Sample Landing Page with Components - powered by ButterCMS"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="shortcut icon"
					type="image/x-icon"
					href="https://buttercms.com/static/v2/images/favicon.png"
				/>
			</Head>
			<div className="">
				{page.fields.body.map(({ type, fields: sectionData }, index) => (
					<LandingPageSection
						key={index}
						type={type}
						sectionData={sectionData}
					/>
				))}
			</div>
		</>
	);
}
