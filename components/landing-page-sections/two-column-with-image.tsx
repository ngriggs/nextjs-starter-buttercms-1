import Image from "next/image";

export default function TwoColumnWithImage({
	headline,
	subheadline,
	buttonLabel,
	buttonUrl,
	image,
	imagePosition,
	scrollAnchorId,
}) {
	return (
		<section id={scrollAnchorId} className="cta-section">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row">
					{image && imagePosition === "left" && (
						<div className="w-1/2 order-last">
							<div className="left-image cta-image ">
								<Image
									src={image}
									height={400}
									width={600}
									alt=""
									sizes="100vw"
									style={{
										width: "100%",
										height: "auto",
									}}
								/>
							</div>
						</div>
					)}
					<div className="w-1/2">
						<div className="cta-content-wrapper">
							<div className="section-title">
								<h2 className="mb-20">{headline}</h2>
								<div dangerouslySetInnerHTML={{ __html: subheadline }} />
							</div>
							<a
								href={buttonUrl}
								className="main-btn btn-hover border-btn mt-30"
							>
								{buttonLabel}
							</a>
						</div>
					</div>
					{image && imagePosition === "right" && (
						<div className="w-1/2">
							<div className="right-image cta-image text-lg-end">
								<Image
									src={image}
									height={400}
									width={600}
									alt=""
									sizes="100vw"
									style={{
										width: "100%",
										height: "auto",
									}}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
