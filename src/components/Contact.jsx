import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGlobe } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch with us for appointments and inquiries</p>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Our Contact Information</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Address</h4>
                <p>
58 b rashidiya , Dubai, UAE</p>
                <p>Shop #45, Pakistani Tailors Building</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+971522277110</p>
                <p> 
+97156 3032 855 (WhatsApp)</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <p>almladiestailor@gmail.com</p>
                {/* <p>appointments@banoqudsia.ae</p> */}
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Saturday - Thursday: 9AM - 10PM<br />Friday: 2PM - 10PM</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaGlobe />
              </div>
              <div>
                <h4>Pakistan Address</h4>
                <p>Main Boulevard, Gulberg, Lahore, Pakistan</p>
                <p>Shop #12, Tailor Plaza</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="form-control" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="form-control" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  className="form-control" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select 
                  id="service" 
                  name="service"
                  className="form-control" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="abaya">Abaya Designing</option>
                  <option value="shalwar">Shalwar Kameez</option>
                  <option value="bridal">Bridal Wear</option>
                  <option value="formal">Formal Wear</option>
                  <option value="embroidery">Embroidery Work</option>
                  <option value="alteration">Alterations</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  className="form-control" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact