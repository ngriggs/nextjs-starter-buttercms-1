"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Link from "next/link";

export default function ScrollToButtonButton() {
	const [hasScrollToTopButton, setHasScrollToTopButton] = useState(false);

	function toggleScrollTopButton() {
		setHasScrollToTopButton(
			document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
		);
	}

	useEffect(() => {
		window.addEventListener("scroll", toggleScrollTopButton);

		return () => {
			window.removeEventListener("scroll", toggleScrollTopButton);
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
