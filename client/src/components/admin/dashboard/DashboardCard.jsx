import React from 'react'

//============ Dashboard Button Item =============

export const DashboardCard = ({ itemName }) => {
  return (
    <div className='bg-blue-700 w-5/6 h-[110px] flex justify-center items-center rounded-lg shadow-sm shadow-black m-2'>
      <span className='text-white uppercase text-xl font-bold'>{itemName}</span>
    </div>
  )
}
