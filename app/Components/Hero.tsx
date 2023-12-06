// components/Hero.js

const Hero = () => {
  return (
    <div>
      <section className="">
        <div className="flex flex-col h-screen   justify-center">
          <div className="  w-full px-5  mx-auto max-w-7xl  lg:px-16 md:px-12">
            <div className="max-w-5xl  lg:pt-0 mx-auto text-center">
              <p className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Deploying your service has never been easier
              </p>
              <p className="max-w-2xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
                Zeabur is a platform that helps developers deploy services with
                a single click, no matter what programming language or
                development framework your project uses.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
              <a className="items-center inline-flex focus:outline-none justify-center text-white bg-[#5b03e3] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
