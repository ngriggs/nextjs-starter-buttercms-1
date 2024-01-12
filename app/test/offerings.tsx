import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../components/ui/tabs";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cloneElement } from "react";

export default function Offerings() {
	const classes = [
		{
			title: "Ninja Zone",
			icon: <ConeIcon />,
			description:
				"Ninja Zone is a discipline inspired from Obstacle Course Training, Gymnastics, Street Dance, & Martial Arts.",
		},
		{
			title: "Recreational",
			description:
				"LGA follows the guidlines of the USAG gymnastics level 1-4 for bothboys and girls.",
			icon: <RingsIcon />,
		},
		{
			title: "Preschool",
			description:
				"Our program is based on a variety of skills, musical activities and rhythm to enhance your child’s overall development.",
			icon: <PreschoolIcon />,
		},
		{
			title: "Cheer Tumble",
			description:
				"Our program is USASF (US All Star Federation for Cheer & Dance Teams) Levels 1-4 Tumbling & Safety Rules & Regulations.",
			icon: <CheerTumble />,
		},
	];
	return (
		<Tabs
			defaultValue="classes"
			className="container min-h-svh items-center flex flex-col justify-center relative"
		>
			<div className="flex items-center justify-center pb-3 bg-transparent w-full mx-auto space-x-3">
				<TabsList className="grid grid-cols-3 bg-transparent space-x-3">
					<TabsTrigger
						value="classes"
						className="data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#8d2de1] data-[state=active]:to-[#4a00e0] data-[state=active]:text-primary-foreground border-primary border hover:bg-primary/90 hover:text-primary-foreground w-[190px] rounded-full"
					>
						Classes
					</TabsTrigger>
					<TabsTrigger
						value="events"
						className="data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#8d2de1] data-[state=active]:to-[#4a00e0] data-[state=active]:text-primary-foreground border-primary border hover:bg-primary/90 hover:text-primary-foreground w-[190px] rounded-full"
					>
						Events
					</TabsTrigger>
					<TabsTrigger
						value="parties"
						className="data-[state=active]:bg-gradient-to-l data-[state=active]:from-[#8d2de1] data-[state=active]:to-[#4a00e0] data-[state=active]:text-primary-foreground border-primary border hover:bg-primary/90 hover:text-primary-foreground w-[190px] rounded-full"
					>
						Parties
					</TabsTrigger>
				</TabsList>
			</div>
			<TabsContent
				value="classes"
				className="border-none shadow-none place-items-center grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
			>
				{classes.map((item, index) => {
					return (
						<Card
							key={index}
							className="border-none shadow-none grid place-items-center text-center"
						>
							<CardContent className="space-y-2">
								{cloneElement(item.icon)}
							</CardContent>
							<CardHeader>
								<CardTitle>{item.title}</CardTitle>
								<CardDescription>{item.description}</CardDescription>
							</CardHeader>
						</Card>
					);
				})}
				<p>classes</p>
			</TabsContent>
			<TabsContent
				value="events"
				className="relative border-none shadow-none place-items-center grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
			>
				{classes.map((item, index) => {
					return (
						<Card
							key={index}
							className="border-none shadow-none grid place-items-center text-center"
						>
							<CardContent className="space-y-2">
								{cloneElement(item.icon)}
							</CardContent>
							<CardHeader>
								<CardTitle>{item.title}</CardTitle>
								<CardDescription>{item.description}</CardDescription>
							</CardHeader>
						</Card>
					);
				})}
				<p>events</p>
			</TabsContent>
			<TabsContent
				value="parties"
				className="border-none shadow-none place-items-center grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
			>
				{classes.map((item, index) => {
					return (
						<Card
							key={index}
							className="border-none shadow-none grid place-items-center text-center"
						>
							<CardContent className="space-y-2">
								{cloneElement(item.icon)}
							</CardContent>
							<CardHeader>
								<CardTitle>{item.title}</CardTitle>
								<CardDescription>{item.description}</CardDescription>
							</CardHeader>
						</Card>
					);
				})}
				<p>parties</p>
			</TabsContent>
		</Tabs>
	);
}

