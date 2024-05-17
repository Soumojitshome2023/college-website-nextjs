"use client"
import React, { useEffect, useState } from 'react';

const HTMLRender = ({ FilePath }) => {

    const [demoContent, setDemoContent] = useState(null);

    useEffect(() => {
        const fetchDemo = async () => {
            try {
                const response = await fetch(FilePath);
                if (!response.ok) {
                    throw new Error('Failed to fetch demo HTML');
                }
                const html = await response.text();
                setDemoContent(html);
            } catch (error) {
                console.error('Error fetching demo HTML:', error);
            }
        };

        fetchDemo();
    }, []);
    return (
        <div>
            {demoContent &&
                <div dangerouslySetInnerHTML={{ __html: demoContent }} />
            }
        </div>
    );
};

export default HTMLRender;
