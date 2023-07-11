import React from 'react'
import { useRouteError,Link } from 'react-router-dom'

export const CareersError = () => {
    const error = useRouteError()
  return (
    <div className='flex items-center justify-center flex-col h-[80vh]'>
        <h1 className='text-3xl text-zinc-100 '>Error</h1>
        <p className='mb-5 text-sm text-zinc-100 '>{error.message}</p>
        <Link className='px-5 py-1 bg-red-600 font-semibold text-sm text-white ' to='/'>Back to Homepage</Link>
    </div>
  )
}
