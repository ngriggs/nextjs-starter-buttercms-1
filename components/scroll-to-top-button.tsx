"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";

export default function ScrollToButtonButton() {
	const [hasScrollToTopButton, setHasScrollToTopButton] = useState(true);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const windowHeight = window.innerHeight;
		const documentHeight = document.documentElement.scrollHeight;

		// Adjust the threshold as needed
		const threshold = 50;
		requestAnimationFrame(() => {
			if (
				documentHeight - (scrollPosition + windowHeight) < threshold ||
				scrollPosition < 50
			) {
				setHasScrollToTopButton(false);
			} else {
				setHasScrollToTopButton(true);
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{hasScrollToTopButton && (
				<Link href="#" className="fixed bottom-5 right-5">
					<Button className="rounded-xl h-10 w-10 p-2" variant="default">
						<Icons.chevronDown className="rotate-180 h-7 w-7" />
					</Button>
				</Link>
			)}
		</>
	);
}
