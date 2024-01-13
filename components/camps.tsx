import {
	CardTitle,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "./ui/card";
import { Button } from "./ui/button";

export default function Component() {
	return (
		<main className="container p-4 md:p-6 lg:p-8">
			<div className="space-y-4 text-center">
				<h1 className="text-3xl font-bold">Events</h1>
				<p className="text-gray-500 dark:text-gray-400">
					Explore our range of events including Camps, Clinics, Open Gyms, and
					Birthday Parties. Each event is designed to provide a unique and
					exciting experience.
				</p>
			</div>
			<div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader>
						<CardTitle>Camps</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-center mb-4">
							<ShoppingBasketIcon className="h-12 w-12" />
						</div>
						<p>
							Join us for a week-long basketball camp where you can learn new
							skills and make new friends.
						</p>
					</CardContent>
					<CardFooter>
						<Button variant="link">Learn more</Button>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Clinics</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-center mb-4">
							<ClipboardIcon className="h-12 w-12" />
						</div>
						<p>
							Improve your basketball skills with our specialized clinics led by
							experienced coaches.
						</p>
					</CardContent>
					<CardFooter>
						<Button variant="link">Learn more</Button>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Open Gyms</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-center mb-4">
							<ShoppingBasketIcon className="h-12 w-12" />
						</div>
						<p>
							Come and practice your basketball skills in our open gym sessions.
							All skill levels welcome.
						</p>
					</CardContent>
					<CardFooter>
						<Button variant="link">Learn more</Button>
					</CardFooter>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Birthday Parties</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-center mb-4">
							<CakeIcon className="h-12 w-12" />
						</div>
						<p>
							Celebrate your special day with a basketball-themed birthday
							party. Fun games and activities included.
						</p>
					</CardContent>
					<CardFooter>
						<Button variant="link">Learn more</Button>
					</CardFooter>
				</Card>
			</div>
		</main>
	);
}

function CakeIcon(props) {
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
			<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
			<path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
			<path d="M2 21h20" />
			<path d="M7 8v2" />
			<path d="M12 8v2" />
			<path d="M17 8v2" />
			<path d="M7 4h.01" />
			<path d="M12 4h.01" />
			<path d="M17 4h.01" />
		</svg>
	);
}

function ClipboardIcon(props) {
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
			<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
		</svg>
	);
}

function ShoppingBasketIcon(props) {
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
			<path d="m5 11 4-7" />
			<path d="m19 11-4-7" />
			<path d="M2 11h20" />
			<path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
			<path d="m9 11 1 9" />
			<path d="M4.5 15.5h15" />
			<path d="m15 11-1 9" />
		</svg>
	);
}
