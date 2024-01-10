import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "../../components/ui/card";

export default function FeaturesSection() {
	const links = [
		"/classes/preschool",
		"/classes/recreational-tumble",
		"/classes/ninja",
	];
	return (
		<>
			<section className="container my-auto flex items-center min-h-svh">
				<div className="py-12">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="lg:text-center">
							<p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
								Features
							</p>
							<h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight  sm:text-4xl sm:leading-10">
								A better way to learn Tailwind CSS
							</h3>
							<p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Possimus magnam voluptatum cupiditate veritatis in, accusamus
								quisquam.
							</p>
						</div>

						<div className="mt-10">
							<ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
								<li>
									<div className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
												<svg
													className="h-6 w-6"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm3-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm3 7h4v1H8v-1zm0 2h4v1H8v-1zm0 2h4v1H8v-1z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg leading-6 font-medium ">
												Responsive Design
											</h4>
											<p className="mt-2 text-base leading-6 text-gray-500">
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Reprehenderit, eligendi dolorum sequi illum qui
												unde aspernatur non deserunt.
											</p>
										</div>
									</div>
								</li>
								<li className="mt-10 md:mt-0">
									<div className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
												<svg
													className="h-6 w-6"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm3-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm3 7h4v1H8v-1zm0 2h4v1H8v-1zm0 2h4v1H8v-1z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg leading-6 font-medium">
												Customization
											</h4>
											<p className="mt-2 text-base leading-6 text-gray-500">
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Reprehenderit, eligendi dolorum sequi illum qui
												unde aspernatur non deserunt.
											</p>
										</div>
									</div>
								</li>
								<li className="mt-10 md:mt-0">
									<div className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
												<svg
													className="h-6 w-6"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm3-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm3 7h4v1H8v-1zm0 2h4v1H8v-1zm0 2h4v1H8v-1z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg leading-6 font-medium ">
												Easy to Use
											</h4>
											<p className="mt-2 text-base leading-6 text-gray-500">
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Reprehenderit, eligendi dolorum sequi illum qui
												unde aspernatur non deserunt.
											</p>
										</div>
									</div>
								</li>
								<li className="mt-10 md:mt-0">
									<div className="flex">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
												<svg
													className="h-6 w-6"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fillRule="evenodd"
														d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm3-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm3 7h4v1H8v-1zm0 2h4v1H8v-1zm0 2h4v1H8v-1z"
														clipRule="evenodd"
													/>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<h4 className="text-lg leading-6 font-medium ">
												Fast Performance
											</h4>
											<p className="mt-2 text-base leading-6 text-gray-500">
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Reprehenderit, eligendi dolorum sequi illum qui
												unde aspernatur non deserunt.
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className="container">
				<div className="flex flex-col items-center justify-center min-h-svh">
					<h1 className="text-3xl font-bold mb-8">Offerings</h1>
					<div className="grid md:grid-cols-3 grid-cols-1 gap-8">
						{links.map((link, index) => {
							return (
								<Link href={link}>
									<Card
										key={index}
										className="rounded-lg shadow-lg group h-[500px]"
									>
										<Image
											src="/yoga.avif"
											alt={`offering ${index}`}
											className="mb-4 rounded-lg group-hover:scale-105 transition-all duration-500 object-cover w-full h-full"
											height={250}
											width={1000}
										/>
										<CardContent className="p-6">
											<CardTitle> Class {index + 1}</CardTitle>
											<CardDescription>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Maecenas faucibus neque at facilisis lacinia.
											</CardDescription>
										</CardContent>
									</Card>
								</Link>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
