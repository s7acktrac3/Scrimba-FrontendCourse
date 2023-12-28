import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="hero">
        <img src="src/assets/spacex.png" id="main-logo" />
          <h1 id="title">Join the <span class="underline">exploration</span></h1>
          <button class="btn">Apply</button>
      </div>
      <h3>Terms and conditions apply</h3>
    </>
  )
}

export default App
