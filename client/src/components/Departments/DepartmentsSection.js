"use client"
import React, { useState, useEffect } from 'react';
import DepartmentCard from '@/components/Departments/DepartmentCard'
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';
import FetchDepartmentsData from '@/Helper/FetchDepartmentsData';

export default function DepartmentsSection({ HorizontalScroll = true }) {
    const [DepartmentsData, setDepartmentsData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await FetchDepartmentsData();
            if (res.success) {
                setDepartmentsData(res.data);
            }
        };
        fetchData();
    }, []);


    return (
        <section className="text-gray-600 body-font mb-12">
            <AnimatedElement>
                <h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| DEPARTMENTS </span> :</h1>
            </AnimatedElement>

            <div className={`lg:px-2 py-4 mx-auto ${HorizontalScroll ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
                {DepartmentsData &&
                    <div className={`flex justify-center ${HorizontalScroll ? "w-fit flex-row" : "flex-wrap"}`}>
                        {DepartmentsData.map((departmentData, index) => (
                            <div key={index} className={`p-2 my-4 mx-2 md:w-96 ${HorizontalScroll ? "w-96" : "w-full"}`}>
                                <DepartmentCard  data={departmentData} />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </section>
    )
}
