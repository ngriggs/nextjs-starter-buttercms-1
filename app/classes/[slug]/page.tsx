import { getClasses } from "../../../lib/getClasses";
import Component from "../../../components/classes";

export enum ClassCategory {
	PRESCHOOL = "PRESCHOOL",
	RECREATIONAL_TUMBLE = "RECREATIONAL_TUMBLE",
	NINJA = "NINJA",
	// Add other categories as needed
}

export default async function Class({ params }) {
	const formattedSlug = params.slug
		.split("-")
		.map((part) => part.toUpperCase())
		.join("_");
	const classes = await getClasses(formattedSlug as ClassCategory);

	return (
		<div className="min-h-svh md:pt-20 container">
			<Component classes={classes.classes} />
		</div>
	);
}