function ConeIcon(props) {
	return (
		<svg
			width="100"
			height="92"
			viewBox="0 0 100 92"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M95.1213 56.856L74.233 46.4118L60.315 7.43369C58.7607 3.08799 54.6184 0.166504 50 0.166504C45.3816 0.166504 41.2395 3.08799 39.685 7.43584L25.767 46.4118L4.87871 56.856C1.86777 58.3616 0 61.3849 0 64.7499C0 68.1108 1.86777 71.1362 4.87871 72.6438L37.2273 88.8183C41.1742 90.7897 45.5893 91.8335 50 91.8335C54.4107 91.8335 58.8258 90.7897 62.7727 88.8183L95.1213 72.6438C98.1324 71.1362 100 68.1108 100 64.7499C100 61.3849 98.1324 58.3616 95.1213 56.856ZM38.4645 23.246C41.6301 24.5073 45.5648 25.1665 50.0002 25.1665C54.4355 25.1665 58.3701 24.5073 61.5359 23.246L65.2754 33.7075C62.248 36.1714 56.5678 37.6667 50.0004 37.6667C43.433 37.6667 37.7527 36.1714 34.7254 33.7075L38.4645 23.246ZM50 70.9999C39.982 70.9999 25.5045 67.0794 25.0121 60.9087L27.71 53.3606C32.776 56.6526 40.6779 58.4999 50 58.4999C59.3221 58.4999 67.2242 56.6526 72.29 53.3606L74.9879 60.9087C74.4955 67.0794 60.018 70.9999 50 70.9999Z"
				fill="url(#paint0_linear_4_82)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_4_82"
					x1="50"
					y1="0.166504"
					x2="50"
					y2="91.8335"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#4A00E0" />
					<stop offset="1" stop-color="#8D2DE1" />
				</linearGradient>
			</defs>
		</svg>
	);
}

