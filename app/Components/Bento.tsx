import React from 'react'
import Ontime from './Ontime.json';
const Bento = () => {
  return (
    <div>
      
<section>
  <div className="mx-auto w-full mb-20 max-w-7xl px-5 md:px-10 ">
    <div className="mx-auto grid justify-items-stretch gap-4 md:grid-cols-2 lg:gap-10">
      
      <a href="#" className="relative flex justify-center h-[300px] items-end">
        <div  className="inline-block  h-full w-full rounded-3xl object-cover" >
        <img src='money.png' className="h-full w-full rounded-3xl object-cover"  alt=""/>

  
        <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-2xl bg-white px-8 py-4">
          <p className="text-sm font-medium sm:text-xl">1</p>
        </div>
        </div>
      </a>
      <a href="#" className="relative flex h-[300px] items-end">
      <div  className="inline-block  h-full w-full rounded-3xl object-cover" >
          <img src='time.png' className="h-full w-full rounded-3xl object-cover"  alt=""/>
          <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-2xl bg-white px-8 py-4">
            <p className="text-sm font-medium sm:text-xl">2</p>
          </div>
          </div>
      </a>
      <a href="#" className="relative flex justify-center h-[300px] items-end">
        <div  className="inline-block h-full w-full rounded-3xl object-cover" >
        <img src='ment.png' className="h-full w-full rounded-3xl object-cover"  alt=""/>

            
        <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-2xl bg-white px-8 py-4">
          <p className="text-sm font-medium sm:text-xl">3</p>
        </div>
        </div>
      </a>
      <a href="#" className="relative flex h-[300px] items-end">
      <div  className="inline-block  h-full w-full rounded-3xl object-cover" >
          <img src='amm.png' className="h-full w-full rounded-3xl object-cover"  alt=""/>
          <div className="absolute bottom-5 left-5 flex flex-col justify-center rounded-2xl bg-white px-8 py-4">
            <p className="text-sm font-medium sm:text-xl">4</p>
          </div>
          </div>
      </a>
    </div>
  </div>
</section>
    </div>
  )
}

export default Bento
