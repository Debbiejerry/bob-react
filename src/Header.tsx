import './App.css'
import reactLogo from './assets/react.svg'

export default function Header() {
  return (
    <>
        <header className="App-header">
            <img src={reactLogo} alt="React Logo" />
            <h2>React Fun-facts</h2>

            <ul className="Menu">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
      </header>
    </>
    
  )
}