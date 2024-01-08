"use client";
import React, { useState, useRef, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
			example.current.blur();
		}, 200); // Adjust the delay time (in milliseconds) as needed
		setMouseInside(false);
		example.current.blur();
	};

	const handlePopoverMouseEnter = () => {
		clearTimeout(closeTimeoutRef.current!);
		setMouseInside(true);
	};

	const handlePopoverMouseLeave = () => {
		clearTimeout(closeTimeoutRef.current!);
		setOpen(false);
		setMouseInside(false);
		example.current.blur();
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<Link href={item.link}>
				<PopoverTrigger
					className={`group flex cursor-pointer flex-row my-auto text-lg transition-all ${
						desiredPath === item.link ? "underline" : ""
					}`}
					// ... (existing code)
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					ref={example}
					// Conditionally blur based on the mouse position
					onFocus={() => {
						if (!isMouseInside) {
							example.current.blur();
						}
					}}
				>
					{item.title}
					<Icons.chevronDown
						className="relative my-auto ml-2 h-5 w-5 stroke-1 transition-transform duration-200 group-data-[state=open]:rotate-180"
						aria-hidden="true"
					/>
				</PopoverTrigger>
			</Link>

			<PopoverContent
				className="mt-[15px] rounded-sm"
				onMouseEnter={handlePopoverMouseEnter}
				onMouseLeave={handlePopoverMouseLeave}
				onMouseOut={() => {
					example.current.blur();
				}}
				side="top"
				sideOffset={0}
			>
				{item.submenu?.map((sub: any) => (
					<div className="text-base font-light" key={sub.name}>
						<Link
							key={sub.title}
							href={sub.link}
							// target={sub.link}
							className="-m-3 flex items-start rounded-sm p-3"
						>
							<ul className="">
								<li className="text-base font-light hover:underline hover:underline-offset-2">
									{sub.title}
								</li>
							</ul>
						</Link>
					</div>
				))}
			</PopoverContent>
		</Popover>
	);
}
