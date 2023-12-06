// components/Hero.js

const Hero = () => {
    return (
      <div>
        <section className="bg-gradient-to-t from-[#030303] to-[#363636]">
          
          <div className="flex flex-col items-center justify-center">
            <div className="relative items-center w-full px-5 pt-12 mx-auto max-w-7xl lg:pt-36 lg:px-16 md:px-12">
              <div className="max-w-4xl pt-16 lg:pt-0 mx-auto text-center">
                <p className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                  Deploying your service
                  has never been easier
                </p>
                <p className="max-w-2xl mx-auto mt-8 text-base lg:text-xl text-slate-300">
                  Zeabur is a platform that helps developers deploy services with a
                  single click, no matter what programming language or development
                  framework your project uses.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
               
                  <a className="items-center inline-flex focus:outline-none justify-center text-white bg-[#5b03e3] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-transparent hover:border-white hover:text-white lg:w-auto px-6 py-3 rounded-full text-center w-full">
                    Get started
                  </a>
                
              </div>
            </div>
            <div className="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
              <img
                alt=""
                className="relative object-cover w-full rounded lg:rounded-2xl"
                src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Hero;