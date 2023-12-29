import Feature from "./feature";

export default function Features({
	headline,
	subheadline,
	features,
	scrollAnchorId,
}) {
	return (
		<section id={scrollAnchorId} className="feature-section">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row">
					<div className="w-1/2 my-auto p-2">
						<div className="section-title mb-60">
							<h2 className="mb-20">{headline}</h2>
							<p className="max-w-md">{subheadline}</p>
						</div>
					</div>

					<div className="w-1/2">
						<div className="grid grid-cols-1 md:grid-cols-2">
							{features.map((feature, index) => (
								<Feature
									key={index}
									headline={feature.headline}
									description={feature.description}
									icon={feature.icon}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
