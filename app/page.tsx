import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Team from './Components/Team'
import Services from './Components/Services'
import Bento from './Components/Bento'
import Terms from './Components/Terms'
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
