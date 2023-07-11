import React from 'react'
import { NavLink } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
        <h1 className='text-center text-3xl text-white'>Page not found</h1>
        <img src="/image/notfound.png" />
        <NavLink className={`bg-red-600 px-2 py-1 rounded text-white`} to='/'>Back to Homepage</NavLink>
    </div>
  )
}
