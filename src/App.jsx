
import './App.css'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Exprience from './Sections/Exprience'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'
import Testimonials from './Sections/Testimonials'

function App() {
 

  return <>
  <div className='min-h-screen overflow-hidden'>
  <Navbar/>
  <main>
  <Hero/>
  <About/>
  <Projects/>
  <Exprience/>
  <Testimonials/>
  <Contact/>
  </main>
  <Footer/>
  </div>
  </>
}

export default App
