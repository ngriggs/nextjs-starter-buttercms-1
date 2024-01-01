import Image from "next/image";

export default function Testimonials({ ...params }) {
	console.log("Testimonials", params);
	return (
		<div className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
			<div className="container h-svh">
				<p>Testimonials</p>
				<Image
					src={"/lgalogotrans.png"}
					alt={"libertyville gymnastics academy"}
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
}
