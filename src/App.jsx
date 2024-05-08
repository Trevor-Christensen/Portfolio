import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <main className='Main'>
      <Div class="About"></Div>
      <Div class="Projects"></Div>
      <Div class="Contact"></Div>
      </main>
      <Footer class="Footer"></Footer>
    </>
  )
}

export default App
