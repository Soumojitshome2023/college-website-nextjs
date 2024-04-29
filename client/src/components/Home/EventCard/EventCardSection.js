"use client"
import React, { useState, useEffect } from 'react';
import EventCard from './EventCard'
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';
import FetchEventsData from '@/Helper/FetchEventsData';

export default function EventCardSection() {

	const [EventsData, setEventsData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await FetchEventsData();
			if (res.success) {
				setEventsData(res.data);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<section className="text-gray-600 body-font">
				<AnimatedElement>
					<h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Event</span>s :</h1>
				</AnimatedElement>
				<div className="container px-5 py-24 mx-auto overflow-x-hidden">
					{EventsData &&
						<div className="flex flex-wrap -m-4">
							{EventsData.map((data, index) => (
								<EventCard key={index} data={data} />
							))}
						</div>
					}
				</div>
			</section>
		</>
	)
}
