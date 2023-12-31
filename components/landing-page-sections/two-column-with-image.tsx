import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

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
						<div className="flex-1">
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
					<div className="flex-1">
						<div className="cta-content-wrapper">
							<div className="section-title">
								<h2 className="mb-20">{headline}</h2>
								<div dangerouslySetInnerHTML={{ __html: subheadline }} />
							</div>
							<Link href={buttonUrl}>
								<Button variant="outline" size="lg">
									{buttonLabel}
								</Button>
							</Link>
						</div>
					</div>
					{image && imagePosition === "right" && (
						<div className="flex-1 -order-last md:order-last">
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
