import React, { cloneElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "./icons";

export default function footer({ socialMedia }) {
	return (
		<footer className="clip5 sm:clip4 z-80 relative bg-giggles-yellow-100 pt-12">
			<div className="mx-auto flex max-w-7xl flex-col p-2 md:flex-row">
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
						{socialMedia.map((social, index) => (
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
