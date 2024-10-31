import './App.css'
import {Hero, Navbar, About, Portfolio, Contact} from './components'

function App() {

  return (
    <div className='page-container'>
      <div id='header'>
        <Navbar/>
        <Hero/>
      </div>
      <div id = 'about'>
        <About/>
      </div>
      <div id="portfolio">
        <Portfolio/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
  )
}

export default App
