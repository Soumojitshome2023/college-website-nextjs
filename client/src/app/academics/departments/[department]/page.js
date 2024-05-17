"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import FetchDepartmentsData from '@/Helper/FetchDepartmentsData';
import HTMLRender from '@/Helper/HTMLRender';

export default function page({ params }) {
	const { department } = params;
	const [QueryDepartmentData, setQueryDepartmentData] = useState(null);
	const [DepartmentsData, setDepartmentsData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await FetchDepartmentsData();
			if (res.success) {
				setDepartmentsData(res.data);
				const QueryDepartmentData = res.data.find(dep => dep.Keyword == department);
				setQueryDepartmentData(QueryDepartmentData);
			}
			if (typeof window !== 'undefined') {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: 'smooth',
				});
			}
		};
		fetchData();
	}, []);

	return (
		<>

			{QueryDepartmentData &&

				<div className='flex flex-row'>
					<aside className="fixed border-r-2 border-gray-400 hidden md:block top-24 left-0 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0">
						<div className="h-full py-4 overflow-y-auto">
							<ul className="space-y-2">
								{DepartmentsData.map((dep, index) => (
									<li key={index} className={`border-b-2 p-2 border-gray-600 hover:bg-gray-200 ${department == dep.Keyword && "bg-gray-400"}`}>
										<Link href={dep.PageLink} className="flex items-center text-gray-900  font-bold text-sm">
											{dep.PageRouteData.DepartmentName}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</aside>

					<div className='flex md:ml-56 flex-col justify-center items-center w-full'>
						<div className=' w-full lg:h-80 overflow-hidden flex justify-center items-center '>
							<img className="w-full rounded-lg" src={QueryDepartmentData.BannerPic} alt="image description" />
						</div>
						<h1 className="w-full p-2 text-lg font-extrabold leading-none tracking-tight lg:text-3xl text-white text-center  bg-red-950">{QueryDepartmentData.PageRouteData.DepartmentName}</h1>
						<div className='p-2 bg-white pb-20'>
							<HTMLRender FilePath={QueryDepartmentData.PageRouteData.DepartmentStaticData} />
						</div>
					</div>
				</div>
			}
		</>
	)
}
