import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardTitle } from "../../components/ui/card";
import Offerings from "./offerings";
export default function Test() {
	return (
		<div>
			<div
				className="bg-cover bg-center relative md:h-[80vh] pt-20 grid grid-cols-1"
				style={{
					backgroundImage: "url('/hero-bg1.avif')",
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-[#5D089F]/70 to-[#4a00e0]/40 " />

				<div className="grid relative place-items-center mb-40">
					<div className="mx-auto text-primary-foreground">
						<h1 className="text-5xl lg:text-7xl text-center max-w-3xl font-extrabold">
							We empower your child to achieve the seemingly impossible.{" "}
						</h1>
						<div className="flex items-center justify-center mt-4">
							<Link href={"#"}>
								<Button variant="default">Sign up</Button>
							</Link>
							<Link className="ml-4" href={"#"}>
								WHY CHOOSE LIBERTYVILLE GYMNASTICS?
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="-mt-[145px] relative grid grid-cols-1 md:grid-cols-3 gap-24">
					{["Classes", "Events", "Parties"].map((item, index) => {
						return (
							<Card
								key={index}
								className="border-none shadow-none rounded-t-3xl"
							>
								<CardContent className="bg-gray-200 h-[290px] rounded-3xl"></CardContent>
								<CardTitle className="mt-4 text-center">{item}</CardTitle>
							</Card>
						);
					})}
				</div>
			</div>

			<div className="container grid items-center grid-cols-1 md:grid-cols-2 min-h-[70vh] my-20">
				<div className="p-4 space-y-4">
					<h3 className="text-5xl font-bold">Libertyville Gymnastics</h3>
					<p>Lorem ipsum.</p>
					<Link href={"#"}>
						<Button variant="default">Learn More</Button>
					</Link>
				</div>
				<div className="relative">
					<div className="absolute md:top-10 md:left-10 top-3 left-3 bg-gradient-to-tl from-[#8d2de1] to-[#4a00e0] -z-10 rounded-3xl max-h-[475px] h-full aspect-square"></div>
					<div className="bg-gray-500 rounded-3xl max-h-[475px] aspect-square"></div>
				</div>
			</div>

			<div className="w-full bg-black text-white ">
				<div className="container flex text-center items-center justify-center h-[30vh] space-x-6">
					<p className="text-secondary">Have a question? Get in touch now!</p>
					<Link href={"#"}>
						<Button variant="default">Contact us</Button>
					</Link>
				</div>
			</div>

			<div className="container min-h-[70vh] items-center justify-center flex">
				<Offerings />
			</div>
		</div>
	);
}
