import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Offerings from "./offerings";
import Testimonial from "./testimonials";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Test() {
	const relaventReviews = [
		{
			author_name: "Helen Oushana",
			author_url:
				"https://www.google.com/maps/contrib/117472679114298346812/reviews",
			language: "en",
			original_language: "en",
			profile_photo_url:
				"https://lh3.googleusercontent.com/a-/ALV-UjXNfxUIfUYOJ51ZAK_vs_EgSP9rLcWr3kXgJSeuTfLn25o=s128-c0x00000000-cc-rp-mo-ba4",
			rating: 5,
			relative_time_description: "3 months ago",
			text: "So fun! My kids had a great time for a birthday party! The gym is huge and clean. The facilities are very nice and big. The staff was helpful. Overall we had a great time and the kids really enjoyed it!",
			time: 1695127390,
			translated: "False",
		},
		{
			author_name: "Kelly Peterson",
			author_url:
				"https://www.google.com/maps/contrib/117444917556944904125/reviews",
			language: "en",
			original_language: "en",
			profile_photo_url:
				"https://lh3.googleusercontent.com/a-/ALV-UjVSKdt_S4Y0uKAyJO0NUxY8ryAXvCgbrT8P4-F6r8nBSC4=s128-c0x00000000-cc-rp-mo",
			rating: 1,
			relative_time_description: "4 months ago",
			text: "I think I’ve written 2 to 3 reviews of LGA in the past, however; they have ALL been taken down. Reason being, I know both of the owners. However, I have read the other reviews below and I know one review is written by an old staff member of theirs, another review is written by the owner’s daughter. Then, I found a 3rd review written by their son?! Those reviews give it 5 stars- and have NEVER been taken down… however, my reviews, with 1 star, HAVE been taken down(every time). That doesn’t make sense and it’s not fair. So, why does LGA only get 1- star? It’s just not a good place to bring your children for gymnastics. The coaches are not best. (Although, if you talk to their coaches, they will tell you they are definitely top-notch.) What these people below have reviewed- is correct- especially about some of the staff not being properly trained. This is 100% true! I’m not sure why the owner replied that ALL the staff is highly qualified and trained. It’s just kind of how they are there. Go the Vernon Hills Gymnastics!\n\nP.S. I don’t know how to respond to the response from the staff below- however, I would like to say, the reason I’m not in your system is because I have a different last name. I also was employed at your gym, LGA, for at least 1- maybe 2 years- back in 2006-7ish. So, you do know me! And have records of me being an old employee of yours! What?! ;-) That is really excellent customer service that you had there… Not! I was recently married there for the change in the last name. The responses to these reviews are ridiculous and I agree with the majority of the reviews that this place is going down the tubes.",
			time: 1694215579,
			translated: "False",
		},
		{
			author_name: "Brian Cooke",
			author_url:
				"https://www.google.com/maps/contrib/115952745586629499495/reviews",
			language: "en",
			original_language: "en",
			profile_photo_url:
				"https://lh3.googleusercontent.com/a/ACg8ocL54PYzAJkrzo7s0B1XXUDwdKQoEPYfXIsyaO-DMBgJ3TM=s128-c0x00000000-cc-rp-mo-ba3",
			rating: 5,
			relative_time_description: "a month ago",
			text: "Love the mini arcade game they have! ❤️",
			time: 1700149405,
			translated: "False",
		},
		{
			author_name: "Francesc Torrelles",
			author_url:
				"https://www.google.com/maps/contrib/108899740292877828960/reviews",
			language: "en",
			original_language: "en",
			profile_photo_url:
				"https://lh3.googleusercontent.com/a/ACg8ocJ-shz3DfINPpCb4W9tnooqs7S1HslkULINe_bX09DE=s128-c0x00000000-cc-rp-mo",
			rating: 1,
			relative_time_description: "7 months ago",
			text: "Really bad place for kids to get introduced to gymnastics. Organization is terrible, teachers change without warning, you don’t get any meaningful report on kids progress, impossible to understand curriculum, half of the kids are sitting around doing nothing or disrupting other kids and the teachers are teenagers that spend most of their time talking to each other, looking at phones and not engaging w kids. Quite a waste of time and money.",
			time: 1685889542,
			translated: "False",
		},
		{
			author_name: "Corrie Baccelli",
			author_url:
				"https://www.google.com/maps/contrib/103739262454776816876/reviews",
			language: "en",
			original_language: "en",
			profile_photo_url:
				"https://lh3.googleusercontent.com/a/ACg8ocIg_4Q_jcZu-a0k4tIXRpytTWTgpMkVr1zvmQlREUnq=s128-c0x00000000-cc-rp-mo",
			rating: 5,
			relative_time_description: "5 months ago",
			text: "My daughter had the best birthday ever!! The gym was so much fun and the staff was amazing!!!!",
			time: 1692143515,
			translated: "False",
		},
	];
	const stats = [
		{ title: "STUDENTS", number: 125 },
		{ title: "PARTIES", number: 75 },
		{ title: "AWARDS", number: 99 },
	];
	const FeaturedSectionImages = [
		{ title: "Classes", image: "/Rectangle-2.avif" },
		{ title: "Events", image: "/Rectangle-3.avif" },
		{ title: "Parties", image: "/Rectangle-4.avif" },
	];
	return (
		<div>
			{/* Hero */}
			<div
				className="bg-cover bg-center relative h-svh min-h-[800px] pt-20 grid grid-cols-1 md:mb-0 sm:mb-16"
				style={{
					backgroundImage: "url('/hero-bg1.avif')",
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-b from-[#4A00E0]/75 to-[#2B213D]/75 " />

				<div className="grid relative place-items-center mb-36">
					<div className="mx-auto text-primary-foreground dark:text-primary">
						<h1
							className={`text-center max-w-4xl text-5xl md:text-8xl font-title`}
						>
							We empower your <br className="hidden md:block" /> child to
							achieve the seemingly impossible.{" "}
						</h1>
						<div className="flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-center mt-16">
							<Link href={"#"}>
								<Button
									variant="default"
									className="text-primary-foreground dark:text-primary"
								>
									Sign up
								</Button>
							</Link>
							<Link className="md:ml-4 text-xl text-center" href={"#"}>
								WHY CHOOSE LIBERTYVILLE GYMNASTICS?
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Classes Events Parties images */}
			<div className="container max-w-[1300px]">
				<div className="mt-20 md:mt-10 relative grid grid-cols-1 md:grid-cols-3 md:gap-20">
					{FeaturedSectionImages.map((item, index) => {
						return (
							<Card
								key={index}
								className="border-none shadow-none bg-transparent md:-translate-y-1/2 md:mb-[-70%]"
							>
								<CardContent className="p-0">
									<Image
										src={item.image}
										alt={item.title}
										height={1000}
										width={1000}
										className="rounded-[40px]"
									></Image>
								</CardContent>
								<CardTitle className="text-center font-body text-xl md:text-3xl font-bold my-8">
									{item.title}
								</CardTitle>
							</Card>
						);
					})}
				</div>
			</div>
			{/* Visualizing colors */}
			<div className="container grid md:grid-cols-10 grid-cols-2 my-20 gap-2 md:gap-6 [&>div]:p-2">
				<div className="bg-background text-foreground">background color</div>
				<div className="bg-foreground text-background">foreground color</div>
				<div className="bg-card text-card-foreground">card color</div>
				<div className="bg-card-foreground text-card">
					card foreground color
				</div>
				<div className="bg-popover text-popover-foreground">
					popover background color
				</div>
				<div className="bg-popover-foreground text-popover">
					popover foreground color
				</div>
				<div className="bg-primary text-primary-foreground">primary color</div>
				<div className="bg-primary-foreground text-primary">
					primary foreground color
				</div>
				<div className="bg-secondary text-secondary-foreground">
					secondary color
				</div>
				<div className="bg-secondary-foreground text-secondary">
					secondary foreground color
				</div>
				<div className="bg-muted text-muted-foreground">muted color</div>
				<div className="bg-muted-forground text-muted">
					muted foreground color
				</div>
				<div className="bg-accent text-accent-foreground">accent color</div>
				<div className="bg-accent-foreground text-accent">
					accent foreground color
				</div>
				<div className="bg-destructive text-destructive-foreground">
					destructive color
				</div>
				<div className="bg-destructive-foreground text-destructive">
					destructive foreground color
				</div>
				<div className="bg-border">border color</div>
				<div className="bg-input">input color</div>
				<div className="bg-ring">ring color</div>
			</div>
			{/* About us section */}
			<div className="container grid items-center grid-cols-1 md:grid-cols-2 min-h-[70vh] gap-6 my-6 md:my-20">
				<div className="md:p-4 space-y-4 md:justify-end flex flex-col md:items-end md:mr-20">
					<h3
						className={`font-title text-center md:text-left text-3xl md:text-5xl`}
					>
						Libertyville Gymnastics
					</h3>
					<p
						className={`font-body max-w-sm text-base md:text-2xl md:text-right`}
					>
						LGA is an institution that provides children of all ages the
						opportunity to discover self confidence, determination, motivation,
						respect, and the opportunity to achieve something that was once
						thought impossible.
					</p>
					<Link href={"#"}>
						<Button variant="default" className="mt-4">
							Learn More
						</Button>
					</Link>
				</div>
				<div className="relative">
					<div className="absolute md:top-10 md:left-10 top-3 left-3 bg-gradient-to-tl from-[#8d2de1] to-[#4a00e0] -z-10 rounded-3xl max-h-[475px] h-full aspect-square"></div>
					<div className="bg-gray-500 rounded-3xl max-h-[475px] aspect-square"></div>
				</div>
			</div>
			{/* Have a question section */}
			<div className="w-full bg-black dark:bg-inherit text-white">
				<div className="container flex flex-col md:flex-row text-center items-center justify-center h-[30vh] space-x-6">
					<p className={`font-title text-3xl md:text-5xl`}>
						Have a question? Get in touch now!
					</p>
					<Link href={"#"}>
						<Button variant="default">Contact us</Button>
					</Link>
				</div>
			</div>
			{/* Offerings section */}
			<div className="container min-h-[50vh] items-center justify-center flex flex-col my-6 md:my-20">
				<h1
					className={`font-title text-center w-full md:ml-2 my-4 md:text-5xl text-3xl`}
				>
					Our Offerings
				</h1>
				<p className={`font-body`}>Lorem ipsum.</p>
				<Offerings />
			</div>
			{/* Stats */}
			<div className="container min-h-[50vh] items-center justify-center flex flex-col">
				<div className="h-[300px] w-full bg-gradient-to-l from-[#8d2de1] to-[#4a00e0] rounded-[50px] [&>div>h3]:text-3xl md:[&>div>h3]:text-5xl grid grid-cols-1 md:grid-cols-3 place-items-center text-white">
					{stats.map((stat, index) => {
						return (
							<div className={`flex flex-col`} key={index}>
								<h3 className={` text-center font-title`}>{stat.number}</h3>
								<p className="font-body">{stat.title}</p>
							</div>
						);
					})}
				</div>
			</div>
			{/* Testimonials */}
			<div className="container items-center justify-center text-left flex flex-col my-6 md:my-20">
				<h1
					className={`font-title text-left w-full md:ml-2 my-4 md:text-5xl text-3xl`}
				>
					Testimonials
				</h1>
				<Testimonial
					reviews={relaventReviews}
					orientation="vertical"
					className="hidden md:flex"
					height={400}
				/>
				<Testimonial
					reviews={relaventReviews}
					orientation="horizontal"
					className="block md:hidden w-screen"
				/>
			</div>

			{/* Subscribe to our newsletter */}
			<div className="w-full bg-black dark:bg-inherit text-white py-4 md:py-10 min-h-[30vh]">
				<div className="container flex flex-col text-center items-center justify-center h-[30vh] space-x-6">
					<p className={`font-title text-3xl md:text-5xl`}>
						Subscribe to Our Newsletter
					</p>
					<form className="flex my-5">
						<Input className="rounded-l-full w-[50vw] max-w-[300px] rounded-r-none text-primary dark:border dark:border-primary" />
						<Button className="rounded-l-none rounded-r-full h-full">
							Subscribe
						</Button>
					</form>
				</div>
			</div>
			{/* Coaches section */}
			<div className="grid container grid-cols-1 md:grid-cols-3 gap-6 my-20">
				<Card className="flex justify-between space-x-4 p-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</Card>
				<Card className="flex justify-between space-x-4 p-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</Card>
				<Card className="flex justify-between space-x-4 p-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</Card>
				<Card className="flex justify-between space-x-4 p-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</Card>
				<Card className="flex justify-between space-x-4 p-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</Card>
				<Card className="flex justify-between space-x-4 p-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</Card>
				<div className="md:col-span-2 md:row-span-2 order-first md:order-none bg-gradient-to-l from-[#8d2de1] to-[#4a00e0] rounded-xl place-items-center grid">
					<div className="mx-auto flex flex-col space-y-5 items-center justify-center py-5 text-white">
						<h3 className={`md:text-5xl text-3xl`}>
							Want to <span className="italic">join</span> us?
						</h3>
						<Button variant="default">See open positions</Button>
					</div>
				</div>
				<Card className="flex justify-between space-x-4 p-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</Card>
				<Card className="flex justify-between space-x-4 p-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
}
