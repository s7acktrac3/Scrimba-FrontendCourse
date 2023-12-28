import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="main">
      <img class="logo-img" src="src/assets/google.png" />
      <input class="search-input" type="text" />
      <div class="btn-wrapper">
        <button class="btn">Google Search</button>
        <button class="btn">I'm Feeling Lucky</button>
      </div>
    </div>
  )
}

export default App
