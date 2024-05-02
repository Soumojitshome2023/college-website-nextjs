"use client"
import React, { useEffect, useState } from 'react'
import FetchNoticeLineData from '@/Helper/FetchNoticeLineData';

export default function NoticeLine() {

    const [NoticeLineData, setNoticeLineData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await FetchNoticeLineData();
            if (res.success) {
                setNoticeLineData(res.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full p-2  shadow shadow-gray-600 drop-shadow-3xl  md:relative md:-top-28 md:bg-white backdrop-blur-2xl bg-opacity-50">

            {NoticeLineData &&
                <div className="w-full py-1">
                    <marquee>
                        {NoticeLineData.map((notice, index) => (
                            <a key={index} href={notice.Link ?? "#"} className="whitespace-nowrap text-xl font-bold font-serif text-gray-800 hover:text-gray-900 focus:text-gray-900 no-underline px-4 py-2">
                                {notice.Title} |
                            </a>
                        ))}
                    </marquee>
                    {/* {notices.map((notice, index) => (
                        <a key={index + notices.length} href={notice.link} className={styles.noticeLink}>
                        {notice.text}
                        </a>
                    ))} */}
                </div>
            }

        </div>
    )
}
