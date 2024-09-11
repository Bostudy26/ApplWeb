import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Highlights from './sections/Highlights'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar/>
      <Hero/>
      <Highlights/>
    </main>
  )
}

export default App