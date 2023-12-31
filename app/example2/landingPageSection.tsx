import Hero from "./hero";
import MissingSection from "./missingSection";
import TwoColumnWithImage from "./twoColumnWithImage";
import Features from "./features";
import Testimonials from "./testimonials";

export default function LandingPageSection({ type, sectionData }) {
	const sectionsComponentPaths = {
		hero: Hero,
		two_column_with_image: TwoColumnWithImage,
		features: Features,
		testimonials: Testimonials,
	};

	const SectionComponent = sectionsComponentPaths[type] || MissingSection;

	// Use optional chaining to avoid errors when sectionData is undefined
	return <SectionComponent type={type} {...sectionData} />;
}
