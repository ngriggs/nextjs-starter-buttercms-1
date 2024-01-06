import Image from "next/image";
import Typewriter from "./typewriter";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function Hero({ ...params }) {
	console.log("Hero", params);

	return (
		<div className="relative bg-gradient-to-b from-[#5a1a99] to-[#e6d3f8] pt-20 ">
			<div className="w-[862px] h-[862px] rounded-full bg-purple-600 z-10 after:block hidden md:absolute after:rounded-full right-[-150px] top-[-150px]"></div>

			<div className="container text-white z-20 my-20 flex min-h-screen flex-col">
				<div className="flex-1 px-4 pb-10 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<Image
							alt="Indoor Playspace"
							className="mx-auto flex justify-end overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last z-20"
							height="315"
							src={params.image.url}
							width="480"
						/>
						<div className="flex flex-col justify-center space-y-4">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
									<Typewriter texts={["Elevate", "Enhance", "Enrich"]} />
									Your Online Presence
								</h1>
								<p className="max-w-[600px] text-gray-100 md:text-xl">
									We are a passionate web design agency dedicated to crafting
									stunning websites that leave a lasting impression. Explore our
									services and take your online presence to the next level!
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link href="#">
									<Button variant="outline2">
										<span className="w-0 h-0 rounded-full bg-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 transition-all group-hover:w-[200px] group-hover:h-[200px] -z-1"></span>
										Discover Our Work
									</Button>
								</Link>
								<Link href="#">
									<Button variant="ghost2">
										<span className="w-0 h-0 rounded-full bg-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 transition-all group-hover:w-[200px] group-hover:h-[200px] -z-1"></span>
										Get in Touch to test!
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto flex-1">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-6 md:grid-cols-3">
							<div className="flex group flex-col items-center hover:text-primary hover:border hover:border-primary rounded-2xl p-4 justify-center space-y-4">
								<PlayIcon className="h-8 w-8" />
								<h2 className="text-2xl font-bold tracking-tighter">
									Web Development
								</h2>
								<p className="text-center text-gray-100">
									Our skilled developers bring your ideas to life with custom
									web development tailored to meet your business needs.
								</p>
							</div>
							<div className="flex group flex-col hover:text-primary items-center justify-center hover:border hover:border-primary rounded-2xl p-4 space-y-4">
								<SchoolIcon className="h-8 w-8 " />
								<h2 className="text-2xl font-bold tracking-tighter">
									Creative Design{" "}
								</h2>
								<p className="text-center text-gray-100">
									Immerse your audience with visually stunning designs that
									reflect the essence of your brand and captivate your visitors.
								</p>
							</div>
							<div className="flex group flex-col hover:text-primary items-center justify-center hover:border hover:border-primary rounded-2xl p-4 space-y-4">
								<ActivityIcon className="h-8 w-8" />
								<h2 className="text-2xl font-bold tracking-tighter">
									Strategic Planning
								</h2>
								<p className="text-center text-gray-100">
									We work collaboratively to devise strategic plans that align
									with your business goals and drive online success.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function ActivityIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
		</svg>
	);
}

function PlayIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="5 3 19 12 5 21 5 3" />
		</svg>
	);
}

function SchoolIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m4 6 8-4 8 4" />
			<path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
			<path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
			<path d="M18 5v17" />
			<path d="M6 5v17" />
			<circle cx="12" cy="9" r="2" />
		</svg>
	);
}
