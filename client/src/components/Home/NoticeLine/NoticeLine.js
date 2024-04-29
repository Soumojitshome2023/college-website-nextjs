"use client"
import React, { useEffect, useState } from 'react'
import styles from './NoticeLine.module.css';

export default function NoticeLine() {

    const [NoticeLineData, setNoticeLineData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setNoticeLineData(data.NoticeLineData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full p-2  shadow shadow-gray-800 drop-shadow-3xl">

            {NoticeLineData &&
                <div className={styles.noticeContainer}>
                    <div className={styles.noticeLine}>
                        {NoticeLineData.map((notice, index) => (
                            <a key={index} href={notice.Link ?? "#"} className={styles.noticeLink}>
                                {notice.Title} |
                            </a>
                        ))}
                        {/* {notices.map((notice, index) => (
                        <a key={index + notices.length} href={notice.link} className={styles.noticeLink}>
                        {notice.text}
                        </a>
                    ))} */}
                    </div>
                </div>
            }

        </div>
    )
}
