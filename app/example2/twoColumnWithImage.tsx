import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Icons } from "../../components/icons";

export default function TwoColumnWithImage({ ...params }) {
	return (
		<div id={params.scrollAnchorId} className="relative w-full">
			<div className="md:container mx-auto grid md:grid-cols-2 grid-cols-1 sm:py-20 md:flex-row">
				{params.image && params.imagePosition === "left" && (
					<div className="my-auto">
						<div className="my-10 grid place-items-center max-h-[70vh] overflow-hidden object-cover object-center">
							<Image src={params.image.url} alt="" width={3000} height={3000} />
						</div>
					</div>
				)}

				<div className="my-auto grid place-items-center p-4">
					<div className="max-w-[600px]">
						<div className="grid place-content-start">
							<p className="p-2 tracking-[3px] text-giggles-yellow">ABOUT</p>
							<h1 className="p-2 font-title text-3xl md:text-5xl">
								hi, we&apos;re giggles.
							</h1>
							<p className="max-w-lg p-2 text-xl leading-[32px]">
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
										<div className="font-quicksand md:text-lg text-base">
											<p>Mon - Thur: 10am - 6pm</p>
											<p>Fri: 10am - 7:30pm</p>
											<p>Sat: 10am - 6pm</p>
											<p>Sun: 11am - 5pm</p>
										</div>
									</div>
								</div>
							</div>
							<p className="max-w-lg p-2 text-accent-foreground">
								Please note that weekend hours will vary based on private
								events. Refer to{" "}
								<Link
									href={"https://g.co/kgs/STgKdp"}
									className="font-bold text-giggles-navy underline"
									target="_blank"
								>
									Google
								</Link>{" "}
								for our most up to date hours.
							</p>
							<Link href="#" target="_top" className="mx-auto mt-4">
								<Button variant="outline2">
									<span className="w-0 h-0 rounded-full bg-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 transition-all group-hover:w-[200px] group-hover:h-[200px] -z-1"></span>
									Our mission
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{params.image && params.imagePosition === "right" && (
					<div className=" my-auto -order-last md:order-last">
						<div className="my-10 grid place-content-center max-h-[70vh] overflow-hidden object-cover object-center">
							<Image src={params.image.url} alt="" width={3000} height={3000} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
