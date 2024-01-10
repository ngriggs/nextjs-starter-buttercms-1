import {
	CardTitle,
	CardDescription,
	CardContent,
	Card,
} from "../components/ui/card";

export default function Component() {
	const cloudService = [
		{
			title: "Cloud Services",
			description:
				"We provide robust and secure cloud services for your business.",
			icon: <CloudIcon className="w-12 h-12 text-blue-800" />,
			bgColor: "bg-blue-200",
			titleColor: "text-blue",
		},
		{
			title: "Cybersecurity",
			description:
				"Our cybersecurity solutions protect your data from threats.",
			icon: <ComputerIcon className="w-12 h-12 text-yellow-800" />,
			bgColor: "bg-yellow-200",
			titleColor: "text-yellow",
		},
		{
			title: "IT Consulting",
			description:
				"We offer expert IT consulting services for your business needs.",
			icon: <ConstructionIcon className="w-12 h-12 text-green-800" />,
			bgColor: "bg-green-200",
			titleColor: "text-green",
		},
		{
			title: "Software Development",
			description:
				"We develop custom software tailored to your business requirements.",
			icon: <ComputerIcon className="w-12 h-12 text-red-800" />,
			bgColor: "bg-red-200",
			titleColor: "text-red",
		},
	];
	// const gymnasticsServices = [
	// 	{
	// 	  title: "Gymnastics Classes",
	// 	  description:
	// 		"Explore our gymnastics classes designed for children of all ages.",
	// 	  icon: <GymnasticsIcon className="w-12 h-12 text-blue-800" />,
	// 	  bgColor: "bg-blue-200",
	// 	  titleColor: "text-blue",
	// 	},
	// 	{
	// 	  title: "Camps",
	// 	  description:
	// 		"Join our fun and educational gymnastics camps during school breaks.",
	// 	  icon: <CampfireIcon className="w-12 h-12 text-yellow-800" />,
	// 	  bgColor: "bg-yellow-200",
	// 	  titleColor: "text-yellow",
	// 	},
	// 	{
	// 	  title: "Clinics",
	// 	  description:
	// 		"Participate in specialized clinics to enhance gymnastics skills.",
	// 	  icon: <MedalIcon className="w-12 h-12 text-green-800" />,
	// 	  bgColor: "bg-green-200",
	// 	  titleColor: "text-green",
	// 	},
	// 	{
	// 	  title: "Open Gyms",
	// 	  description:
	// 		"Enjoy open gym sessions where children can explore and practice.",
	// 	  icon: <PlaygroundIcon className="w-12 h-12 text-red-800" />,
	// 	  bgColor: "bg-red-200",
	// 	  titleColor: "text-red",
	// 	},
	// 	{
	// 	  title: "Birthday Parties",
	// 	  description:
	// 		"Celebrate birthdays with exciting gymnastics-themed parties.",
	// 	  icon: <CakeIcon className="w-12 h-12 text-purple-800" />,
	// 	  bgColor: "bg-purple-200",
	// 	  titleColor: "text-purple",
	// 	},
	//   ];

	return (
		<section className="lg:p-12 bg-white dark:bg-gray-900 ">
			<div className="container py-8 px-4 mx-auto lg:py-16 lg:px-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{cloudService.map((item, index) => {
					return (
						<Card
							key={index}
							className={`mx-auto transform transition-all ${item.bgColor} duration-500 hover:scale-105 hover:shadow-xl`}
						>
							<CardContent className="p-4 flex flex-col items-center justify-center">
								{item.icon}
								<CardTitle className={`${item.titleColor}-800 mt-4`}>
									{item.title}
								</CardTitle>
								<CardDescription className={`${item.titleColor}-600`}>
									{item.description}
								</CardDescription>
							</CardContent>
						</Card>
					);
				})}
			</div>
		</section>
	);
}

function CloudIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
		</svg>
	);
}

function ComputerIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="14" height="8" x="5" y="2" rx="2" />
			<rect width="20" height="8" x="2" y="14" rx="2" />
			<path d="M6 18h2" />
			<path d="M12 18h6" />
		</svg>
	);
}

function ConstructionIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect x="2" y="6" width="20" height="8" rx="1" />
			<path d="M17 14v7" />
			<path d="M7 14v7" />
			<path d="M17 3v3" />
			<path d="M7 3v3" />
			<path d="M10 14 2.3 6.3" />
			<path d="m14 6 7.7 7.7" />
			<path d="m8 6 8 8" />
		</svg>
	);
}
