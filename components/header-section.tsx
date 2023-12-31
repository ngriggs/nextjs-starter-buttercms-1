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
		<header className="w-screen relative">
			<div
				ref={navbarAreaEl}
				className={`w-screen h-[80px] absolute top-0 z-50  ${
					isNavbarSticky ? "sticky" : ""
				}`}
			>
				<div className="max-w-[1440px] mx-auto my-auto place-items-center">
					<div className=" mx-auto align-items-center">
						<div className="mx-auto my-auto">
							<nav className="flex justify-between z-50 mx-auto">
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
