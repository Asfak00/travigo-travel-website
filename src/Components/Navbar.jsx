import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../Images/logo.png";
import menu from "../Images/menu.svg";
import Popupmenu from "./Popupmenu";

const Navbar = ({ navlinks }) => {
  const [popupState, setPopupState] = useState(false);
  const [scrollState, setScrollState] = useState(false);

  const triggerPopup = () => {
    setPopupState(!popupState);
  };

  const onNavState = () => {
    if (window.scrollY > 180) {
      setScrollState(true);
    } else {
      setScrollState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavState);

    return () => {
      window.removeEventListener("scroll", onNavState);
    };
  }, []);

  return (
    <>
      <header className={`nav-default ${scrollState && `nav-sticky`}`}>
        <nav className="flex justify-between items-center travigo-container absolute top-6 lg:top-3 left-0 right-0 ">
          <NavLink to={"/"} className="flex items-center justify-center">
            <img src={Logo} alt="logo/img" className="w-22 h-9 object-fill" />
          </NavLink>

          <ul className="flex items-center gap-7 justify-center lg:hidden">
            {navlinks?.map((item) => (
              <li key={item.id}>
                <NavLink to={"#"} className="">
                  {item.link}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="flex items-center justify-center lg:hidden">
            <li>
              <button type="button" className="button-emrad">
                Join Us
              </button>
            </li>
          </ul>

          <ul className="hidden lg:flex justify-center items-center">
            <li className="flex justify-center items-center ">
              <button
                type="button "
                className="transition duration-200 active:scale-90"
                onClick={triggerPopup}>
                <img
                  src={menu}
                  alt="menu/img"
                  className="object-cover shadow-sm filter"
                />
              </button>
            </li>
          </ul>
        </nav>
        <Popupmenu navlinks={navlinks} popupState={popupState} />
      </header>
    </>
  );
};

export default Navbar;
