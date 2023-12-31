"use client";
import React, { useState, useRef } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Icons } from "./icons";
import Link from "next/link";

export default function HoverPopover({ item }: any) {
	const [open, setOpen] = useState(false);
	const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleMouseEnter = () => {
		clearTimeout(closeTimeoutRef.current!);
		setOpen(true);
	};

	const handleMouseLeave = () => {
		closeTimeoutRef.current = setTimeout(() => {
			setOpen(false);
		}, 100); // Adjust the delay time (in milliseconds) as needed
	};

	const handlePopoverMouseEnter = () => {
		clearTimeout(closeTimeoutRef.current!);
	};

	const handlePopoverMouseLeave = () => {
		clearTimeout(closeTimeoutRef.current!);
		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			{/* // <Popover> */}
			<PopoverTrigger
				className="group flex cursor-pointer flex-row text-base font-light text-[#232323] hover:text-[#37c2cc] transition-all"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{item.title}
				<Icons.chevronDown
					className="relative my-auto ml-2 h-5 w-5 stroke-1 transition duration-200 group-data-[state=open]:rotate-180"
					aria-hidden="true"
				/>
			</PopoverTrigger>
			<PopoverContent
				onMouseEnter={handlePopoverMouseEnter}
				onMouseLeave={handlePopoverMouseLeave}
				className="mt-[15px] rounded-sm"
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
