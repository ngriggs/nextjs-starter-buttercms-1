import Hero from "./hero";
import MissingSection from "./missingSection";
import TwoColumnWithImage from "./twoColumnWithImage";
import Features from "./features";
import Testimonials from "./testimonials";

import React from "react";

interface HeroProps {
	// Define specific properties for the Hero component
	// Adjust these based on the actual props expected by the component
	heroProp: string;
}

interface TwoColumnWithImageProps {
	// Define specific properties for the TwoColumnWithImage component
	// Adjust these based on the actual props expected by the component
	twoColumnProp: string;
}

interface FeaturesProps {
	// Define specific properties for the Features component
	// Adjust these based on the actual props expected by the component
	featuresProp: string;
}

interface TestimonialsProps {
	// Define specific properties for the Testimonials component
	// Adjust these based on the actual props expected by the component
	testimonialsProp: string;
}

interface ComponentProps<T> {
	type: T;
	sectionData: Record<string, any>; // A generic Record type for flexibility
}

type SectionsComponentPaths = {
	hero: React.ComponentType<HeroProps & ComponentProps<"hero">>;
	two_column_with_image: React.ComponentType<
		TwoColumnWithImageProps & ComponentProps<"two_column_with_image">
	>;
	features: React.ComponentType<FeaturesProps & ComponentProps<"features">>;
	testimonials: React.ComponentType<
		TestimonialsProps & ComponentProps<"testimonials">
	>;
};

export default function LandingPageSection<
	T extends keyof SectionsComponentPaths
>({ type, sectionData }: ComponentProps<T>) {
	const sectionsComponentPaths: SectionsComponentPaths = {
		hero: Hero,
		two_column_with_image: TwoColumnWithImage,
		features: Features,
		testimonials: Testimonials,
	};

	const SectionComponent = sectionsComponentPaths[type] || MissingSection;

	// Use optional chaining to avoid errors when sectionData is undefined
	return <SectionComponent type={type} {...sectionData} />;
}
