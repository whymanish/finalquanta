"use client";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer absolute -left-full" // Set off-screen to hide without affecting the layout
          aria-hidden="true"
          checked={isMobileMenuOpen}
          onChange={toggleMobileMenu}
        />
        <nav
          className={`fixed z-20 py-2  w-full  bg-transparent  backdrop-blur navbar  shadow-gray-600/5 ${isMobileMenuOpen ? "peer-checked:navbar-active" : ""
            } md:relative md:bg-[#363636] dark:shadow-none`}
        >
          <div className="xl:container m-auto px-6">
            <div className="flex flex-wrap justify-center items-center  gap-6 md:py-3 md:gap-0">
              <div className="w-full flex justify-between items-center lg:w-auto lg:pl-4">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div aria-hidden="true" className="flex space-x-1">
                      <div className="h-4 w-4 rounded-full bg-gray-50 dark:bg-gray-200"></div>
                      <div className="h-6 w-2 bg-blue-500 dark:bg-primaryLight"></div>
                    </div>
                    <span className="text-base font-bold text-gray-100  dark:text-white">
                      Quantafile
                    </span>{" "}
                  </div>
                </a>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  {isMobileMenuOpen ? (
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-6 rounded bg-blue-400 dark:bg-gray-300 transform -rotate-45 translate-x-1 translate-y-1 transition duration-300"
                    ></div>
                  ) : (
                    <>
                      <div
                        aria-hidden="true"
                        className="m-auto h-0.5 w-6 rounded bg-gray-100 dark:bg-gray-300 transition duration-300"
                      ></div>
                      <div
                        aria-hidden="true"
                        className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-100 dark:bg-gray-300 transition duration-300"
                      ></div>
                    </>
                  )}
                </label>
              </div>
              <div
                className={`navmenu ${isMobileMenuOpen ? "block" : "hidden"
                  } w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0`}
              >
                <div
                  className={` lg:pr-4 ${isMobileMenuOpen
                      ? "block text-gray-800 md:px-4  transition "
                      : "block text-gray-100 md:px-4 transition"
                    }`}
                >
                  <ul className="space-y-6 tracking-wide font-semibold text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <a href="#" className="md:px-4">
                        <span className="">Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="md:px-4">
                        <span>Portfolio</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="md:px-4">
                        <span>Services</span>
                      </a>
                    </li>
                  </ul>
                </div>

                
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
