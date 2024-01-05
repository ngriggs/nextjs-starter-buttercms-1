import Image from "next/image";

export default function Feature({ headline, description, icon }) {
	return (
		<div className="w-10 h-10 relative">
			<div className="single-feature">
				<div className="feature-icon w-10 h-10">
					{icon && <Image src={icon} alt="" layout="fill" objectFit="cover" />}
				</div>
				<div className="feature-content">
					<h4 className="text-lg font-bold">{headline}</h4>
					<p className="mt-2 text-gray-600">{description}</p>
				</div>
			</div>
		</div>
	);
}
