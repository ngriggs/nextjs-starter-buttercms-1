import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { getAllLandingPages } from "../../lib/getAllLandingPages";
import { getLandingPage } from "../../lib/getLandingPage";
import LandingPageSection from "../example2/landingPageSection";
import ColorForm from "../../components/colorForm";

export default async function Component({ params }) {
	const allLandingPageData = await getAllLandingPages();
	// console.log(allLandingPageData.landingPages[0]);
	const landingPageData = await getLandingPage(params.slug);

	return (
		<div className="relative bg-inherit text-black min-svh">
			<div className="mx-auto py-16 px-4 sm:px-6 lg:px-8  bg-gradient-to-b from-[#808080] to-[#666666] min-h-screen">
				<div className="container mt-[120px]">
					<div className="text-center">
						<h2 className="text-base font-semibold text-white tracking-wide uppercase">
							Features
						</h2>
						<p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
							Designed To Increase Your Organic Traffic
						</p>
					</div>
					<div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
						<div>
							<div className="text-white uppercase tracking-wide font-bold">
								Cruise Mode
							</div>
							<h3 className="mt-2 text-3xl font-extrabold text-white">
								Create an SEO blog in 5 minutes
							</h3>
							<p className="mt-3 text-lg text-primary-foreground">
								Generate your SEO-optimised first draft with minimal inputs and
								maximum efficiency in 5 simple steps.
							</p>
							<Button className="mt-8 bg-primary hover:bg-primary/70">
								Write a blog in 5 minutes now!
								<ArrowRightIcon className="ml-2 w-4 h-4" />
							</Button>
						</div>
						<div className="flex justify-center">
							<div className="p-4 bg-white rounded-lg shadow-lg text-gray-800 w-full max-w-md">
								<div className="flex justify-between items-center mb-3">
									<span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
										Preview
									</span>
									<span className="bg-primary text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
										5 min
									</span>
								</div>
								<div className="flex flex-col md:flex-row space-y-4 mx-auto md:space-y-0 space-x-0 md:space-x-4">
									<Button className="bg-primary hover:bg-primary/70 text-white">
										Download Draft
									</Button>
									<Button className="mx-auto bg-primary hover:bg-primary/70 text-white">
										Export to Editor
									</Button>
								</div>
								<div className="mt-4 bg-gray-100 p-4 rounded-lg">
									<div className="h-3 bg-gray-300 rounded" />
									<div className="mt-2 h-3 bg-gray-300 rounded" />
									<div className="mt-2 h-3 bg-gray-300 rounded" />
									<div className="mt-2 h-3 bg-gray-300 rounded" />
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-primary hover:bg-primary/70 text-white p-6 rounded-lg">
							<h4 className="text-lg font-semibold">Content Optimizer</h4>
							<p className="mt-2 text-sm">AI-led Content Optimization</p>
							<ArrowRightIcon className="mt-4 w-4 h-4" />
						</div>
						<div className="bg-primary hover:bg-primary/70 text-white p-6 rounded-lg shadow-lg">
							<h4 className="text-lg font-semibold">AI-led Content Writing</h4>
							<p className="mt-2 text-sm">Generate Quality Content now</p>
							<ArrowRightIcon className="mt-4 w-4 h-4" />
						</div>
						<div className="bg-primary hover:bg-primary/70 text-white p-6 rounded-lg shadow-lg">
							<h4 className="text-lg font-semibold">Keyword Planner</h4>
							<p className="mt-2 text-sm">Create winning Content Strategies</p>
							<ArrowRightIcon className="mt-4 w-4 h-4" />
						</div>
						<div className="bg-white hover:bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg">
							<h4 className="text-lg font-semibold">Explore All Features</h4>
							<ChevronRightIcon className="mt-4 w-4 h-4" />
						</div>
					</div>
					<ColorForm />
				</div>
			</div>
			<div className="min-h-screen">
				<div className="bg-cover bg-center bg-motion-example">
					<p className="min-h-screen">something</p>
				</div>
			</div>
			{landingPageData?.landingPage?.body.map((section, index) => {
				return (
					<LandingPageSection
						key={index}
						type={section.type}
						sectionData={section}
					/>
				);
			})}
		</div>
	);
}

function ArrowRightIcon(props) {
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
			<path d="M5 12h14" />
			<path d="m12 5 7 7-7 7" />
		</svg>
	);
}

function ChevronRightIcon(props) {
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
			<path d="m9 18 6-6-6-6" />
		</svg>
	);
}
