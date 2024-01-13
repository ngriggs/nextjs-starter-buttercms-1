import Component from "@/components/hero";
import Component2 from "@/components/services1";
import TeamMembers from "@/components/team-members";
import Camps from "@/components/camps";
import Classes from "@/components/classes";
import { getClasses } from "@/lib/getClasses";

export default async function Page({ params }) {
	const classes = await getClasses();
	const uniqueCategories = [
		...new Set(classes.classes.map((item) => item.category)),
	];
	const firstItems = uniqueCategories.map((category) => {
		const firstItem = classes.classes.find(
			(item) => item.category === category
		);
		return firstItem;
	});

	return (
		<div className="relative bg-inherit text-secondary-foreground min-svh ">
			<Component />
			<Component2 />
			<TeamMembers />
			<Camps />
			<Classes classes={firstItems} />
		</div>
	);
}
