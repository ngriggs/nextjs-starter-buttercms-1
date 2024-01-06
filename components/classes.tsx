/**
 * v0 by Vercel.
 * @see https://v0.dev/t/N81dNfbktUH
 */
import Link from "next/link";

export default function Component() {
	return (
		<section className="w-full py-12">
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
					<div className="grid gap-6 relative group">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<img
							alt="Yoga Class"
							className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
							height={600}
							src="/yoga.avif"
							width={450}
						/>
						<div className="grid gap-1">
							<h3 className="font-semibold">Yoga</h3>
							<p className="text-sm leading-none">
								Improve flexibility and reduce stress.
							</p>
						</div>
					</div>
					<div className="grid gap-6 relative group">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<img
							alt="Cardio Class"
							className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
							height={600}
							src="/yoga.avif"
							width={450}
						/>
						<div className="grid gap-1">
							<h3 className="font-semibold">Cardio</h3>
							<p className="text-sm leading-none">
								Boost your heart health and burn calories.
							</p>
						</div>
					</div>
					<div className="grid gap-6 relative group">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<img
							alt="Strength Training Class"
							className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
							height={600}
							src="/yoga.avif"
							width={450}
						/>
						<div className="grid gap-1">
							<h3 className="font-semibold">Strength Training</h3>
							<p className="text-sm leading-none">
								Build muscle and increase strength.
							</p>
						</div>
					</div>
					<div className="grid gap-6 relative group">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<img
							alt="Pilates Class"
							className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
							height={600}
							src="/yoga.avif"
							width={450}
						/>
						<div className="grid gap-1">
							<h3 className="font-semibold">Pilates</h3>
							<p className="text-sm leading-none">
								Improve posture and flexibility.
							</p>
						</div>
					</div>
					<div className="grid gap-6 relative group">
						<Link className="absolute inset-0 z-10" href="#">
							<span className="sr-only">View</span>
						</Link>
						<img
							alt="Zumba Class"
							className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
							height={600}
							src="/yoga.avif"
							width={450}
						/>
						<div className="grid gap-1">
							<h3 className="font-semibold">Zumba</h3>
							<p className="text-sm leading-none">Dance your way to fitness.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
