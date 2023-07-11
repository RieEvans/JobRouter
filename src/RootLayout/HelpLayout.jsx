import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const HelpLayout = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl text-zinc-100 mb-5">Help Services</h1>
      <p className="text-zinc-100 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde
        veritatis ipsum maiores? Vero incidunt doloremque architecto laudantium
        quos totam.
      </p>
      <nav className="flex gap-5 text-zinc-200 mt-5 justify-center">
        <NavLink className="bg-red-600 px-2 py-1 rounded" to="faq">
          View the FAQ
        </NavLink>
        <NavLink className="bg-red-600 px-2 py-1 rounded" to="contact">
          Contact Us
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
