"use client";
import { useEffect, useState, useRef } from "react";

import Image from "next/image";

import MainMenu from "./main-menu/main-menu";
import React from "react";
import Link from "next/link";

export default function HeaderSection({ mainMenu }) {
	const [isNavbarSticky, setIsNavbarSticky] = useState(false);
	const navbarAreaEl = useRef(null);

	function fixNavBar() {
		if (navbarAreaEl.current) {
			setIsNavbarSticky(window.scrollY > navbarAreaEl.current.offsetTop);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", fixNavBar);

		return () => {
			window.removeEventListener("scroll", fixNavBar);
		};
	}, []);

	return (
		<header className="header relative">
			<div
				ref={navbarAreaEl}
				className={`absolute top-0 z-50 left-0 right-0 w-screen  ${
					isNavbarSticky ? "sticky" : ""
				}`}
			>
				<div className="container">
					<div className="w-screen mx-auto align-items-center">
						<div className="mx-auto">
							<nav className="flex justify-between max-w-[1440px] z-50 mx-auto">
								<Link className="navbar-brand" href="/">
									<Image
										src="https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6"
										alt="Logo"
										width={180}
										height={45}
										style={{
											maxWidth: "100%",
											height: "auto",
										}}
									/>
								</Link>
								<MainMenu mainMenuLinks={mainMenu} />
							</nav>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
