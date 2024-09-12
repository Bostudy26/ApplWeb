import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'
import Model from './sections/Model'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
    </main>
  )
}

export default App