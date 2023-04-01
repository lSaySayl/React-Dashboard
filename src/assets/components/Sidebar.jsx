import React from 'react';
import {
    RiDashboardFill,
    RiBriefcaseLine,
    RiCalendar2Line,
    RiMessage2Line,
    RiLogoutBoxRLine,
 

} from "react-icons/ri";


const Sidebar = ({ toggleMenu, menu }) => {

    return (
        <div>
            <div className={`fixed lg:static w-[78%] md:w-[40%] lg:w-full top-0 z-50 bg-white ${menu ? "-left-0" : "-left-full"} w-full h-full overflow-y-auto col-span-1 p-8 border-r transition-all` }>

                {/* Logo */}
                <div className=" flex justify-center p-8">
                    <h1 className="uppercase text-2xl font-bold  tracking-[4px]">
                    Dashboard
                    </h1>
       
                    
                </div>

                <div className="h-screen flex flex-col justify-evenly">
                    {/* Menú */}
                    <nav>
                        <ul>
                            <li>
                                <a href="#" className="flex items-center gap-3 hover:bg-primary p-4 text-gray-400 hover:text-white rounded-xl transition-colors font-semibold">
                                    <RiDashboardFill />
                                    Dashboard
                                </a>
                                <a href="#" className="flex items-center gap-3 hover:bg-primary p-4 text-gray-400 hover:text-white rounded-xl transition-colors font-semibold">
                                    <RiBriefcaseLine />
                                    Job Board
                                </a>
                                <a href="#" className="flex items-center gap-3 hover:bg-primary p-4 text-gray-400 hover:text-white rounded-xl transition-colors font-semibold">
                                    <RiCalendar2Line />
                                    Schedule
                                </a>
                                <a href="#" className="flex items-center gap-3 hover:bg-primary p-4 text-gray-400 hover:text-white rounded-xl transition-colors font-semibold">
                                    <RiMessage2Line />
                                    Messenger
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Imagen en logout */}
                    <div className="flex flex-col mb-40">
                        <img src="../../../public/img.svg" alt="Image" className="mb-5" />

                        {/* Update */}
                        <div className="bg-secundary p-8 flex flex-col gap-4 rounded-3xl">
                            <h3 className="text-xl text-center">Get upgrade</h3>
                            <p className="text-gray-500 text-center">
                                Step to the next level with more features
                            </p>
                            <button className="bg-primary text-white p-2 rounded-lg font-semibold py-2.5">Learn more</button>
                        </div>

                        <a href="#" className="flex items-center gap-3 hover:bg-primary p-5 text-gray-400 hover:text-white rounded-xl transition-colors font-semibold mt-40" onClick={toggleMenu}>
                            <RiLogoutBoxRLine />
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;



