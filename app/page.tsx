import Head from "next/head";

import React from "react";
import Test from "./test";
import { getMainMenu } from "../lib/api";
import FooterSection from "../components/footer-section";
import HeaderSection from "../components/header-section";

async function getMainMenu2() {
	const authToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
	let mainMenu = "something";
	if (authToken) {
		try {
			mainMenu = await getMainMenu();
			console.log(mainMenu);
		} catch (e) {
			console.error("Couldn't load main menu links.", e);
		}
	}
	return mainMenu;
}

export default async function MyApp() {
	const test = await getMainMenu2();

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
			<HeaderSection mainMenu={test} />
			<FooterSection mainMenu={test} />
			<FooterSection mainMenu={test} />
			<FooterSection mainMenu={test} />
			<FooterSection mainMenu={test} />
			<FooterSection mainMenu={test} />

			<Test Component={undefined} pageProps={undefined} mainMenu={undefined} />
		</>
	);
}
