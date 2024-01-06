import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Icons } from "../../components/icons";

export default function TwoColumnWithImage({ ...params }) {
	console.log("TwoColumnWithImage", params);
	return (
		<div className="relative bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#fff_1px,transparent_1px)]">
			<div className="container mx-auto  flex w-full flex-col sm:py-20 md:flex-row">
				{params.image && params.imagePosition === "left" && (
					<div className="basis-1/2">
						<div
							className={`my-10 grid w-[90%] max-w-[910px] place-content-center
											rounded-r-full transition-all duration-300 ease-out 
										  `}
						>
							<Image src={params.image.url} alt="" width={3000} height={3000} />
						</div>
					</div>
				)}

				<div className="my-auto basis-1/2 p-4">
					<div className="max-w-[600px]">
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
							<p className="max-w-lg p-2 text-[#798185]">
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
							<Link href="#" target="_top" className="mx-auto sm:ml-0">
								<Button variant="outline2">
									<span className="w-0 h-0 rounded-full bg-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 transition-all group-hover:w-[200px] group-hover:h-[200px] -z-1"></span>
									Our mission
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{params.image && params.imagePosition === "right" && (
					<div className="basis-1/2 -order-last md:order-last">
						<div
							className={`my-10 grid w-[90%] max-w-[910px] place-content-center
											rounded-r-full transition-all duration-300 ease-out
										  `}
						>
							<Image src={params.image.url} alt="" width={3000} height={3000} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
