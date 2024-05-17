"use client"
// ======================== Imports ========================
import 'flowbite';
import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
import FetchCarouselImages from '@/Helper/FetchCarouselImages';
import './Carousel.css'

export function CarouselCompo() {
	const [CarouselImages, setCarouselImages] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await FetchCarouselImages();
			if (res.success) {
				setCarouselImages(res.data);
			}
		};
		fetchData();
	}, []);


	return (

		<div className=" h-80 md:h-[30rem]">
			{CarouselImages &&
				<Carousel>
					{CarouselImages.map((image, index) => (
						<div key={index} className="relative h-full w-full">
							<img
								src={image.ImageLink}
								alt="image"
								className="object-cover h-full w-full"
							/>
						</div>
					))}
				</Carousel>
			}
		</div>
	);
}
