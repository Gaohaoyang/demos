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
        </ul>
      </nav>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <FerrisWheel /> */}
    </div>
  )
}

export default App
