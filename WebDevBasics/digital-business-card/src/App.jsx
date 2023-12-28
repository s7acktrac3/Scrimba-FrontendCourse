import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div class="card">
      <img class="avatar" src="src/assets/avatar.jpeg" />
        <div >
          <h3>s7acktrac3</h3>
          <p>Security Engineer</p>
          <h4>Philly</h4>
        </div>
    </div>
  )
}

export default App
