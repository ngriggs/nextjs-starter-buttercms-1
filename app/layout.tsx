import React from "react";
import "../css/lineicons.css";

import "../css/tiny-slider.min.css";
import "../css/main.css";

import { getMenu } from "../lib/getMenu";
import ScrollToButtonButton from "../components/scroll-to-top-button";
import NavBar from "../components/mainNav";
import Footer from "../components/mainFooter";

import { ThemeProvider } from "../components/theme-provider";
import { Icons } from "../components/icons";

export const metadata = {
	title: "JN Collective Web Starter",
	description: "Components created by JN Collective",
	icons: {
		icon: "/lgalogotrans.png",
	},
	openGraph: {
		images: "/lgalogotrans.png",
		title: "Libertyville Gymnastics Academy",
		url: "https://www.example.com/",
	},
};

const socialMedia = [
	{
		id: "giggles play instagram link",
		icon: <Icons.instagram className="h-[28px] w-[28px]" />,
		link: "https://www.instagram.com/",
	},
	{
		id: "giggles play facebook link",
		icon: <Icons.facebook className="h-[28px] w-[28px]" />,
		link: "https://www.facebook.com/",
	},
];

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const test = await getMenu();
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Sen:wght@400;700;800&display=swap"
					rel="stylesheet"
				/>
			</head>

			<body className="relative">
				{/* <HeaderSection mainMenu={test} /> */}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NavBar test={test.menus[0].items} socialMedia={socialMedia} />
					<div className="my-[41px] md:my-0" />
					{children}
					<Footer socialMedia={socialMedia} />
					<ScrollToButtonButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
