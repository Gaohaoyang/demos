import React from 'react'
// import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to="/FerrisWheel">FerrisWheel</Link>
          </li>
          <li>
            <Link to="/LoadingDots">LoadingDots</Link>
          </li>
          <li>
            <Link to="/MultiRedBags">MultiRedBags</Link>
          </li>
          <li>
            <Link to="/CompositeImage">CompositeImage</Link>
          </li>
          <li>
            <Link to="/VerticalSlide">VerticalSlide</Link>
          </li>
          <li>
            <Link to="/CoinsFly">CoinsFly</Link>
          </li>
          <li>
            <Link to="/StickyContainer">StickyContainer</Link>
          </li>
          <li>
            <Link to="/TopNotification">TopNotification</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
