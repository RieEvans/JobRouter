import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const RouteLayout = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="">
      <header className="fixed top-0 bg-gray-800 w-full">
        <nav className="px-10 py-5 flex items-center justify-between">
          <span className="w-full">
            <h1 className="text-zinc-100 text-4xl">JobRouter</h1>
          </span>

          <div className="sm:hidden md:block text-xl text-white flex gap-5 ">
            <NavLink className="focus:bg-red-600 px-2 py-1 rounded" to="/">
              Home
            </NavLink>
            <NavLink className="focus:bg-red-600 px-2 py-1 rounded" to="/about">
              About
            </NavLink>
            <NavLink className="focus:bg-red-600 px-2 py-1 rounded" to="/help">
              Help
            </NavLink>
            <NavLink
              className="focus:bg-red-600 px-2 py-1 rounded"
              to="/careers">
              Careers
            </NavLink>
          </div>
          <div onClick={() => setOpen(!open)} className="sm:block md:hidden bg-red-600 font-bold flex items-center justify-center px-2 text-white rounded-md">
              <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
        {/* For Mobile Nav Links */}
        <div className={`${open ? 'translate-x-0' : 'translate-x-[-500px]'} transition sm:block md:hidden absolute bg-gray-800 h-screen w-[50%] text-xl text-white `}>
          <div className="flex flex-col gap-5 w-full p-5 ">
            <NavLink className="focus:bg-red-600 bg-red-600  px-2 py-1 rounded" to="/">
              Home
            </NavLink>
            <NavLink className="focus:bg-red-600 px-2 py-1 rounded" to="/about">
              About
            </NavLink>
            <NavLink className="focus:bg-red-600 px-2 py-1 rounded" to="/help">
              Help
            </NavLink>
            <NavLink
              className="focus:bg-red-600 px-2 py-1 rounded"
              to="/careers">
              Careers
            </NavLink>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
