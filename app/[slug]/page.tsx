import { getLandingPage } from "@/lib/getLandingPage";
import LandingPageSection from "@/app/example2/landingPageSection";

export default async function Page({ params }) {
	const landingPageData = await getLandingPage(params.slug);

	return (
		<div className="relative bg-inherit text-secondary-foreground min-svh pt-20">
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
