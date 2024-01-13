import Hero from "./hero";
import MissingSection from "./missingSection";
import TwoColumnWithImage from "./twoColumnWithImage";
import Features from "./features";
import Testimonials from "./testimonials";

type SectionType =
	| "hero"
	| "two_column_with_image"
	| "features"
	| "testimonials";

const sectionsComponentPaths: Record<SectionType, React.ComponentType> = {
	hero: Hero,
	two_column_with_image: TwoColumnWithImage,
	features: Features,
	testimonials: Testimonials,
};
export default function LandingPageSection({
	type,
	sectionData,
}: {
	type: SectionType;
	sectionData: any;
}) {
	const SectionComponent = sectionsComponentPaths[type];

	// Use optional chaining to avoid errors when sectionData is undefined
	return <SectionComponent type={type} {...sectionData} />;
}
