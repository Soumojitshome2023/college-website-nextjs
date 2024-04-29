import React from 'react'

export default function ({ params }) {
    const { department } = params;
    return (
        <div>{department}</div>
    )
}
