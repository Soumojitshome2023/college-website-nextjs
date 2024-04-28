
"use client";

import { Carousel } from "flowbite-react";

export function CarouselCompo() {
	return (
		<div className="h-60 md:h-[32rem]">

			<Carousel>
				<img src="/collegepic(1).jpg" alt="..." />
				<img src="/collegepic(2).jpg" alt="..." />
				<img src="/collegepic(3).jpg" alt="..." />
				<img src="/collegepic(4).jpg" alt="..." />
				<img src="/collegepic(5).jpg" alt="..." />

			</Carousel>
		</div>
	);
}
