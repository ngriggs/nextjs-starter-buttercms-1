import Image from "next/image";
export default function Test() {
	return (
		<div
			style={{
				backgroundImage: "url('/hero-bg1.avif')",
			}}
			className="bg-cover bg-center"
		>
			<div className="container relative min-h-svh pt-20 grid grid-cols-1">
				<div className="grid place-items-center justify-start w-1/2">
					<h1 className="text-7xl text-secondary font-extrabold">
						Libertyville Gymnastics Academy
					</h1>
				</div>
				<Image
					src="/child-running.png"
					alt={"child running"}
					height={1000}
					width={1000}
					className="absolute -right-20 p-36"
				></Image>
			</div>
		</div>
	);
}
