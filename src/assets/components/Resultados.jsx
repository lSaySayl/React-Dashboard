import React from 'react';
import {

    RiArrowDownSFill
  } from "react-icons/ri";

const Resultados = () => {
    return (
        <div>

        <div className='flex items-center justify-between mb-8'>
            <p className='text-gray-500 font-semibold'>We've found <span className='text-primary font-bold'>523</span> jobs!</p>

            <p className='flex items-center gap-2 font-semibold'>
              Sort by: <span className='text-primary font-bold hover:cursor-pointer'>Date</span> <RiArrowDownSFill />
            </p>

          </div>
            
        </div>
    );
}

export default Resultados;
