import { getLandingPage } from "@/lib/getLandingPage";
import LandingPageSection from "@/app/example2/landingPageSection";

export default async function Page({ params }: any) {
	console.log(params.slug);
	const landingPageData = await getLandingPage(params.slug);
	console.log(landingPageData?.landingPage?.body);

	return (
		<div className="relative bg-inherit text-secondary-foreground min-h-svh">
			{landingPageData?.landingPage?.body.map((section: any, index: number) => {
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
