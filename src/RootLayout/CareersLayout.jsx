import React from 'react'
import { Outlet } from 'react-router-dom'


export const CareersLayout = () => {
  return (
    <div className='p-5'>
        <h2 className='text-white text-3xl mb-2'>Careers</h2>
        <p className='text-zinc-100 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, laudantium.</p>
        <Outlet />
    </div>
  )
}
