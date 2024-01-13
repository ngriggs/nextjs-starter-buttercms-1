import { getClasses } from "@/lib/getClasses";
import Component from "@/components/classes";

export default async function Classes() {
	const classes = await getClasses();

	return (
		<div className="min-h-svh md:pt-20">
			<Component classes={classes.classes} />
		</div>
	);
}
