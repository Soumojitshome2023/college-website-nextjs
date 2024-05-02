import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import React from "react";
import Link from "next/link";

export default function HighlightCard({ data }) {
	return (
		<>
			{/* Card  */}
			<AnimatedElement className="p-2 my-4 mx-2 md:w-96 w-full">
				<div className="h-full rounded-lg overflow-hidden">
					<img className="md:h-48 h-40 w-full rounded-lg object-cover object-center" src={data.BannerPic} alt="img" />
					<div className="p-2">
						{/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
						<h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data.Title}</h1>
						<p className="leading-relaxed text-sm sm:text-lg mb-3">{data.Description}</p>
						<div className="flex items-center flex-wrap ">
							<Link href={data.PageLink} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Viev More
								<svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path d="M5 12h14"></path>
									<path d="M12 5l7 7-7 7"></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</AnimatedElement>
		</>
	)
}
