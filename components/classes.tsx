import Link from "next/link";
import Image from "next/image";

const ClassCard2 = ({ category, description, title, image, id }: any) => {
	const formattedSlug = category
		.split("-")
		.map((part: string) => part.toLowerCase())
		.join("_");
	return (
		<div id={`${title}`} className="grid gap-6 relative group">
			<Link href={`/classes/${formattedSlug}#${title}`}>
				<span className="sr-only">View</span>
				<Image
					src={image.url}
					alt={`Class: ${title}`}
					className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
					height={1000}
					width={1000}
				/>
			</Link>
			<div className="grid gap-1">
				<h3 className="font-semibold">{title}</h3>
				<div
					dangerouslySetInnerHTML={{ __html: description.html as string }}
					className="[&>p]:text-sm [&>p]:leading-none"
				/>
				<p className="text-sm leading-none">Category: {formattedSlug}</p>
			</div>
		</div>
	);
};

export default function Component({ classes }: any) {
	return (
		<section className="w-full container py-12">
			<div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-xl mx-auto lg:max-w-none">
				<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
					<div className="grid gap-1">
						<h1 className="text-2xl font-bold tracking-tight text-primary">
							Our Classes
						</h1>
						<p className="text-gray-500 dark:text-gray-400">
							Explore the variety of classes we offer and find the perfect fit
							for you.
						</p>
					</div>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{classes.map((classItem: any) => (
						<ClassCard2 key={classItem.id} {...classItem} />
					))}
				</div>
			</div>
		</section>
	);
}
