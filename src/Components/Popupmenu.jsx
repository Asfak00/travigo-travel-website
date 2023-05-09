import React from "react";
import { NavLink } from "react-router-dom";

const Popupmenu = ({ navlinks, popupState }) => {
  return (
    <>
      <nav
        className={`fixed top-14 right-14 z-[100] bg-white bg-opacity-70 opacity-100 backdrop-filter backdrop-blur-md shadow-lg shadow-slate-300 py-5 px-6 rounded-md hidden lg:flex transition-transform duration-200 justify-center items-center xsm:right-12 ${
          popupState ? "showpopup" : "hidepopup"
        } `}>
        <ul className="flex flex-col gap-3 items-start">
          {navlinks?.map((item) => (
            <li key={item.id}>
              <NavLink to={"#"} className="">
                {item.link}
              </NavLink>
            </li>
          ))}

          <li>
            <button className="button-light shadow-slate-300 lg:w-auto rounded-lg">
              Join Us
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Popupmenu;
