import { useState } from 'react'
import './App.scss'
import Header from './components/Header';
import Biography from './components/Biography';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className='Main'>
      <Biography />
      <Skills />
      <Projects />
      <Footer/>
      </main>
    </>
  )
}

export default App
