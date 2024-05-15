import React from 'react'

//============ Dashboard Button Item =============

export const DashboardCard = ({itemName}) => {
  return (
    <div className='bg-blue-700 w-5/6 h-[200px] flex justify-center items-center rounded-lg shadow-sm shadow-black'>
        <span className='text-white uppercase text-xl font-bold'>{itemName}</span>
    </div>
  )
}
