"use client"
import React, { useState, useEffect } from 'react';
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';
import FetchHighlightsData from '@/Helper/FetchHighlightsData';
import HighlightCard from './HighlightCard';

export default function HighlightsSection() {

	const [HighlightsData, setHighlightsData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await FetchHighlightsData();
			if (res.success) {
				setHighlightsData(res.data);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<section className="text-gray-600 body-font">
				<AnimatedElement>
					<h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">| HIGHLIGHT</span>S :</h1>
				</AnimatedElement>
				<div className="lg:px-2 py-10 mx-auto overflow-x-hidden">
					{HighlightsData &&
						<div className="flex flex-wrap justify-center">
							{HighlightsData.map((data, index) => (
								<HighlightCard key={index} data={data} />
							))}
						</div>
					}
				</div>
			</section>
		</>
	)
}
