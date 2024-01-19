import {
	AvatarImage,
	Avatar,
	AvatarFallback,
} from "../../components/ui/avatar";
import { Card } from "../../components/ui/card";
import TestimonialCarousel from "@/app/testimonials";

export default function Testimonials({ ...params }) {
	console.log("Testimonials", params);
	return (
		<div className="md:container">
			<div className="grid place-items-center min-h-svh">
				<div className="w-full py-12">
					<div className="container mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl leading-9 font-title text-gray-900 dark:text-gray-100 md:text-5xl sm:leading-10 mb-10 text-center">
							What our customers are saying
						</h2>
						<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
							<Card className="flex flex-col p-6 space-y-4">
								<Avatar className="w-16 h-16 mx-auto">
									<AvatarImage
										alt="Customer name"
										src="/placeholder.svg?height=64&width=64"
									/>
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
								<div className="text-center">
									<div className="text-lg font-semibold">John Doe</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Product Manager, Tech Inc
									</div>
								</div>
								<div className="font-normal text-gray-600 dark:text-gray-300 text-center">
									&quot;This product really helped me improve my workflow. I
									would recommend it to anyone looking for a solution to this
									problem.&quot;
								</div>
							</Card>
							<Card className="flex flex-col p-6 space-y-4">
								<Avatar className="w-16 h-16 mx-auto">
									<AvatarImage
										alt="Customer name"
										src="/placeholder.svg?height=64&width=64"
									/>
									<AvatarFallback>JS</AvatarFallback>
								</Avatar>
								<div className="text-center">
									<div className="text-lg font-semibold">Jane Smith</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										CEO, Startups Ltd
									</div>
								</div>
								<div className="font-normal text-gray-600 dark:text-gray-300 text-center">
									&quot;I&apos;ve seen a significant increase in productivity
									since I started using this product. It&apos;s easy to use and
									very effective.&quot;
								</div>
							</Card>
							<Card className="flex flex-col p-6 space-y-4">
								<Avatar className="w-16 h-16 mx-auto">
									<AvatarImage
										alt="Customer name"
										src="/placeholder.svg?height=64&width=64"
									/>
									<AvatarFallback>EJ</AvatarFallback>
								</Avatar>
								<div className="text-center">
									<div className="text-lg font-semibold">Emma Johnson</div>
									<div className="text-sm text-gray-500 dark:text-gray-400">
										Software Engineer, Coders Co
									</div>
								</div>
								<div className="font-normal text-gray-600 dark:text-gray-300 text-center">
									&quot;The quality of this product is unmatched. I&apos;ve
									tried other solutions in the past, and this by far is the best
									I&apos;ve come across.&quot;
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
			<div className="items-center justify-center text-left flex flex-col my-6 md:my-20">
				<h1
					className={`font-title text-center md:text-left w-full md:ml-2 my-4 md:text-5xl text-3xl`}
				>
					{params.headline}
				</h1>
				<div className="grid place-items-center">
					<TestimonialCarousel
						reviews={params.testimonialItem}
						orientation="vertical"
						className="hidden md:flex"
						height={200}
					/>
					<TestimonialCarousel
						reviews={params.testimonialItem}
						orientation="horizontal"
						className="block md:hidden w-screen px-4"
					/>
				</div>
			</div>
		</div>
	);
}
