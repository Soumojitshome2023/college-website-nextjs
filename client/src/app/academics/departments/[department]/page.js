import MarkdownRenderer from '@/Helper/MarkdownParserer';
import React from 'react'

export default function ({ params }) {
    const { department } = params;
    const markdownFileAddress = '/departmentHTML/CSE.md';

    return (
        <div>
            <div className='border-2 border-red-700 h-screen m-6 shadow-2xl'>
                <div className='flex justify-center font-bold text-2xl capitalize mt-3'>{department}</div>
                <div>Description</div>
                <MarkdownRenderer fileAddress={markdownFileAddress} />
            </div>

        </div>
    )
}


