import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ALM Tailor</h3>
            <p>Premium Pakistani ladies tailoring service in UAE, providing exquisite custom garments with perfect fit and exceptional quality.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaPinterest /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-links">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-conditions">Terms & Conditions</a>
          <a href="#return-policy">Return Policy</a>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 ALM Tailors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer