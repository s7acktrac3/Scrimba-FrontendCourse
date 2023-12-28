import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <img src="src/assets/propic.jpeg" alt="AI profile picture" />

      <h1>Hi, my name is s7acktrac3</h1>
      <h2>Fun facts about me: </h2>
      <ul>
        <li> Avid reader of cyber crime and threat intelligence</li>
        <li> Became a first time dad at 36</li>
        <li> Petrified of needles</li>
      </ul>

      <p>Please connect with me on <a href="linkedin.com" target='_blank'>LinkedIn here.</a></p>
      <input type="text" placeholder='Enter email...' />
      <br />
      <button> Join newsletter</button>
    </div>
  )
}

export default App
