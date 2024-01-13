import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function Component() {
	return (
		<section
			className="relative w-full h-svh bg-center bg-cover"
			style={{
				backgroundImage: "url('/hero-bg1.avif')",
			}}
		>
			<div className="absolute inset-0 bg-black/50" />
			<div className="relative container mx-auto px-4 md:px-6 h-full grid place-items-center justify-center">
				<div className="text-center text-white max-w-2xl">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Cultivating Champions Beyond the Mat
					</h1>
					<p className="text-lg md:text-2xl font-light mb-8">
						At Libertyville Gymnastics Academy, we go beyond training gymnasts;
						we shape champions. Our philosophy centers on creating an
						environment that instills safety, discipline, self-esteem, and
						respect. Our dedicated coaches aim to develop not just exceptional
						athletes but individuals with the tools to succeed in any endeavor
						they pursue throughout their lives.
					</p>

					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline2">
								<span className="w-0 h-0 rounded-full bg-secondary/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-out duration-300 transition-all group-hover:w-[200px] group-hover:h-[200px] -z-1"></span>
								Get in Touch
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<DialogHeader>
								<DialogTitle>Join our newsletter</DialogTitle>
								<DialogDescription>
									Make changes to your profile here. Click save when you&apos;re
									done.
								</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Name
									</Label>
									<Input
										id="name"
										placeholder="your name"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="email" className="text-right">
										Email Address
									</Label>
									<Input
										id="email"
										placeholder="email address"
										className="col-span-3"
									/>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="text" className="text-right">
										Message
									</Label>
									<Textarea
										className="col-span-3"
										placeholder="Type your message here."
									/>
								</div>
							</div>
							<DialogFooter>
								<Button type="submit">Save changes</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</section>
	);
}
