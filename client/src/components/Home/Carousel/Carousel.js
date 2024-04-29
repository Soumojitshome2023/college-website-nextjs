"use client"
// ======================== Imports ========================
import 'flowbite';
import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";


export function CarouselCompo() {
	const [CarouselImages, setCarouselImages] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/data.json');
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const data = await response.json();
				setCarouselImages(data.CarouselImages);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);


	return (

		<div className=" h-52 md:h-[32rem]">
			{CarouselImages &&
				<Carousel>
					{CarouselImages.map((image, index) => (
						<img key={index} src={image.ImageLink} alt="..." />
					))}
				</Carousel>
			}
		</div>
	);
}
