import React from "react";

const Services = () => {
  return (
    <div>
      <header>
        <div class="px-5 md:px-10 mb-28">
        <div className="text-center">
            <h2 className="text-3xl text-white font-semibold md:text-5xl">
              Services{" "}
              <span
                className="bg-cover bg-center px-4 text-white"
                style={{
                  backgroundImage:
                    "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')",
                }}
              >
                Offered
              </span>
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-[528px] text-gray-300 md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet elit ut aliquam
            </p>
          </div>
          <div
            class="mx-auto w-full max-w-7xl rounded-[48px] bg-cover bg-center bg-no-repeat py-20 text-white [box-shadow:rgb(106,_218,_255)_9px_9px]"
            style={{
              backgroundImage:
                "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391a6daa19785eb51dd3666_CTA%20(2).svg')",
            }}
          >
            <div class="mx-auto max-w-3xl text-center">
              <div class="mb-6 max-w-[720px] lg:mb-12">
                <h2 class="mb-4 text-3xl font-semibold md:text-5xl">
                  <span
                    class="bg-cover bg-center px-4 text-white"
                    style={{
                      backgroundImage:
                        "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391a5b04f2836ad87dcc3bc_Rectangle%20773.svg')",
                    }}
                  >
                    WebApps
                  </span>
                  <br className="block lg:hidden" />
                  &nbsp;Development
                </h2>
                <div class="mx-auto max-w-[630px]">
                  <p class="text-[#e0e0e0]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna
                  </p>
                </div>
              </div>
              <a
                href="#"
                class="inline-block rounded-xl bg-black px-8 py-4 font-semibold text-white [box-shadow:rgb(255,_255,_255)_6px_6px]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Services;
