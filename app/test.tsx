"use client";
import { useEffect, useState } from "react";

import Head from "next/head";

import { getMainMenu } from "../lib/api";

import FooterSection from "../components/footer-section";
import HeaderSection from "../components/header-section";
import ScrollToButtonButton from "../components/scroll-to-top-button";
import Preloader from "../components/preloader";
import React from "react";

export default async function Test({ Component, pageProps, mainMenu }) {
	const [isLoading, setIsLoading] = useState(false);
	const authToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
	if (authToken) {
		try {
			mainMenu = await getMainMenu();
		} catch (e) {
			console.error("Couldn't load main menu links.", e);
		}
	}

	const pageLayout = authToken ? (
		<>
			<ScrollToButtonButton />
		</>
	) : (
		<Component {...pageProps} />
	);

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

			{isLoading && <Preloader></Preloader>}

			{!isLoading && pageLayout}
		</>
	);
}
