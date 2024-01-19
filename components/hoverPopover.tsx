"use client";
import React, { useState, useRef, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function HoverPopover({ item }: any) {
	const [open, setOpen] = useState(false);
	const [isMouseInside, setMouseInside] = useState(false);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const example = useRef(null);
	const pathName = usePathname();
	const desiredPath = "/" + pathName.split("/").slice(1, 2).join("/");

	const handleMouseEnter = () => {
		clearTimeout(closeTimeoutRef.current!);
		setOpen(true);
		setMouseInside(true);
	};

	const handleMouseLeave = () => {
		closeTimeoutRef.current = setTimeout(() => {
			setOpen(false);
		}, 200); // Adjust the delay time (in milliseconds) as needed
		setMouseInside(false);
	};

	const handlePopoverMouseEnter = () => {
		clearTimeout(closeTimeoutRef.current!);
		setMouseInside(true);
	};

	const handlePopoverMouseLeave = () => {
		clearTimeout(closeTimeoutRef.current!);
		setOpen(false);
		setMouseInside(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<Link href={item.link}>
				<PopoverTrigger
					className={`group flex cursor-pointer flex-row my-auto text-lg transition-all ${
						desiredPath === item.link ? "underline" : ""
					}`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					ref={example}
				>
					{item.title}
					<Icons.chevronDown
						className="relative my-auto ml-2 h-5 w-5 stroke-1 transition-transform duration-200 group-data-[state=open]:rotate-180"
						aria-hidden="true"
					/>
				</PopoverTrigger>
			</Link>

			<PopoverContent
				className="rounded-sm p-1"
				onMouseEnter={handlePopoverMouseEnter}
				onMouseLeave={handlePopoverMouseLeave}
				side="top"
				sideOffset={5}
				onCloseAutoFocus={(event) => {
					event.preventDefault();
				}}
			>
				{item.submenu?.map((sub: any) => (
					<div className="text-base font-light" key={sub.title}>
						<Link
							key={sub.title}
							href={sub.link}
							// target={sub.link}
							className="flex items-start rounded-sm"
						>
							<ul className="w-full flex flex-col">
								<li className="text-base font-light px-3 py-2 rounded-sm focus:bg-accent hover:bg-accent h-full w-full">
									{/* <Button variant={"ghost"} className="w-full"> */}
									{sub.title}
									{/* </Button> */}
								</li>
							</ul>
						</Link>
					</div>
				))}
			</PopoverContent>
		</Popover>
	);
}
