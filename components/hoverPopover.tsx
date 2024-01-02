"use client";
import React, { useState, useRef, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Icons } from "./icons";
import Link from "next/link";

export default function HoverPopover({ item }: any) {
	const [open, setOpen] = useState(false);
	let timeoutId: NodeJS.Timeout | null = null;

	const handleMouseEnter = () => {
		clearTimeout(timeoutId!); // Clear the timeout if the mouse re-enters the popover
		setOpen(true);
	};

	const handleMouseLeave = () => {
		// Set a timeout to delay closing the popover
		timeoutId = setTimeout(() => {
			setOpen(false);
		}, 200); // Delay of 200 ms
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				className="group flex cursor-pointer flex-row text-[#232323] my-auto text-lg focus-visible:ring-transparent hover:text-primary-foreground transition-all"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{item.title}
				<Icons.chevronDown
					className="relative my-auto ml-2 h-5 w-5 stroke-1 transition-transform duration-200 group-data-[state=open]:rotate-180"
					aria-hidden="true"
				/>
			</PopoverTrigger>
			<PopoverContent
				className="mt-[15px] rounded-sm"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{item.subheadings?.map((sub: any) => (
					<div className="text-base font-light" key={sub.name}>
						<Link
							key={sub.name}
							href={sub.href}
							target={sub.target}
							className="-m-3 flex items-start rounded-sm p-3"
						>
							<ul className="">
								<li className="text-base font-light hover:underline hover:underline-offset-2">
									{sub.name}
								</li>
							</ul>
						</Link>
					</div>
				))}
			</PopoverContent>
		</Popover>
	);
}
