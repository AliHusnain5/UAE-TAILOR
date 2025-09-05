import { FaVest } from 'react-icons/fa'
import { FaBeer } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <FaVest />
          <h1>ALM  Tailors</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header