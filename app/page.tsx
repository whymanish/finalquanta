import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Team from './Components/Team'
import Services from './Components/Services'
import Bento from './Components/Bento'
import Terms from './Components/Terms'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import PastProjects from './Components/PastProjects'
import Pattern from './Components/Pattern'
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-t   from-[#030303] to-[#363636] '>
      <Pattern/>
    <Hero/>
   
    <Services/>
    <PastProjects/>
  
    <Testimonials/>
    <Team/>
    <FAQ/>
    <Contact/>
    
    <Footer/>
    </div>
    </>
  )
}
