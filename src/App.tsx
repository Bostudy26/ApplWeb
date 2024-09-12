import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'
import Model from './sections/Model'
import Features from "./sections/Features"
import HowItWorks from "./sections/HowItWorks"

import Footer from "./sections/Footer"



const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default App