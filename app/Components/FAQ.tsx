'use client'
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-all group duration-200 border rounded-2xl border-gray-700 shadow-lg cursor-pointer hover:bg-gray-200">
      <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={toggleAccordion}>
        <span className="flex text-lg font-semibold text-white group-hover:text-black">{title}</span>
        <svg
          className={`w-6 h-6 text-gray-400 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`px-4  pb-5 sm:px-6 sm:pb-6 ${!isOpen && 'hidden'}`}>
        <p className='text-gray-200 group-hover:text-black'>{content}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
           <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-3xl text-gray-100 font-bold md:text-4xl md:leading-tight dark:text-white">
                    Frequently Asked Questions
                    </h2>
                    <p className="mt-1 text-gray-300 dark:text-gray-400">
                        Creative people
                    </p>
                </div>

          <div className="max-w-4xl   mx-auto mt-8 space-y-4 md:mt-16">
            <AccordionItem
              title="How to create an account?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />

            <AccordionItem
              title="How can I make payment using Paypal?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />

            <AccordionItem
              title="Can I cancel my plan?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />

            <AccordionItem
              title="How can I reach to support?"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
            />
          </div>

          <p className="text-center text-gray-200 textbase mt-9">
            Didn’t find the answer you are looking for?{' '}
            <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-600 focus:text-blue-700 hover:underline">
              Contact our support
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
