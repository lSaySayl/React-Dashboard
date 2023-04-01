import React from 'react';
import {RiCloseLine
  } from "react-icons/ri";

const Botones = () => {
    return (
        <div>

            <div className='flex items-center flex-wrap gap-4 mt-2 mb-12'>

                <span className='bg-white flex
items-center gap-4 py-2 pl-4 pr-6 rounded-full'>
                    <button className='bg-secundary text-primary rounded-full p-1
'>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500'>Design</span>

                </span>
                <span className='bg-white flex
items-center gap-4 py-2 pl-4 pr-6 rounded-full'>
                    <button className='bg-secundary text-primary rounded-full p-1
'>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500'>Regular</span>

                </span>
                <span className='bg-white flex
items-center gap-4 py-2 pl-4 pr-6 rounded-full'>
                    <button className='bg-secundary text-primary rounded-full p-1
'>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500'>Full time</span>

                </span>

                <span className='bg-white flex
items-center gap-4 py-2 pl-4 pr-6 rounded-full'>
                    <button className='bg-secundary text-primary rounded-full p-1
'>
                        <RiCloseLine />
                    </button>
                    <span className='text-gray-500'>B2B</span>

                </span>

                <span className='text-gray-500 ml-4 hover:cursor-pointer'>Clear All</span>

            </div>

        </div>
    );
}

export default Botones;
