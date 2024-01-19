import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { cloneElement } from "react";
import Image from "next/image";

export default function Features({ ...params }) {
	console.log("Features", params);
	return (
		<div className="bg-cover bg-center bg-feature-background inset-0 -z-10 min-h-screen w-screen ">
			<div className="container grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col my-20">
					<div className="grid place-content-start">
						<p className="p-2 tracking-[3px] text-giggles-yellow">ABOUT</p>
						<h1 className="p-2 font-title text-4xl md:text-[56px]">
							hi, we&apos;re giggles.
						</h1>
						<p className="max-w-lg p-2 font-quicksand text-xl leading-[32px]">
							An indoor playspace and gathering place{" "}
							<br className="hidden sm:block" /> located in the heart of
							Highwood, IL.
						</p>
						<div className="z-20 my-10 flex">
							<div className="my-auto">
								<Icons.hours className="h-24 w-24" />
							</div>
							{/* <Separator orientation="vertical" className="bg-[#232323]" /> */}

							<div className="flex items-center pl-4">
								<div>
									<div className="font-quicksand text-lg">
										<p>Mon - Thur: 10am - 6pm</p>
										<p>Fri: 10am - 7:30pm</p>
										<p>Sat: 10am - 6pm</p>
										<p>Sun: 11am - 5pm</p>
									</div>
								</div>
							</div>
						</div>
						<p className="max-w-lg p-2">
							Please note that weekend hours will vary based on private events.
							Refer to{" "}
							<Link
								href={"https://g.co/kgs/STgKdp"}
								className="font-bold text-giggles-navy underline"
								target="_blank"
							>
								Google
							</Link>{" "}
							for our most up to date hours.
						</p>
						<Link href="#" target="_top" className="mx-auto sm:ml-0">
							<Button
								variant="outline2"
								className="mt-4 h-[48px] border-[1px] border-solid  px-6"
							>
								<span className="w-0 h-0 rounded-full bg-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 transition-all group-hover:w-[200px] group-hover:h-[200px] -z-1"></span>
								Discover Our Work
							</Button>
						</Link>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-20">
					{params.features.map((feature: any, index: number) => {
						return (
							<Card
								key={index}
								className="border-none shadow-none grid place-items-center text-center bg-transparent"
							>
								<CardContent className="space-y-2">
									<Image
										src={feature.icon.url}
										alt={""}
										height={feature.icon.height}
										width={feature.icon.width}
										className="rounded-lg"
									></Image>
								</CardContent>
								<CardHeader>
									<CardTitle>{feature.headline}</CardTitle>
									<CardDescription>{feature.description}</CardDescription>
								</CardHeader>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
}
