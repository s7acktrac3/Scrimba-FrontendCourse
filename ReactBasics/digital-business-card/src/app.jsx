import './app.css'
import React from "react"
import Info from './components/Info'
import About from './components/About'
import Interest from './components/Interest'
import Footer from './components/Footer'

export function App() {

  return (
    <div className='main_container'>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  )
}
