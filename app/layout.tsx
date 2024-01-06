import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "../css/lineicons.css";

import "../css/tiny-slider.min.css";
import "../css/main.css";

import { getMainMenu } from "../lib/api";
import FooterSection from "../components/footer-section";
import HeaderSection from "../components/header-section";
import ScrollToButtonButton from "../components/scroll-to-top-button";
import NavBar from "../components/mainNav";
import Footer from "../components/mainFooter";

import { ThemeProvider } from "../components/theme-provider";

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

const nav = [
	{
		title: "About us",
		href: "/about-us",
		subheadings: [
			{
				name: "Handy Manny",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/handy-manny",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "gallery",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/gallery",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "our space",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/our-space",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
		],
	},
	{
		title: "Business",
		href: "/business",
		subheadings: [
			{
				name: "giggles",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/giggles",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "gallery",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/gallery",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "our space",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/our-space",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "blog articles",
				description: "Send us any feedback or inquiries",
				href: "/posts",
				target: "_top",
				icon: "CursorArrowRaysIcon",
			},
			{
				name: "contact us",
				description: "Sign a waiver for your children in advance",
				href: "/contact",
				target: "_top",
				icon: "ShieldCheckIcon",
			},
			{
				name: "FAQs",
				description: "Learn more about the team.",
				href: "/faq",
				target: "_top",
				icon: "Squares2X2Icon",
			},
		],
	},
	{
		title: "Events",
		href: "/events",
		subheadings: [
			{
				name: "giggles",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/giggles",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "gallery",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/gallery",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "our space",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/our-space",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "blog articles",
				description: "Send us any feedback or inquiries",
				href: "/posts",
				target: "_top",
				icon: "CursorArrowRaysIcon",
			},
			{
				name: "contact us",
				description: "Sign a waiver for your children in advance",
				href: "/contact",
				target: "_top",
				icon: "ShieldCheckIcon",
			},
			{
				name: "FAQs",
				description: "Learn more about the team.",
				href: "/faq",
				target: "_top",
				icon: "Squares2X2Icon",
			},
		],
	},
	{
		title: "Shop",
		href: "/shop",
		subheadings: [
			{
				name: "giggles",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/giggles",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "gallery",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/gallery",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "our space",
				description:
					"Book an upcoming party or check availability on your event date",
				href: "/our-space",
				target: "_top",
				icon: "CalendarDaysIcon",
			},
			{
				name: "blog articles",
				description: "Send us any feedback or inquiries",
				href: "/posts",
				target: "_top",
				icon: "CursorArrowRaysIcon",
			},
			{
				name: "contact us",
				description: "Sign a waiver for your children in advance",
				href: "/contact",
				target: "_top",
				icon: "ShieldCheckIcon",
			},
			{
				name: "FAQs",
				description: "Learn more about the team.",
				href: "/faq",
				target: "_top",
				icon: "Squares2X2Icon",
			},
		],
	},
	{
		title: "example",
		href: "/example",
	},
	{
		title: "test",
		href: "/test",
	},
];

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const test = await getMainMenu();
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
					<NavBar nav={nav} />
					{children} <Footer />
					<ScrollToButtonButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
