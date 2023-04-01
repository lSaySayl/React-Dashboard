import React from 'react';
import {
  RiNotification2Line, RiArrowDownSFill, RiSearchLine, RiCheckboxBlankCircleFill
} from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <header className=' md:pl-8 flex flex-col md:flex-row gap-4
        items-center justify-between p-4 lg:pl-12 w-full '>
        {/*Search */}
        <form className=' w-full md:[40%] lg:w-[30%] order-1 md:order-none'>
          <div className='relative w-full'>
            <RiSearchLine className='absolute left-2 top-3
              '/>
            <input type="text"
              className='bg-gr-300 outline-none rounded-lg w-full py-2 pl-8 pr-4 placeholder-black bg-terciary'
              placeholder='Search' />

          </div>
        </form>

        {/* Notifications */}

        <nav className='w-full md:[60%] lg:w-[70%] flex justify-center md:justify-end'>
          <ul className='flex items-center gap-4'>
            <li>
              <a href="#" className='relative'>
                <RiNotification2Line className='text-xl' />
                <RiCheckboxBlankCircleFill className='absolute -top-0.5 -right-0.5 text-xs text-red-500' />
              </a>
            </li>

            <li>
              <a href="#" className='flex items-center gap-2 font-bold'>
                Camilo Londoño
                <RiArrowDownSFill />

              </a>
            </li>
          </ul>
        </nav>

      </header>

    </div>
  );
}

export default Header;
