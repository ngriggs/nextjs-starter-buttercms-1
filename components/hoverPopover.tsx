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
				className="mt-[15px] rounded-sm"
				onMouseEnter={handlePopoverMouseEnter}
				onMouseLeave={handlePopoverMouseLeave}
				side="top"
				sideOffset={0}
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
