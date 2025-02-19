"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle({ align }: any) {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="w-9 px-0">
					<SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align={align}>
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<SunIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<MoonIcon className="h-[1.2rem] w-[1.2rem] mr-2" />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
