import Component from "@/components/camps";

export default function Event({ params }) {
	return (
		<div className="min-h-svh container md:pt-20">
			{params.slug}
			<Component />
		</div>
	);
}
