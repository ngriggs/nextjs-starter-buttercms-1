import { useEffect, useState, useRef } from "react";

import MainMenuLink from "./main-menu-link";
import React from "react";

type MainMenuLink = {
	url: string;
	label: string;
	callbackOnClick?: () => void;
};

type MainMenuProps = {
	mainMenuLinks: MainMenuLink[];
};

export default function ManiMenu({ mainMenuLinks }) {
	const [activeMenuLink, setActiveMenuLink] = useState(
		mainMenuLinks.length ? mainMenuLinks[0].url : ""
	);

	function highlightLinks() {
		const sections = document.querySelectorAll(".page-scroll");
		const scrollPos =
			window.scrollY ||
			document.documentElement.scrollTop ||
			document.body.scrollTop;

		sections.forEach((currLink) => {
			const val = currLink.getAttribute("href").slice(1);
			if (val[0] !== "#") {
				return;
			}
			const refElement = document.querySelector(val) as HTMLElement;
			if (!refElement) {
				return;
			}

			const scrollTopMinus = scrollPos + 73;

			if (
				refElement.offsetTop <= scrollTopMinus &&
				refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
			) {
				setActiveMenuLink(val);
			}
		});
	}

	useEffect(() => {
		window.addEventListener("scroll", highlightLinks);

		return () => {
			window.removeEventListener("scroll", highlightLinks);
		};
	}, []);

	const [isMenuActive, setMenuActive] = useState(false);
	const menuLinksEl = useRef(null);

	function inactivateMenu() {
		setMenuActive(false);
		if (menuLinksEl.current) {
			menuLinksEl.current.classList.remove("show");
		}
	}

	return (
		<>
			<button
				className={`navbar-toggler md:hidden ${isMenuActive ? "active" : ""}`}
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				onClick={() => setMenuActive(!isMenuActive)}
			>
				<span className="toggler-icon"></span>
				<span className="toggler-icon"></span>
				<span className="toggler-icon"></span>
			</button>

			<div className="hidden md:flex" ref={menuLinksEl}>
				<div className="ms-auto my-auto">
					<ul id="nav" className="flex ms-auto space-x-5">
						{mainMenuLinks.map((navLink) => (
							<MainMenuLink
								key={navLink.url}
								url={navLink.url}
								label={navLink.label}
								active={navLink.url === activeMenuLink}
								callbackOnClick={inactivateMenu}
							/>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
