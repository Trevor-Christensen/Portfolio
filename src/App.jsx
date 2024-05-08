import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header"></header>
      <main className='Main'>
      <div className='Background_color_div'>
      <div className="Biography"></div>
      <div className="Projects"></div>
      <div className="Contact_Me"></div>
      </div>
      </main>
      <footer className="Footer"></footer>
    </>
  )
}

export default App
