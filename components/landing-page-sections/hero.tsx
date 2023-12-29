import Image from "next/image";

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
			className="relative cta-section overflow-hidden items-center bg-gradient-to-b w-screen mx-auto from-blue-200 via-transparent to-transparent -z-10 min-h-screen flex"
		>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="section-title">
						<h1 className="font-bold">{headline}</h1>
						<p className="mt-4">{subheadline}</p>
						<div className="flex cta-content-wrapper">
							<a
								href={buttonUrl}
								className="main-btn btn-hover border-btn mt-30"
							>
								{buttonLabel}
							</a>
							<a
								href="https://buttercms.com/join/"
								className="mt-40 ml-5 my-auto block underline"
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
