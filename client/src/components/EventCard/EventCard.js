"use client"
import Link from "next/link";
import React, { useState } from "react";
import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import { useAuth } from "@/context/auth";
import ThreeDot from "./ThreeDot";

export default function EventCard({ data }) {
	const [ReadMore, setReadMore] = useState(false);
	const { authUser, IsLoading, setAuthUser } = useAuth();

	return (
		<>
			{/* Card  */}
			<AnimatedElement>
				<div className="rounded-lg min-h-96">
					<img className="md:h-48 h-40 w-full rounded-lg object-cover object-center" src={data.posterURL} alt="img" />
					<div className="p-2">
						{/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
						<h1 className="title-font text-lg font-bold text-gray-900 mb-3">{data.title}</h1>
						<p className="leading-relaxed text-sm sm:text-lg mb-3 text-gray-700">
							{ReadMore ? data.details
								: <>
									{data.details.substring(0, 100)} {data.details.length > 100 && "..."}
								</>
							}
						</p>
						<div className="flex justify-between">
							{data.details.length > 100 &&
								<div className="flex items-center flex-wrap ">
									<button onClick={() => setReadMore(prev => !prev)} className="text-indigo-800 font-bold inline-flex items-center md:mb-2 lg:mb-0">{ReadMore ? "Read Less" : "Read More..."}
									</button>
								</div>
							}
							<ThreeDot id={data._id} />
						</div>
					</div>
				</div>
			</AnimatedElement>
		</>
	)
}
