"use client"
import React, { useState, useEffect } from 'react';
import DepartmentCard from '@/components/Departments/DepartmentCard/DepartmentCard'
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';
import FetchDepartmentsData from '@/Helper/FetchDepartmentsData';

export default function page() {
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
    <section className="text-gray-600 body-font">
      <AnimatedElement>
        <h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Department</span>s :</h1>
      </AnimatedElement>

      <div className="container px-5 py-16 mx-auto overflow-x-hidden">
        {DepartmentsData &&
          <div className="flex flex-wrap -m-4">
            {DepartmentsData.map((departmentData, index) => (
              <DepartmentCard key={index} data={departmentData} />
            ))}
          </div>
        }
      </div>
    </section>
  )
}
