import Image from "next/image";

export default function Feature({ headline, description, icon }) {
	return (
		<div className="">
			<div className="single-feature">
				<div className="feature-icon">
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
