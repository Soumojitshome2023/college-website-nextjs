"use client"
import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import React, { useState } from "react";
import Link from "next/link";

export default function HighlightCard({ data }) {
	const [ReadMore, setReadMore] = useState(false);
	return (
		<>
			{/* Card  */}
			<AnimatedElement >
				<div className="h-full rounded-lg overflow-hidden">
					<img className="md:h-48 h-40 w-full rounded-lg object-cover object-center" src={data.BannerPic} alt="img" />
					<div className="p-2">
						{/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
						<h1 className="title-font text-lg font-bold text-gray-900 mb-3">{data.Title}</h1>
						<p className="leading-relaxed text-sm sm:text-lg mb-3 text-gray-700">
							{ReadMore ? data.Description
								: <>
									{data.Description.substring(0, 100)} {data.Description.length > 100 && "..."}
								</>
							}
						</p>
						{data.Description.length > 100 &&
							<div className="flex items-center flex-wrap ">
								<button onClick={() => setReadMore(prev => !prev)} className="text-indigo-800 font-bold inline-flex items-center md:mb-2 lg:mb-0">{ReadMore ? "Read Less" : "Read More..."}
								</button>
							</div>
						}
					</div>
				</div>
			</AnimatedElement>
		</>
	)
}
