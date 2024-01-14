import React, { cloneElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./icons";

export default function footer({ socialMedia }: any) {
	return (
		<footer className=" z-80 relative pt-12">
			<div className="mx-auto flex container flex-col p-2 md:flex-row">
				<div className="flex-1 flex-col">
					<div className="mb-[3.75rem] mt-5 flex justify-center">
						<Link href="/" className="hover:cursor-pointer">
							<Image
								className="hover:translate-y-[-2px]"
								width={260}
								height={70}
								alt="logo"
								src="/lgalogotrans.png"
								priority={false}
							/>
						</Link>
					</div>
					<div className="my-6 flex flex-row justify-center md:mt-0">
						{socialMedia.map((social: any, index: number) => (
							<div
								key={social.id}
								className={`h-[28px] w-[28px] cursor-pointer object-contain hover:scale-105 ${
									index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
								}`}
							>
								<Link
									href={social.link}
									target={"_blank"}
									aria-label={social.id}
								>
									{cloneElement(social.icon, {
										className: "h-[34px] w-[34px] fill-primary",
									})}
								</Link>
							</div>
						))}
					</div>
					<p className="p-2 text-center">
						Please note that weekend hours will vary based on private events.
						Refer to{" "}
						<Link
							href={"https://www.google.com"}
							className="font-bold text-giggles-navy underline"
							target="_blank"
						>
							Google
						</Link>
						for our most up to date hours.
					</p>
				</div>
				<div className="my-auto flex mx-auto p-2">
					<div className="my-auto grid grid-cols-1 place-items-center sm:grid-cols-2	">
						<div className="mb-4 max-w-sm text-center md:text-left md:mr-12">
							<div className="">
								<p className="mb-2 font-bold uppercase text-giggles-red">
									Hours of Operation
								</p>
								<p className="py-1">Mon - Thur: 10am - 6pm</p>
								<p className="py-1">Fri: 10am - 7:30pm</p>
								<p className="py-1">Sat: 10am - 6pm</p>
								<p className="py-1">Sun: 11am - 5pm</p>
							</div>
						</div>
						<div className="max-w-sm text-center md:text-left items-center">
							<p className="mb-2 font-bold uppercase text-giggles-red">
								Get in touch
							</p>
							<div className="flex items-center py-2">
								<Icons.mapPin className="h-6 w-6 text-primary" />
								<Link
									href="https://goo.gl/maps/iREUWyU461kGBvVL7?coh=178571&entry=tt"
									target="_blank"
									className="ml-2"
								>
									328 Green Bay Road,
									<br /> Highwood, IL 60040
								</Link>
							</div>

							<div className="flex items-center py-2">
								<Icons.email className="h-6 w-6 fill-primary" />
								<a href="mailto:info@gigglesplay.com" className="ml-2">
									info@gigglesplay.com
								</a>
							</div>

							<div className="flex items-center py-2">
								<Icons.phone className="h-6 w-6 text-primary" />
								<a href="tel:8477488621" className="ml-2">
									847-748-8621
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-0 flex w-screen bg-giggles-yellow-100">
				<div className="mx-auto flex w-screen flex-col gap-4 px-10 py-3 text-center sm:flex-row sm:justify-between sm:text-left">
					<div className="">
						&copy; {new Date().getFullYear()} Libertyville Gymnastics Academy.
						All rights reserved.
					</div>

					<div className="">
						<Link className="hover:underline" href="/privacy">
							Privacy Policy
						</Link>
						<span> | </span>
						<Link className="hover:underline" href="/tos">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

export function Footer2() {
	return (
		<footer className="bg-gray-800 relative text-white pt-10 px-4 md:px-6">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div>
					<Link href="/" className="hover:cursor-pointer w-full">
						<Image
							className="hover:scale-105 transition-all w-full"
							width={260}
							height={70}
							alt="logo"
							src="/lgalogotrans.png"
							priority={false}
						/>
					</Link>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-4">Quick Links</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link
								className="text-white hover:underline"
								href="/"
								target="_top"
							>
								Home
							</Link>
						</li>
						<li>
							<Link className="text-white hover:underline" href="/about">
								About us
							</Link>
						</li>
						<li>
							<Link className="text-white hover:underline" href="/events">
								Events
							</Link>
						</li>
						<li>
							<Link className="text-white hover:underline" href="/classes">
								Classes
							</Link>
						</li>
						<li>
							<Link className="text-white hover:underline" href="/team">
								Coaches
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-4">Contact Us</h3>
					<p className="text-sm">
						2610 Commerce Dr <br /> Libertyville, IL 60048
						<br />
						Email: info@example.com
						<br />
						Phone: +1 234 567 890
					</p>
				</div>
				<div>
					<h3 className="font-semibold text-lg mb-4">Follow Us</h3>
					<div className="flex space-x-4">
						<Link href="#">
							<FacebookIcon className="h-6 w-6 hover:scale-105" />
						</Link>
						<Link href="#">
							<TwitterIcon className="h-6 w-6 hover:scale-105" />
						</Link>
						<Link href="#">
							<InstagramIcon className="h-6 w-6 hover:scale-105" />
						</Link>
					</div>
				</div>
			</div>

			<div className="bottom-0 flex w-screen border-t border-gray-700 mt-10 pt-6 ">
				<div className="mx-auto flex w-screen flex-col gap-4 px-10 py-3 text-center sm:flex-row sm:justify-between sm:text-left">
					<div className="">
						&copy; {new Date().getFullYear()} Libertyville Gymnastics Academy.
						All rights reserved. Website by{" "}
						<Link href={"https://jncollective.org"} target="_blank">
							JN Collective.
						</Link>
					</div>

					<div className="">
						<Link className="hover:underline" href="/privacy">
							Privacy Policy
						</Link>
						<span> | </span>
						<Link className="hover:underline" href="/tos">
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FacebookIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
		</svg>
	);
}

function InstagramIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
			<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
			<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
		</svg>
	);
}

function TwitterIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}
