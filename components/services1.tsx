import {
	CardTitle,
	CardDescription,
	CardContent,
	Card,
} from "../components/ui/card";

export default function Component() {
	return (
		<section className="lg:p-12 bg-white dark:bg-gray-900 ">
			<div className="container py-8 px-4 mx-auto lg:py-16 lg:px-6  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<Card className="mx-auto bg-blue-200 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
					<CardContent className="p-4 flex flex-col items-center justify-center">
						<CloudIcon className="w-12 h-12 text-blue-800" />
						<CardTitle className="text-blue-800 mt-4">Cloud Services</CardTitle>
						<CardDescription className="text-blue-600">
							We provide robust and secure cloud services for your business.
						</CardDescription>
					</CardContent>
				</Card>
				<Card className="bg-yellow-200 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
					<CardContent className="p-4 flex flex-col items-center justify-center">
						<ComputerIcon className="w-12 h-12 text-yellow-800" />
						<CardTitle className="text-yellow-800 mt-4">
							Cybersecurity
						</CardTitle>
						<CardDescription className="text-yellow-600">
							Our cybersecurity solutions protect your data from threats.
						</CardDescription>
					</CardContent>
				</Card>
				<Card className="bg-green-200 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
					<CardContent className="p-4 flex flex-col items-center justify-center">
						<ConstructionIcon className="w-12 h-12 text-green-800" />
						<CardTitle className="text-green-800 mt-4">IT Consulting</CardTitle>
						<CardDescription className="text-green-600">
							We offer expert IT consulting services for your business needs.
						</CardDescription>
					</CardContent>
				</Card>
				<Card className="bg-red-200 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
					<CardContent className="p-4 flex flex-col items-center justify-center">
						<ComputerIcon className="w-12 h-12 text-red-800" />
						<CardTitle className="text-red-800 mt-4">
							Software Development
						</CardTitle>
						<CardDescription className="text-red-600">
							We develop custom software tailored to your business requirements.
						</CardDescription>
					</CardContent>
				</Card>
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
