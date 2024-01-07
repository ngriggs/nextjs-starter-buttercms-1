"use client";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

import { Button } from "./ui/button";

import { Separator } from "./ui/separator";
import Link from "next/link";
import { useState, useRef, useEffect, cloneElement } from "react";
import HoverPopover from "./hoverPopover";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./mode-toggle";

export default function NavBar({ test, socialMedia }) {
	const [showSeparator, setShowSeparator] = useState(false);
	const [isNavbarSticky, setIsNavbarSticky] = useState(false);
	const navbarAreaEl = useRef(null);
	const [open, setOpen] = useState(false);
	const pathName = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || window.pageYOffset;

			if (navbarAreaEl.current) {
				setShowSeparator(scrollY >= navbarAreaEl.current.offsetHeight);
				setIsNavbarSticky(scrollY >= 1);
			}
		};
		handleScroll();

		// Attach scroll event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Detach scroll event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header className="relative">
			{/* Main nav */}
			<div className="hidden md:block">
				<div
					className={`w-screen font-extrabold text-3xl tracking-wide top-0 z-50 dark:bg-gray-800 dark:text-white  ${
						isNavbarSticky ? "fixed  bg-white z-50" : "absolute"
					}`}
					ref={navbarAreaEl}
				>
					<div className="z-20 flex items-center justify-between px-4 lg:px-6">
						<div className="flex flex-1 justify-items-start space-x-4">
							{/* <Link className="relative" href="/" target="_top">
								<div className="flex items-center justify-center bg-white dark:bg-gray-800 z-10 h-[112px] w-[112px] rounded-full">
									<Image
										src={"/lgalogotrans.png"}
										alt={"libertyville gymnastics academy"}
										width={100}
										height={100}
										className="relative z-20"
									/>
								</div>
							</Link> */}
							<nav className="hidden gap-4 text-sm sm:gap-6 md:block my-auto">
								<div className="flex">
									<Link
										className="flex-1 flex mr-6 my-1 bg-white rounded-sm rounded-tl-3xl rounded-br-3xl"
										href="/"
										target="_top"
									>
										<Image
											src={"/lgalogotrans.png"}
											alt={"libertyville gymnastics academy"}
											width={100}
											height={100}
										/>
									</Link>
									{test?.length ? (
										<div className="my-auto hidden flex-1 justify-center space-x-8 md:flex md:flex-1 ">
											{test?.map((item, index) => {
												return item.submenu.length > 0 ? (
													<HoverPopover
														item={item}
														key={index + Math.random()}
													/>
												) : (
													<Link
														href={item.link!}
														key={item.title}
														className={`group flex cursor-pointer flex-row text-lg hover:underline ${
															pathName === item.link ? "underline" : ""
														}`}
													>
														{item.title}
													</Link>
												);
											})}
										</div>
									) : null}
								</div>
							</nav>
							<div className="my-auto flex justify-end place-content-end items-end">
								<ModeToggle align={"left"} />
							</div>
						</div>

						<div className="hidden justify-end md:flex md:flex-1 my-1">
							<Dialog>
								<DialogTrigger asChild>
									<Button variant="outline2">
										<span className="w-0 h-0 rounded-full bg-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 transition-all group-hover:w-[200px] group-hover:h-[200px] -z-1"></span>
										Get in Touch
									</Button>
								</DialogTrigger>
								<DialogContent className="sm:max-w-[425px]">
									<DialogHeader>
										<DialogTitle>Join our newsletter</DialogTitle>
										<DialogDescription>
											Make changes to your profile here. Click save when
											you&apos;re done.
										</DialogDescription>
									</DialogHeader>
									<div className="grid gap-4 py-4">
										<div className="grid grid-cols-4 items-center gap-4">
											<Label htmlFor="name" className="text-right">
												Name
											</Label>
											<Input
												id="name"
												placeholder="your name"
												className="col-span-3"
											/>
										</div>
										<div className="grid grid-cols-4 items-center gap-4">
											<Label htmlFor="email" className="text-right">
												Email Address
											</Label>
											<Input
												id="email"
												placeholder="email address"
												className="col-span-3"
											/>
										</div>
										<div className="grid grid-cols-4 items-center gap-4">
											<Label htmlFor="text" className="text-right">
												Message
											</Label>
											<Textarea
												className="col-span-3"
												placeholder="Type your message here."
											/>
										</div>
									</div>
									<DialogFooter>
										<Button type="submit">Save changes</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						</div>
					</div>

					{showSeparator && (
						<Separator className="z-20 hidden bg-primary md:block" />
					)}
				</div>
			</div>
			{/* Mobile nav */}
			<div className="md:hidden w-screen bg-white text-black dark:bg-gray-800 dark:text-white fixed top-0 z-50">
				<div className="z-20 grid grid-cols-3 px-4 lg:px-6">
					<div className="grid justify-start items-center">
						<Popover open={open} onOpenChange={setOpen} modal>
							<PopoverTrigger className="group px-2 md:hidden">
								<div
									className={`w-[20px] md:hidden group flex flex-col`}
									data-bs-toggle="collapse"
									data-bs-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent"
									aria-expanded="false"
									aria-label="Toggle navigation"
								>
									<span className="w-[20px] h-[2px] m-[2px] bg-black dark:bg-white duration-300 group-data-[state=open]:rotate-45"></span>
									<span
										className={`w-[20px] h-[2px] m-[2px] bg-black dark:bg-white duration-300 group-data-[state=open]:hidden`}
									></span>
									<span
										className={`w-[20px] h-[2px] m-[2px] bg-black dark:bg-white duration-300 group-data-[state=open]:-rotate-45 group-data-[state=open]:translate-y-[-6px]`}
									></span>
								</div>
							</PopoverTrigger>
							<PopoverContent
								sideOffset={39}
								side="top"
								className="-mt-1 h-screen overflow-scroll rounded-none border-none"
							>
								{/* <Separator className="z-20 -ml-4 -mt-1 w-screen bg-slate-900" /> */}
								<Accordion
									type="single"
									collapsible
									className="w-screen pr-10 text-2xl"
								>
									{test?.map((item) =>
										item.submenu.length > 0 ? (
											<AccordionItem
												value={item.title}
												key={item.title}
												className="my-4"
											>
												<AccordionTrigger className="text-xl font-medium">
													{item.title}
												</AccordionTrigger>
												<AccordionContent>
													{item.submenu?.map((sub) => (
														<Link
															key={sub.title}
															href={sub.link}
															target={"_top"}
															className="-m-3 my-2 flex items-start rounded-lg p-3 pl-8 text-lg font-normal"
															onClick={() => setOpen(false)}
														>
															{sub.title}
														</Link>
													))}
												</AccordionContent>
											</AccordionItem>
										) : (
											<div key={item.title}>
												<Link
													href={item.link}
													target={"_top"}
													className="mb-2 mt-4 flex items-start rounded-lg pt-4 text-xl font-medium"
												>
													{item.title}
												</Link>
												<Separator className="my-4 bg-primary" />
											</div>
										)
									)}
								</Accordion>
								<div className="my-auto flex justify-center py-7">
									<Link href="/contact" target="_top">
										<Button
											variant={"outline2"}
											className="rounded-full uppercase"
										>
											Get in touch
										</Button>
									</Link>
								</div>
								<div className="mb-[120px] flex h-[20vh] flex-1 items-end justify-center pb-20">
									{socialMedia.map((social, index) => (
										<div
											key={social.id}
											className={`h-[34px] w-[34px] cursor-pointer object-contain hover:scale-105 ${
												index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
											}`}
										>
											<Link
												href={social.link}
												target={"_blank"}
												aria-label={social.id}
											>
												{cloneElement(social.icon, {
													className: "h-[34px] w-[34px] fill-primary mt-20",
												})}
											</Link>
										</div>
									))}
								</div>
							</PopoverContent>
						</Popover>
					</div>
					<Link className="grid place-items-center" href="/" target="_top">
						<Image
							src={"/lgalogotrans.png"}
							alt={"libertyville gymnastics academy"}
							width={100}
							height={100}
						/>
					</Link>
					<div className="grid justify-end items-center">
						<ModeToggle align={"center"} />
					</div>
				</div>
			</div>
		</header>
	);
}
