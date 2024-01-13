import * as React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function CarouselDemo({ reviews, className, orientation }: any) {
	return (
		<Carousel
			className={cn("w-full", className)}
			opts={{ loop: true }}
			orientation={orientation}
		>
			<CarouselContent className="w-full md:h-[400px]">
				{reviews.map((review: any, index: number) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<Card className=" border-none shadow-none">
								<CardContent className="flex p-6 w-full">
									{review.text}
								</CardContent>
								<CardFooter>
									<div className="flex justify-between space-x-4">
										<Avatar>
											<AvatarImage
												src={review.profile_photo_url}
												alt="@shadcn"
											/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div className="space-y-0">
											<h4 className="text-sm font-semibold">
												{review.author_name}
											</h4>
											<div className="flex items-center pt-2">
												<span className="text-xs text-muted-foreground">
													{review.relative_time_description}
												</span>
											</div>
										</div>
									</div>
								</CardFooter>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselNavigation
				items={reviews}
				orientation="vertical"
				buttonPlacement="right"
				className="hidden md:flex"
			/>
		</Carousel>
	);
}
