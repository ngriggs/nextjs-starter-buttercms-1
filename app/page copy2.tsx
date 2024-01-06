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
