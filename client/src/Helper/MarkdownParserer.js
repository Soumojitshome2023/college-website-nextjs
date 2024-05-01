// NextJs Code
// MarkdownRenderer.js
"use client"
import React, { useEffect, useState } from 'react';
import MarkdownParser from 'soumojit-markdownparser';

const markdownParser = new MarkdownParser();

const MarkdownRenderer = ({ fileAddress }) => {
    const [markdownContent, setMarkdownContent] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarkdownContent = async () => {
            try {
                const response = await fetch(fileAddress);
                if (!response.ok) {
                    throw new Error('Failed to fetch Markdown content');
                }
                const content = await response.text();
                setMarkdownContent(content);
            } catch (error) {
                console.error('Error fetching Markdown content:', error);
                setError(error);
            }
        };
        fetchMarkdownContent();
    }, [fileAddress]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const html = markdownParser.parse(markdownContent); // Parse Markdown content
    return <div dangerouslySetInnerHTML={{ __html: html }} />; // Render HTML
};

export default MarkdownRenderer;
