"use client"
import React, { useState, useEffect } from 'react';
import EventCard from './EventCard'
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';
import FetchEventsData from '@/Helper/FetchEventsData';
import ParagraphSkeletonLoader from '../Common/SkeletonLoader/ParagraphSkeletonLoader';

export default function EventCardSection({ HorizontalScroll = true }) {

	const [EventsData, setEventsData] = useState(null);
	const [Loader, setLoader] = useState(false);

	const fetchData = async () => {
		setLoader(true);
		try {
			const res = await FetchEventsData();
			// console.warn(res)
			if (res.success) {
				const data = res.data.reverse();
				setEventsData(data);
			}
		} catch (error) {
			console.error(error);
		}
		setLoader(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<section className="text-gray-600 body-font mb-12">
				<AnimatedElement>
					<h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| UPCOMING </span>EVENTS :</h1>
				</AnimatedElement>
				{Loader && <ParagraphSkeletonLoader />}

				<div className={`lg:px-2 py-4 mx-auto ${HorizontalScroll ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
					{EventsData &&
						<div className={`flex justify-center ${HorizontalScroll ? "w-fit flex-row" : "flex-wrap"}`}>
							{EventsData.map((data, index) => (
								<div key={index} className={`p-2 my-4 mx-2 md:w-96 ${HorizontalScroll ? "w-96" : "w-full"}`}>
									<EventCard data={data} />
								</div>
							))}
						</div>
					}
				</div>
			</section>
		</>
	)
}
