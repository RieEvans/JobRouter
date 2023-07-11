import React from 'react';
import { useLoaderData, Link, useParams } from 'react-router-dom';

export const Careers = () => {
    const {id} = useParams()
    const careers = useLoaderData();

    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-2 mt-5'>
            {careers.map(items => (
                <Link to={items.id.toString()} className='focus:bg-red-600 flex flex-col gap-5 hover:bg-red-600 transition delay-50 text-sm text-zinc-100  bg-gray-800 px-5 py-5 rounded-xl' key={items.id}>
                    <h1 className='text-2xl'>{items.title}</h1>
                    <p className='underline'>{items.location}</p>
                    <div className='w-[300px] rounded-xl '>
                    <img src={items.img} className='w-full h-full object-cover rounded-xl' />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export const careersLoaders = async () => {
    
    const res = await fetch ('https://real-pear-jaguar-suit.cyclic.app/careers')
    if(!res.ok){
        throw Error("Could not Fetch Data Careers")
      }
    return res.json();
};
