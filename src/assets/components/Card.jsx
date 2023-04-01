import React from 'react';

const Card = ({icono,titulo}) => {
    return (
        <div>

            <div className='bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-xl hover:border-2 border-primary mb-4'>

                {/* Icon card */}

                <div className='w-full md:w-[10%] flex items-center justify-start md:justify-center'>
                    <span className='text-7xl text-primary'>
                        {icono}
                    </span>

                </div>
                {/* Title card */}
                <div className='w-full md:w-[70%]'>
                    <h1 className='text-xl flex items-center gap-4 mb-2'>{titulo}
                        <span className='text-sm py-1 px-2 bg-secundary font-semibold text-primary
    '>
                            Remote

                        </span>

                        <span className='text-sm py-1 px-2 font-semibold text-green-600 bg-green-100'>
                            Sketh
                        </span>
                    </h1>
                    <p className='text-gray-500'>Dropbox <span className='text-primary font-bold'>----</span> Warzawa</p>
                </div>

                {/* Time */}

                <div className='w-full md:w-[20%]'>
                    <h3 className='text-xl text-gray-500 mb-2'>8.8 - 13-7k PLN</h3>
                    <p className='text-gray-500'>2 days ago</p>
                </div>


            </div>

        </div>
    );
}

export default Card;
