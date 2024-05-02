"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'
import AccordionCard from './AccordionCard';

export default function Accordion() {
    const AccordionData = [
        {
            "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]


    return (
        <div className='mb-10'>

            {AccordionData.map((data, index) => (
                <AccordionCard key={index} title={data.title} description={data.description} />
            ))}
        </div>

    )
}
