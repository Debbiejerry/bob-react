import './App.css'
import reactLogo from './assets/react.svg'

export default function Header() {
  return (
    <>
        <header className="app-header">
            <img src={reactLogo} alt="React Logo" />
            <h2>React Fun-facts</h2>

            <ul className="menu">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
      </header>
    </>
    
  )
}