import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {
  const [toggleNav, setToogleNav] = useState(false);
  return (
    <div
      data-testid="NavbarID"
      className="py-5 text-lg font-medium flex items-center justify-between shadow-lg sticky top-0 bg-white"
    >
      <a className="hover:text-blue-600" href="/">
        {" "}
        <h1 className="ml-10 text-2xl font-bold">Company Name</h1>
      </a>
      {toggleNav ? (
        <div className="pr-10 z-50 min-[640px]:hidden">
          <RxCross2
            onClick={() => {
              setToogleNav(!toggleNav);
            }}
            size="2rem"
          ></RxCross2>
        </div>
      ) : (
        <div className="pr-10 z-50 min-[640px]:hidden">
          <IoMenu
            onClick={() => {
              setToogleNav(!toggleNav);
            }}
            size="2rem"
          ></IoMenu>
        </div>
      )}
      <ul className="flex font-semibold gap-5 mr-12 max-sm:hidden">
        <a className="hover:text-blue-600" href="/">
          Home
        </a>
        <a className="hover:text-blue-600" href="#about">
          About
        </a>
        <a className="hover:text-blue-600" href="#project">
          Project
        </a>
        <a className="hover:text-blue-600" href="#contact">
          Contact
        </a>
      </ul>
      {toggleNav ? (
        <div className="absolute top-0 bg-white w-[100vw] h-[100vh]">
          <div className="w-fit mt-40 mx-auto text-3xl flex flex-col gap-8 transition-all ease-linear">
            <a
              onClick={() => setToogleNav(false)}
              className="hover:text-blue-600"
              href="/"
            >
              Home
            </a>
            <a
              onClick={() => setToogleNav(false)}
              className="hover:text-blue-600"
              href="#about"
            >
              About
            </a>
            <a
              onClick={() => setToogleNav(false)}
              className="hover:text-blue-600"
              href="#project"
            >
              Project
            </a>
            <a
              onClick={() => setToogleNav(false)}
              className="hover:text-blue-600"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