function RingsIcon(props) {
	return (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M33.3334 41.6665C19.5476 41.6665 8.33337 52.8808 8.33337 66.6665C8.33337 80.4522 19.5476 91.6665 33.3334 91.6665C47.1191 91.6665 58.3334 80.4522 58.3334 66.6665C58.3334 52.8808 47.1191 41.6665 33.3334 41.6665ZM33.3334 87.4999C21.8465 87.4999 12.5 78.1534 12.5 66.6665C12.5 55.1796 21.8465 45.8331 33.3334 45.8331C34.1451 45.8331 34.916 45.9819 35.7039 46.0728C34.1564 49.9642 33.3334 54.0677 33.3334 58.3331C33.3334 68.1638 37.7429 77.4534 45.1904 83.7573C41.8197 86.1038 37.7422 87.4999 33.3334 87.4999ZM48.3859 80.9931C41.5605 75.4761 37.5 67.1548 37.5 58.3333C37.5 54.3681 38.3183 50.5665 39.8435 46.9782C41.1785 47.4216 42.4451 47.9837 43.6455 48.6747C42.3695 51.7226 41.6666 55.0138 41.6666 58.3333C41.6666 65.8913 45.1133 72.9741 50.9306 77.7046C50.1877 78.8851 49.3433 79.9872 48.3859 80.9931ZM45.8334 58.3333C45.8334 55.844 46.2662 53.4419 47.1068 51.1573C51.4027 54.9767 54.1668 60.4804 54.1668 66.6667C54.1668 69.2124 53.6429 71.6233 52.8031 73.8804C48.4021 69.9495 45.8334 64.3091 45.8334 58.3333Z"
				fill="url(#paint0_linear_4_88)"
			/>
			<path
				d="M79.1666 27.4541V25C79.1666 21.1277 76.4998 17.8941 72.9166 16.9627V2.0834C72.9166 0.931836 71.985 0 70.8334 0H62.5C61.3484 0 60.4166 0.931836 60.4166 2.0834V16.9627C56.8334 17.8943 54.1666 21.1279 54.1666 25V27.4793C51.1385 28.7064 48.3041 30.3779 45.7432 32.442C45.3678 28.9734 42.884 26.1541 39.5832 25.2961V2.0834C39.5834 0.931836 38.6516 0 37.5 0H29.1666C28.015 0 27.0832 0.931836 27.0832 2.0834V25.2961C23.5 26.2277 20.8332 29.4613 20.8332 33.3334V35.7875C8.6334 40.7447 0 52.7084 0 66.6666C0 85.0465 14.9537 100 33.3334 100C42.5643 100 50.927 96.2248 56.9693 90.1412C60.1068 91.0975 63.348 91.6666 66.6668 91.6666C85.0465 91.6666 100 76.7129 100 58.3332C100 44.3752 91.3666 32.4115 79.1666 27.4541ZM64.5834 4.1666H68.75V16.6666H64.5834V4.1666ZM58.3334 25C58.3334 22.7031 60.2012 20.8334 62.5 20.8334H70.8334C73.1324 20.8334 75 22.7031 75 25V26.0971C72.3311 25.4061 69.5486 25 66.6666 25C63.8303 25 61.0391 25.4072 58.3332 26.1096V25H58.3334ZM31.25 4.1666H35.4166V25H31.25V4.1666ZM25 33.3334C25 31.0365 26.8678 29.1668 29.1666 29.1668H37.5C39.799 29.1668 41.6666 31.0365 41.6666 33.3334V34.4305C38.9977 33.7395 36.2152 33.3334 33.3332 33.3334C30.4514 33.3334 27.6689 33.7395 24.9998 34.4305L25 33.3334ZM33.3334 95.8334C17.2527 95.8334 4.1668 82.7494 4.1668 66.6668C4.1668 50.5842 17.2525 37.5 33.3334 37.5C49.4143 37.5 62.5 50.584 62.5 66.6666C62.5 82.7492 49.4141 95.8334 33.3334 95.8334ZM54.8594 41.2596C58.3227 38.8631 62.4049 37.5 66.6666 37.5C78.1535 37.5 87.5 46.8465 87.5 58.3334C87.5 69.8203 78.1535 79.1668 66.6666 79.1668C65.8619 79.1668 65.0596 79.1172 64.2641 79.026C65.7988 75.1994 66.6666 71.0355 66.6666 66.6668C66.6666 56.4908 62.0705 47.3787 54.8594 41.2596ZM66.6666 87.5C64.3842 87.5 62.1561 87.1439 59.966 86.627C60.8525 85.4469 61.6773 84.2201 62.4035 82.9268C63.8088 83.1689 65.2316 83.3334 66.6666 83.3334C80.4523 83.3334 91.6666 72.1191 91.6666 58.3334C91.6666 44.5477 80.4523 33.3334 66.6666 33.3334C61.0816 33.3334 55.7443 35.2723 51.3717 38.6781C50.0938 37.8516 48.7523 37.1205 47.3627 36.4719C52.6637 31.7984 59.5461 29.1668 66.6666 29.1668C82.7473 29.1668 95.8332 42.2508 95.8332 58.3334C95.8332 74.416 82.7475 87.5 66.6666 87.5Z"
				fill="url(#paint1_linear_4_88)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_4_88"
					x1="33.3334"
					y1="41.6665"
					x2="33.3334"
					y2="91.6665"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#8D2DE1" />
					<stop offset="1" stop-color="#4A00E0" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_4_88"
					x1="50.0001"
					y1="0"
					x2="50.0001"
					y2="100"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#8D2DE1" />
					<stop offset="1" stop-color="#4A00E0" />
				</linearGradient>
			</defs>
		</svg>
	);
}

