import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../../components/ui/select";
import { Icons } from "../../components/icons";
import Link from "next/link";

// [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]

export default function Features({ ...params }) {
	console.log("Features", params);
	return (
		<div className="bg-cover bg-center bg-feature-background inset-0 -z-10 min-h-screen w-screen ">
			<div className="container grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col my-20">
					<div className="grid place-content-start">
						<p className="p-2 tracking-[3px] text-giggles-yellow">ABOUT</p>
						<h1 className="p-2 font-summerVibesSolid text-4xl tracking-[-2px] md:text-[56px]">
							hi, we&apos;re{" "}
							<span
								className="relative inline-block bg-giggles-svg2 bg-contain bg-center bg-no-repeat"
								style={{ backgroundSize: "80%", lineHeight: "1.5" }}
							>
								<span className="relative z-10">giggles</span>
							</span>
							.
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
					{[0, 1, 2, 3].map((_, index) => (
						<Card
							key={index}
							className=" transition-all duration-100 hover:outline hover:outline-border outline-border"
						>
							<CardHeader>
								<CardTitle>Create project</CardTitle>
								<CardDescription>
									Deploy your new project in one-click.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form>
									<div className="grid w-full items-center gap-4">
										<div className="flex flex-col space-y-1.5">
											<Label htmlFor="name">Name</Label>
											<Input id="name" placeholder="Name of your project" />
										</div>
										<div className="flex flex-col space-y-1.5">
											<Label htmlFor="framework">Framework</Label>
											<Select>
												<SelectTrigger id="framework">
													<SelectValue placeholder="Select" />
												</SelectTrigger>
												<SelectContent position="popper">
													<SelectItem value="next">Next.js</SelectItem>
													<SelectItem value="sveltekit">SvelteKit</SelectItem>
													<SelectItem value="astro">Astro</SelectItem>
													<SelectItem value="nuxt">Nuxt.js</SelectItem>
												</SelectContent>
											</Select>
										</div>
									</div>
								</form>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant={"destructive"}>Cancel</Button>
								<Button variant="outline2">
									<span className="w-0 h-0 rounded-full bg-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 transition-all group-hover:w-[200px] group-hover:h-[200px] -z-1"></span>
									Deploy
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
