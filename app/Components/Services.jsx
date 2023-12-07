import React from 'react'

const Services = () => {
    return (
    <div>
      
      
    <section class="py-20">
        <div class="relative  items-center w-full px-5  mx-auto max-w-7xl lg:px-16 md:px-12">
            <div>
                <div class="text-center ">
                    <span class="bg-[#f2f4f6] px-4 py-2 rounded-full w-auto"><span class="text-sm text-gray-800">Quantafile offers</span></span>
                    <p class="mt-8 text-3xl font-extrabold tracking-tight text-gray-100 lg:text-6xl">
                        WebApps Development
                    </p>
                    <p class="max-w-xl mx-auto mt-4 text-base lg:text-xl text-slate-200">
                        We help sales teams increase their outbound with scalable and high
                        quality customized emails for every prospect.
                    </p>
                </div>
            </div>
            <div class="relative items-center w-full pt-12 pb-12 mx-auto mt-12 max-w-7xl">
                <svg class="absolute -mt-24 blur-3xl" fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_10_20)">
                        <g filter="url(#filter0_f_10_20)">
                            <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#03FFE0"></path>
                            <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
                            <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"></path>
                            <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF"></path>
                        </g>
                    </g>
                    <defs>
                        <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666" id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                            <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className='relative -top-16'>

            <div className='max-w-7xl hidden lg:block mx-auto'> 
            <img src='laptop.png'/>
            </div>
            </div>
            <div className='relative -top-28'>
            <div className='max-w-7xl block lg:hidden mx-auto'> 
            <img src='mobile.png'/>
            </div>
            </div>
            
           
        </div>
    </section>
            
    </div >
  )
}

export default Services