function PreschoolIcon(props) {
	return (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clip-path="url(#clip0_4_138)">
				<g clip-path="url(#clip1_4_138)">
					<path
						d="M93.1818 18.1818C89.422 18.1818 86.3636 21.2401 86.3636 24.9999V27.2727H68.1819V6.81819C68.1819 3.05838 65.1235 0 61.3637 0C57.6039 0 54.5455 3.05838 54.5455 6.81819V9.09099H13.6364V6.81819C13.6364 3.05838 10.578 0 6.81819 0C3.05838 0 0 3.05838 0 6.81819V97.7274C0 98.9837 1.01655 100 2.2728 100H11.3638C12.62 100 13.6366 98.9837 13.6366 97.7274V22.7274H22.7276V36.7824C20.0879 37.7237 18.1822 40.2228 18.1822 43.1819C18.1822 46.9417 21.2406 50.0001 25.0004 50.0001C28.7602 50.0001 31.8186 46.9417 31.8186 43.1819C31.8186 40.2228 29.9129 37.7237 27.2732 36.7824V22.7274H40.9095V36.7824C38.2698 37.7237 36.3642 40.2228 36.3642 43.1819C36.3642 46.9417 39.4225 50.0001 43.1823 50.0001C46.9421 50.0001 50.0005 46.9417 50.0005 43.1819C50.0005 40.2228 48.0948 37.7237 45.4551 36.7824V22.7274H54.5455V97.7274C54.5455 98.9837 55.562 100 56.8183 100H65.9093C67.1655 100 68.1821 98.9837 68.1821 97.7274V40.9091H86.3638V97.7274C86.3638 98.9837 87.3804 100 88.6366 100H97.7276C98.9839 100 100 98.9837 100 97.7274V24.9999C100 21.2401 96.9416 18.1818 93.1818 18.1818ZM24.9999 45.4545C23.746 45.4545 22.7271 44.4358 22.7271 43.1817C22.7271 41.9276 23.746 40.9091 24.9999 40.9091C26.2539 40.9091 27.2727 41.9278 27.2727 43.1819C27.2727 44.436 26.2541 45.4545 24.9999 45.4545ZM43.1819 45.4545C41.928 45.4545 40.9091 44.4358 40.9091 43.1817C40.9091 41.9276 41.9278 40.9091 43.1819 40.9091C44.436 40.9091 45.4547 41.9278 45.4547 43.1819C45.4547 44.436 44.4358 45.4545 43.1819 45.4545Z"
						fill="url(#paint0_linear_4_138)"
					/>
				</g>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_4_138"
					x1="50.0002"
					y1="0"
					x2="50.0002"
					y2="100"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#4A00E0" />
					<stop offset="1" stop-color="#8D2DE1" />
				</linearGradient>
				<clipPath id="clip0_4_138">
					<rect width="100" height="100" fill="white" />
				</clipPath>
				<clipPath id="clip1_4_138">
					<rect width="100" height="100" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}

function CheerTumble(props) {
	return (
		<svg
			width="100"
			height="100"
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M85.4166 12.5C82.65 12.5 80.2666 14.1834 78.2625 16.9709L11.9209 40.2791C10.65 38.475 9.0459 37.5 7.2916 37.5C3.1334 37.5 0 42.875 0 50C0 57.125 3.1334 62.5 7.2916 62.5C9.0457 62.5 10.65 61.525 11.9207 59.7209L24.4998 64.1418L22.0623 68.2084C21.2582 69.55 20.8332 71.0875 20.8332 72.65C20.8332 76.2041 22.9623 79.35 26.2582 80.6666L41.5957 86.8C42.7666 87.2666 43.9873 87.4916 45.1916 87.4916C48.8125 87.4916 52.3041 85.4791 53.9957 82.0875L57.2207 75.6334L78.2582 83.025C80.2625 85.8166 82.65 87.5 85.4166 87.5C94.8875 87.5 100 68.1791 100 50C100 31.8209 94.8875 12.5 85.4166 12.5ZM46.5375 78.3625C46.225 78.9875 45.3459 79.3334 44.6916 79.0584L29.3541 72.925L29.2082 72.4916L32.5291 66.9582L49.2957 72.8498L46.5375 78.3625ZM85.4166 79.1666C83.5457 79.1666 79.1666 69.2457 79.1666 50C79.1666 30.7543 83.5457 20.8334 85.4166 20.8334C87.2875 20.8334 91.6666 30.7543 91.6666 50C91.6666 69.2457 87.2875 79.1666 85.4166 79.1666Z"
				fill="url(#paint0_linear_4_133)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_4_133"
					x1="50"
					y1="12.5"
					x2="50"
					y2="87.5"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#8D2DE1" />
					<stop offset="1" stop-color="#4A00E0" />
				</linearGradient>
			</defs>
		</svg>
	);
}
