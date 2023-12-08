import React from "react";

const Bento = () => {
  return (
    <div>
      <section className="relative">
        <div className="mx-auto max-w-7xl mb-20 px-5 md:px-10 ">
          
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12">
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">1</p>
              </div>
              <p className="text-xl  text-white font-semibold">Find Component</p>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">2</p>
              </div>
              <p className="text-xl text-white font-semibold">Copy and Paste</p>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">3</p>
              </div>
              <p className="text-xl text-white font-semibold">Done</p>
              <p className="text-sm text-gray-200">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Bento;
