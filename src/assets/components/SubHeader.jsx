import React from 'react';
import {RiSearchLine,RiFilter3Line} from "react-icons/ri";

const SubHeader = () => {
    return (
        <div>

            <div className="md:p-8 p-4 lg:p-12">
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold tracking-[0.5px]'>Job Board</h1>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 items-center'>

                    <form className='col-span-2'>
                        <div className='relative w-full'>
                            <RiSearchLine className='absolute left-2 top-4 text-primary
  '/>
                            <input type="text"
                                className='bg-gr-300 outline-none w-full py-3 pl-8 pr-4 placeholder-black bg-white rounded-lg'
                                placeholder='Search' />

                        </div>
                    </form>

                    <form className='col-span-1'>
                        <div className='relative w-full'>
                            <RiSearchLine className='absolute left-2 top-4 text-primary
  '/>

                            <select type="text"
                                className='bg-gr-300 outline-none w-full py-3 pl-8 pr-4 placeholder-black bg-white rounded-lg'
                                placeholder='Search'>
                                <option>Anywhere</option>

                            </select>


                        </div>
                    </form>

                    <form className='col-span-1'>
                        <div className='relative w-full'>
                            <RiFilter3Line className='absolute left-2 top-4 text-primary
  '/>
                            <input type="text"
                                className='bg-gr-300 outline-none w-full py-3 pl-8 pr-4 placeholder-black bg-white rounded-lg'
                                placeholder='Filters' />
                            <span className='absolute text-sm right-2 top-[7px] bg-primary text-white py-1 px-[9px] rounded-full'>4</span>



                        </div>
                    </form>


                </div>

            </div>

        </div>
    );
}

export default SubHeader;
