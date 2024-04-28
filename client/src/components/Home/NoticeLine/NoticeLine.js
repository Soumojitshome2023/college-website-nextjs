import React from 'react'
import styles from './NoticeLine.module.css';

export default function NoticeLine({ notices }) {
    return (
        <div className="w-full p-2  shadow shadow-gray-800 drop-shadow-3xl">

            <div className={styles.noticeContainer}>
                <div className={styles.noticeLine}>
                    {notices.map((notice, index) => (
                        <a key={index} href={notice.link} className={styles.noticeLink}>
                            {notice.text} |
                        </a>
                    ))}
                    {/* Add the same set of notices again for seamless looping */}
                    {/* {notices.map((notice, index) => (
                        <a key={index + notices.length} href={notice.link} className={styles.noticeLink}>
                            {notice.text}
                        </a>
                    ))} */}
                </div>
            </div>

        </div>
    )
}
