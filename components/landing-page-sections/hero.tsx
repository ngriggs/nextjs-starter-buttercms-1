import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero({
	headline,
	subheadline,
	image,
	buttonLabel,
	buttonUrl,
	scrollAnchorId,
}) {
	return (
		<section
			id={scrollAnchorId}
			className="hero-section relative cta-section overflow-hidden items-center bg-gradient-to-b w-screen mx-auto from-blue-200 via-transparent to-transparent -z-10 flex"
		>
			<div className="container mx-auto mt-[56px]">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="mt-20">
						<h2 className="font-bold">{headline}</h2>
						<p className="mt-4">{subheadline}</p>
						<div className="flex flex-col md:flex-row items-center place-content-center mt-40">
							<Link href={buttonUrl}>
								<Button variant="outline" size="lg">
									{buttonLabel}
								</Button>
							</Link>
							<a
								href="https://buttercms.com/join/"
								className="ml-5 my-auto block underline"
							>
								Need an account?
							</a>
						</div>
					</div>
					{image && (
						<div className="text-right">
							<div className="text-center lg:text-right">
								<Image
									src={image}
									height={400}
									width={400}
									alt=""
									sizes="100vw"
									className="w-full h-auto"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
