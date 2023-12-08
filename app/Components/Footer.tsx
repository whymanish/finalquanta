import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
          <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
            <div>
              <div aria-hidden="true" className="flex space-x-1">
                    <div aria-hidden="true" className="flex space-x-1">
                      <div className="h-4 w-4 rounded-full bg-gray-100 dark:bg-gray-200"></div>
                      <div className="h-6 w-2 bg-blue-400 dark:bg-primaryLight"></div>
                    </div>
                    <span className="text-base font-bold text-gray-100 dark:text-white">
                      Quantafile
                    </span>{" "}
                  </div>
              <nav className="flex gap-8 mt-11">
                <a
                  className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="#_"
                >
                  <span className="relative z-10">Contact</span>
                </a>
                <a
                  className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-blue-600 transition-colors delay-150 hover:delay-[0ms]"
                  href="#_"
                >
                  <span className="relative z-10">About</span>
                </a>
                
              </nav>
            </div>
            <div className="relative flex items-center self-stretch bg-white p-4 -mx-4 transition-colors  sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
              <div className="relative flex items-center justify-center flex-none w-24 h-24 bg-black rounded-xl">
               
              </div>
              <div className="ml-8 lg:w-64">
                <p className="text-base font-semibold text-black">
                  <a href="#_">
                    <span className="absolute inset-0 sm:rounded-2xl"></span>Stay updated
                  </a>
                </p>
                <p className="mt-1 text-sm text-gray-500 hover:text-blue-600">
                  Follow us on social media for news and updates
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pt-8 pb-12 border-t border-gray-800 md:flex-row-reverse md:justify-between md:pt-6">
            <div className="max-w-xl">
              <form className="flex flex-col items-center justify-center max-w-sm mx-auto" action="">
                <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                  <input
                    name="email"
                    type="email"
                    className="block w-full px-4 py-2 text-sm font-medium text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-full font-spline focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                    placeholder="Enter your email..."
                    required
                  />
                  <button
                    type="button"
                    className="items-center inline-flex justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-black text-sm focus-visible:ring-black"
                  >
                    <div style={{ position: 'relative' }}>Subscribe</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-4 h-auto ml-2"
                    >
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <p className="mt-6 text-sm text-indigo-500 md:mt-0">
              © Copyright at Quantafile 2023 All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
