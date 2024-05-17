"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'
import AccordionCard from './AccordionCard';
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';

export default function Accordion() {
    const AccordionData = [
        {
            "title": "What is the total fee payable at the time of admission for regular students?",
            "description": "The total fee payable at the time of admission for regular students is ₹1,05,200."
        },
        {
            "title": "What is the total fee payable at the time of admission for students allotted through TFW (Tuition Fee Waiver) scheme?",
            "description": "The total fee payable at the time of admission for students allotted through TFW is ₹53,200."
        },
        {
            "title": "How much is the tuition fee per semester?",
            "description": "The tuition fee per semester is ₹52,000."
        },
        {
            "title": "Are there any additional fees that might be charged by the University (MAKAUT)?",
            "description": "Yes, there are additional fees charged by the University, which include:  1) University Development Fees @ ₹550 per year (one-time payment of ₹2,200) 2) University Registration Fees @ ₹500 (one-time payment)"
        },
        {
            "title": "Is the caution deposit refundable?",
            "description": "Yes, the caution deposit of ₹10,000 is refundable."
        },
        {
            "title": "How can the fees be paid?",
            "description": "The fees can be paid by cash or demand draft in favour of 'ACADEMY OF TECHNOLOGY,' payable at Kolkata."
        },
        {
            "title": "Are the tuition fees subject to change?",
            "description": "Yes, the tuition fees may be revised based on directives from the West Bengal Government."
        },
        {
            "title": "What is the Vidyarthi Mediclaim, and how much does it cost?",
            "description": "Vidyarthi Mediclaim is a medical insurance for students, and it costs ₹2,500 (one-time payment)."
        },
        {
            "title": " What are the fees for library services?",
            "description": "The library fees, which cover the Book Bank, Journals, and Digital Library, amount to ₹6,000 (one-time payment)."
        }
    ]

    return (
        <div className='mb-10'>
            <AnimatedElement>
                <h1 className="m-4 mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| FAQ</span> :</h1>
            </AnimatedElement>
            {AccordionData.map((data, index) => (
                <AccordionCard key={index} title={data.title} description={data.description} />
            ))}
        </div>

    )
}
