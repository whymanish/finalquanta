import Image from 'next/image'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Masonary from './Components/FAQ'
import FAQ from './Components/FAQ'
import Team from './Components/Team'
import Bento from './Components/Bento'
import Services from './Components/Services'
import Page404 from './Components/Page404'
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-t   from-[#030303] to-[#363636] '>
    <Hero/>
   
    <Services/>
    <Bento/>
  
   
    <Team/>
    <FAQ/>
      
    <Footer/>
    </div>
    </>
  )
}
