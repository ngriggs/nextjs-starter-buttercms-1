import Component from "@/components/camps";

export default function Event({ params }: any) {
	return (
		<div className="min-h-svh container md:pt-20">
			{params.slug}
			<Component />
		</div>
	);
}
