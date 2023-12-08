import React from "react";

const Bento = () => {
  return (
    <div>
      <section className="py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5  md:px-10 ">
          <p className="font-inter text-white mb-2 text-center text-sm font-medium">
            3 EASY STEPS
          </p>
          <div className="text-center">
            <h2 className="text-3xl text-white font-semibold md:text-5xl">
              How it{" "}
              <span
                className="bg-cover bg-center px-4 text-white"
                style={{
                  backgroundImage:
                    "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')",
                }}
              >
                Works
              </span>
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-[528px] text-gray-300 md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet elit ut aliquam
            </p>
          </div>
          <div className="flex bg-gradient-to-r from-rose-100 to-teal-100 [box-shadow:rgb(106,_218,_255)_9px_9px] rounded-3xl px-4 flex-col items-start justify-center lg:flex-row">
            <div className="relative group my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex group h-16 w-16 items-center justify-center rounded-3x">
                <svg
                  className="w-12 group-hover:translate-x-5 transition duration-300 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M5.5 9H3.5"
                      stroke="#0095FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M5 15L4 15"
                      stroke="#0095FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M4 12H2"
                      stroke="#0095FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M12.0409 12.7649C12.4551 12.7649 12.7909 12.4291 12.7909 12.0149C12.7909 11.6007 12.4551 11.2649 12.0409 11.2649V12.7649ZM9.26797 12.7649H12.0409V11.2649H9.26797V12.7649Z"
                      fill="#0095FF"
                    ></path>{" "}
                    <path
                      d="M11.8369 4.80857L12.1914 4.14766L11.8369 4.80857ZM20.5392 9.47684L20.1846 10.1377L20.5392 9.47684ZM20.5356 14.5453L20.8891 15.2068L20.5356 14.5453ZM11.8379 19.1934L11.4844 18.5319H11.4844L11.8379 19.1934ZM8.13677 15.7931L7.41828 15.578L8.13677 15.7931ZM8.13127 8.2039L7.41256 8.41827L8.13127 8.2039ZM9.18255 11.7286L8.46384 11.9429L9.18255 11.7286ZM11.4823 5.46948L20.1846 10.1377L20.8937 8.81593L12.1914 4.14766L11.4823 5.46948ZM20.1821 13.8839L11.4844 18.5319L12.1914 19.8548L20.8891 15.2068L20.1821 13.8839ZM8.85526 16.0082L9.90074 12.5163L8.46376 12.0861L7.41828 15.578L8.85526 16.0082ZM9.90126 11.5142L8.84998 7.98954L7.41256 8.41827L8.46384 11.9429L9.90126 11.5142ZM11.4844 18.5319C10.7513 18.9237 9.98824 18.7591 9.44091 18.2563C8.88829 17.7486 8.58451 16.9125 8.85526 16.0082L7.41828 15.578C6.97411 17.0615 7.47325 18.4855 8.4261 19.3609C9.38423 20.2411 10.8292 20.5828 12.1914 19.8548L11.4844 18.5319ZM20.1846 10.1377C21.6065 10.9005 21.6046 13.1236 20.1821 13.8839L20.8891 15.2068C23.3683 13.8819 23.3707 10.1447 20.8937 8.81593L20.1846 10.1377ZM12.1914 4.14766C10.8301 3.41739 9.38432 3.75692 8.42486 4.63604C7.47072 5.5103 6.96983 6.93392 7.41256 8.41827L8.84998 7.98954C8.5801 7.08467 8.88494 6.24894 9.43821 5.74199C9.98618 5.23991 10.7495 5.07638 11.4823 5.46948L12.1914 4.14766ZM9.90074 12.5163C9.9986 12.1895 9.99878 11.8412 9.90126 11.5142L8.46384 11.9429C8.47777 11.9896 8.47774 12.0394 8.46376 12.0861L9.90074 12.5163Z"
                      fill="#363853"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-2xl text-indigo-500 font-bold lg:mt-8">
                  Send us your requirements
                </h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem
                  ipsum dolor sit amet
                </p>
              </div>
              <svg
                className="absolute  -bottom-[48px] left-[28px] lg:hidden"
                width="12"
                height="70"
                viewBox="0 0 12 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                  fill="black"
                ></path>
              </svg>
              <svg
                className="absolute right-0 top-7 hidden lg:block"
                width="170"
                height="12"
                viewBox="0 0 170 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="relative group my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl">
                <svg
                  className="w-12 group-hover:translate-x-5 transition duration-300 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
                      stroke="#363853"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M8 9.5L10.0781 11.2318C10.5579 11.6316 10.5579 12.3684 10.0781 12.7682L8 14.5"
                      stroke="#0095FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12.5 14.5H16"
                      stroke="#0095FF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-2xl text-blue-500 font-bold lg:mt-8">
                  Development and Testing
                </h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem
                  ipsum dolor sit amet
                </p>
              </div>
              <svg
                className="absolute -bottom-[48px] left-[28px] lg:hidden"
                width="12"
                height="70"
                viewBox="0 0 12 95"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 0.226497L0.226497 6L6 11.7735L11.7735 6L6 0.226497ZM6 94.7735L11.7735 89L6 83.2265L0.226497 89L6 94.7735ZM5 6V10.15H7V6H5ZM5 18.45V26.75H7L7 18.45H5ZM5 35.05L5 43.35H7V35.05H5ZM5 51.65L5 59.95H7L7 51.65H5ZM5 68.25L5 76.55H7L7 68.25H5ZM5 84.85L5 89H7V84.85H5Z"
                  fill="black"
                ></path>
              </svg>
              <svg
                className="absolute right-0 top-7 hidden lg:block"
                width="170"
                height="12"
                viewBox="0 0 170 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.226497 6L6 11.7735L11.7735 6L6 0.226497L0.226497 6ZM169.773 6L164 0.226497L158.227 6L164 11.7735L169.773 6ZM6 7H9.95V5H6V7ZM17.85 7H25.75V5H17.85V7ZM33.65 7H41.55V5H33.65V7ZM49.45 7H57.35V5H49.45V7ZM65.25 7H73.15V5H65.25V7ZM81.05 7H88.95V5H81.05V7ZM96.85 7H104.75V5H96.85V7ZM112.65 7H120.55V5H112.65V7ZM128.45 7H136.35V5H128.45V7ZM144.25 7H152.15V5H144.25V7ZM160.05 7H164V5H160.05V7Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="relative group  my-8 flex w-full rounded-md lg:mx-8 lg:flex-col">
              <div className="flex h-16 w-16 items-center justify-center rounded-3x">
                <svg
                  className="w-12 group-hover:translate-y-5 transition duration-300 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M7.82045 14.4601L6.67358 18.9669C6.32924 20.3201 7.77672 21.4446 9.06589 20.8255L10.9987 19.8973C11.6296 19.5943 12.3704 19.5943 13.0013 19.8973L14.9341 20.8255C16.2233 21.4446 17.6707 20.3201 17.3264 18.9669L16.1795 14.4601"
                      stroke="#0095FF"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      d="M5.75486 7.16223C6.22538 5.21947 7.79162 3.70254 9.79753 3.24683C11.2462 2.91772 12.7538 2.91772 14.2025 3.24683C16.2084 3.70254 17.7746 5.21947 18.2451 7.16223C18.585 8.56527 18.585 10.0254 18.2451 11.4285C17.7746 13.3712 16.2084 14.8882 14.2025 15.3439C12.7538 15.673 11.2462 15.673 9.79754 15.3439C7.79162 14.8882 6.22538 13.3712 5.75486 11.4285C5.41505 10.0254 5.41505 8.56527 5.75486 7.16223Z"
                      stroke="#363853"
                      stroke-width="1.5"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className="ml-6 lg:ml-0">
                <h2 className="mb-5 text-2xl font-bold text-green-500 lg:mt-8">
                  Deliver !
                </h2>
                <p className="font-inter max-w-md pr-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet, elit ut aliquam, purus sit lorem
                  ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bento;
