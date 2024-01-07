import { getClasses } from "../../lib/getClasses";
import Component from "../../components/classes";

export default async function Classes() {
	const classes = await getClasses();

	return (
		<div className="min-h-svh md:pt-20 container">
			<Component classes={classes.classes} />
		</div>
	);
}
