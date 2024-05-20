import { useState } from 'react'
import './App.scss'
import Header from './components/Header';
import Biography from './components/Biography';
import Skills from './components/Skills';
import Projects from './components/Projects';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header className={Header}></Header>
      <main className='Main'>
      <div className={Biography}></div>
      <div className={Skills}></div>
      <div className={Projects}></div>
      </main>
      <footer className="Footer"></footer>
    </>
  )
}

export default App
