import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

   const handleSubmit = (e) => {
  e.preventDefault();

  // Check for empty fields
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    alert("Please fill in all the fields before submitting.");
    return;
  }

  const serviceID = 'service_ssofcas';
  const templateID = 'template_0udvteb'; // Use your actual EmailJS template ID
  const publicKey = 'P4EkXHr1dofH3zgDS'; // Use your EmailJS public key

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
    time: new Date().toLocaleString()
  };

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert("Oops! Something went wrong. Try again later.");
    });
};



  const animationStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    body {
      font-family: 'Poppins', sans-serif;
    }

    .fade-in-up {
      opacity: 0;
      transform: translateY(50px);
      animation: fadeInUp 1s ease-out forwards;
    }

    .fade-in-left {
      opacity: 0;
      transform: translateX(-50px);
      animation: fadeInLeft 1s ease-out forwards;
    }

    .fade-in-right {
      opacity: 0;
      transform: translateX(50px);
      animation: fadeInRight 1s ease-out forwards;
    }

    .fade-in-down {
      opacity: 0;
      transform: translateY(-30px);
      animation: fadeInDown 0.8s ease-out forwards;
    }

    .stagger-1 { animation-delay: 0.2s; }
    .stagger-2 { animation-delay: 0.4s; }
    .stagger-3 { animation-delay: 0.6s; }
    .stagger-4 { animation-delay: 0.8s; }
    .stagger-5 { animation-delay: 1s; }
    .stagger-6 { animation-delay: 1.2s; }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInLeft {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInDown {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero-section {
      background: linear-gradient(135deg, #1a1a1a 0%, #2d1b1b 50%, #1a1a1a 100%);
      position: relative;
      overflow: hidden;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="%23dc3545" opacity="0.1"/><circle cx="80" cy="40" r="1" fill="%23dc3545" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="%23dc3545" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      animation: float 20s infinite linear;
    }

    @keyframes float {
      0% { transform: translateX(0) translateY(0); }
      25% { transform: translateX(-10px) translateY(-5px); }
      50% { transform: translateX(0) translateY(-10px); }
      75% { transform: translateX(5px) translateY(-5px); }
      100% { transform: translateX(0) translateY(0); }
    }

    .nav-link {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
    }

    .nav-link:hover {
      transform: translateY(-3px);
      text-shadow: 0 0 20px rgba(220, 53, 69, 0.8);
    }

    .nav-link::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, #dc3545, #ff6b6b);
      transition: all 0.4s ease;
      transform: translateX(-50%);
    }

    .nav-link:hover::before {
      width: 120%;
    }

    .form-group {
      position: relative;
      margin-bottom: 2rem;
    }

    .form-label {
      position: absolute;
      left: 15px;
      top: 15px;
      color: #999;
      transition: all 0.3s ease;
      pointer-events: none;
      font-weight: 500;
    }

    .form-control:focus + .form-label,
    .form-control:not(:placeholder-shown) + .form-label {
      top: -10px;
      left: 10px;
      font-size: 12px;
      color: #dc3545;
      background: #2a2a2a;
      padding: 0 8px;
    }

    .form-control {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 2px solid #444;
      background: rgba(42, 42, 42, 0.8);
      backdrop-filter: blur(10px);
      padding: 15px;
    }

    .form-control:focus {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(220, 53, 69, 0.3);
      border-color: #dc3545;
      background: rgba(42, 42, 42, 0.95);
    }

    .btn-danger {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
      background: linear-gradient(45deg, #dc3545, #ff4757);
      border: none;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .btn-danger::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.6s ease;
    }

    .btn-danger:hover::before {
      left: 100%;
    }

    .btn-danger:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 15px 35px rgba(220, 53, 69, 0.5);
    }

    .contact-info-item {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      padding: 20px;
      border-radius: 15px;
      background: rgba(42, 42, 42, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(220, 53, 69, 0.2);
      margin-bottom: 15px;
    }

    .contact-info-item:hover {
      background: rgba(220, 53, 69, 0.1);
      transform: translateX(15px) scale(1.02);
      box-shadow: 0 10px 30px rgba(220, 53, 69, 0.2);
    }

    .contact-form {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      background: rgba(42, 42, 42, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(220, 53, 69, 0.3);
    }

    .contact-form:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0,0,0,0.4);
    }

    .flickfix-logo {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: inline-block;
    }

    .flickfix-logo:hover {
      transform: scale(1.1);
      text-shadow: 0 0 30px rgba(220, 53, 69, 0.8);
    }

    .icon-hover {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .icon-hover:hover {
      transform: scale(1.3) rotate(10deg);
      color: #dc3545 !important;
      filter: drop-shadow(0 0 10px rgba(220, 53, 69, 0.5));
    }

    .pulse {
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }

    .floating {
      animation: floating 3s ease-in-out infinite;
    }

    @keyframes floating {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    .glow-text {
      text-shadow: 0 0 20px rgba(220, 53, 69, 0.5);
    }

    .feature-card {
      background: rgba(42, 42, 42, 0.6);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(220, 53, 69, 0.2);
      border-radius: 20px;
      padding: 30px;
      margin-bottom: 20px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .feature-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(220, 53, 69, 0.2);
      border-color: rgba(220, 53, 69, 0.5);
    }

    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: #dc3545;
      border-radius: 50%;
      animation: particle-float 8s infinite linear;
    }

    .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
    .particle:nth-child(2) { left: 20%; animation-delay: 1s; }
    .particle:nth-child(3) { left: 30%; animation-delay: 2s; }
    .particle:nth-child(4) { left: 40%; animation-delay: 3s; }
    .particle:nth-child(5) { left: 50%; animation-delay: 4s; }

    @keyframes particle-float {
      0% { transform: translateY(100vh) scale(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100px) scale(1); opacity: 0; }
    }

    .footer-fade {
      opacity: 0;
      animation: fadeIn 1s ease-out 2s forwards;
    }

    @keyframes fadeIn {
      to { opacity: 1; }
    }

    .typing-animation {
      overflow: hidden;
      border-right: 3px solid #dc3545;
      white-space: nowrap;
      animation: typing 3s steps(40) 1s forwards, blink 1s infinite;
      width: 0;
    }

    @keyframes typing {
      to { width: 100%; }
    }

    @keyframes blink {
      50% { border-color: transparent; }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div className="hero-section" style={{ minHeight: "100vh", width: "100vw", overflowX: "hidden", position: "relative" }}>
        {/* Floating Particles */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>

        {/* Navbar */}
        <div style={{ backgroundColor: "rgba(18, 18, 18, 0.9)", padding: "0.5rem 0", backdropFilter: "blur(10px)" }} className={isLoaded ? "fade-in-down" : ""}>
          <div className="container-fluid d-flex justify-content-between align-items-center px-3">
            <div className="d-flex align-items-center gap-3">
              <i className="bi bi-person-circle text-white fs-5 icon-hover"></i>
              <a href="/login" className="text-white text-decoration-none fw-bold nav-link">LOG IN</a>
              <span className="text-white fw-bold">|</span>
              <a href="/signup" className="text-white text-decoration-none fw-bold nav-link">SIGN UP</a>
            </div>
            <div>
              <a href="/" className="text-danger fw-bold fs-3 text-decoration-none flickfix-logo">FLICKFIX</a>
            </div>
            <div className="d-flex align-items-center gap-4">
              <a href="/subscribe" className="text-white text-decoration-none fw-bold nav-link">
                <i className="bi bi-collection-play-fill me-1 icon-hover"></i> SUBSCRIBE
              </a>
              <i className="bi bi-search text-white fs-5 icon-hover"></i>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-4 py-2 border-top border-secondary mt-2">
            <a href="/" className="text-white text-decoration-none fw-bold nav-link">HOME</a>
            <a href="/contact" className="text-danger text-decoration-none fw-bold nav-link">CONTACT</a>
            <a href="/about" className="text-white text-decoration-none fw-bold nav-link">ABOUT-US</a>
          </div>
        </div>

        {/* Hero Section */}
        <div className="container-fluid px-5 py-5">
          <div className="text-center mb-5">
            <h1 className={`text-white fw-bold display-2 mb-3 glow-text ${isLoaded ? "typing-animation" : ""}`}>
              GET IN TOUCH WITH US
            </h1>
            <p className={`text-light lead fs-4 ${isLoaded ? "fade-in-up stagger-1" : ""}`}>
              Experience premium streaming support like never before
            </p>
          </div>

          <div className="row">
            {/* Contact Info Section */}
            <div className="col-lg-6 mb-5">
              <div className={`${isLoaded ? "fade-in-left stagger-1" : ""}`}>
                <h2 className="text-white fw-bold mb-4 display-5">Why Choose FLICKFIX?</h2>
                
                <div className={`feature-card ${isLoaded ? "fade-in-left stagger-2" : ""}`}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-lightning-charge-fill text-danger fs-3 me-3 floating"></i>
                    <h4 className="text-white fw-bold mb-0">Lightning Fast Support</h4>
                  </div>
                  <p className="text-light">Our dedicated team responds within minutes, not hours. Experience support that matches our streaming speed.</p>
                </div>

                <div className={`feature-card ${isLoaded ? "fade-in-left stagger-3" : ""}`}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-shield-check text-danger fs-3 me-3 floating"></i>
                    <h4 className="text-white fw-bold mb-0">Premium Security</h4>
                  </div>
                  <p className="text-light">Your data is protected with military-grade encryption. Stream with confidence knowing you're secure.</p>
                </div>

                <div className={`feature-card ${isLoaded ? "fade-in-left stagger-4" : ""}`}>
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-globe text-danger fs-3 me-3 floating"></i>
                    <h4 className="text-white fw-bold mb-0">Global Streaming</h4>
                  </div>
                  <p className="text-light">Access your favorite content from anywhere in the world. No geo-restrictions, just pure entertainment.</p>
                </div>
              </div>

              <div className={`mt-5 ${isLoaded ? "fade-in-left stagger-5" : ""}`}>
                <h3 className="text-white fw-bold mb-4">Contact Information</h3>
                
                <div className="contact-info-item">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-envelope-fill text-danger fs-4 me-3 icon-hover"></i>
                    <div>
                      <h6 className="text-white fw-bold mb-1">Email Support</h6>
                      <p className="text-light mb-0">support@flickfix.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-telephone-fill text-danger fs-4 me-3 icon-hover"></i>
                    <div>
                      <h6 className="text-white fw-bold mb-1">Phone Support</h6>
                      <p className="text-light mb-0">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-clock-fill text-danger fs-4 me-3 icon-hover pulse"></i>
                    <div>
                      <h6 className="text-white fw-bold mb-1">Availability</h6>
                      <p className="text-light mb-0">24/7 Online Support</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-chat-dots-fill text-danger fs-4 me-3 icon-hover"></i>
                    <div>
                      <h6 className="text-white fw-bold mb-1">Live Chat</h6>
                      <p className="text-light mb-0">Instant messaging support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-lg-6">
              <div className={`contact-form p-5 ${isLoaded ? "fade-in-right stagger-2" : ""}`} style={{ borderRadius: "20px" }}>
                <h3 className="text-white fw-bold mb-4 display-6">Send us a Message</h3>
                <p className="text-light mb-4">Have a question or need assistance? We're here to help you get the most out of your FLICKFIX experience.</p>
                
                {isSubmitted ? (
                  <div className="alert alert-success fade-in-up" style={{ borderRadius: "15px", background: "rgba(40, 167, 69, 0.2)", border: "1px solid #28a745" }}>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill me-3 fs-4"></i>
                      <div>
                        <h5 className="mb-1">Message Sent Successfully!</h5>
                        <p className="mb-0">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control bg-transparent text-white" 
                        placeholder=" "
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        required 
                      />
                      <label className="form-label">
                        <i className="bi bi-person-fill me-2"></i>Full Name
                      </label>
                    </div>

                    <div className="form-group">
                      <input 
                        type="email" 
                        className="form-control bg-transparent text-white" 
                        placeholder=" "
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        required 
                      />
                      <label className="form-label">
                        <i className="bi bi-envelope-fill me-2"></i>Email Address
                      </label>
                    </div>

                    <div className="form-group">
                      <input 
                        type="text" 
                        className="form-control bg-transparent text-white" 
                        placeholder=" "
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField('')}
                        required 
                      />
                      <label className="form-label">
                        <i className="bi bi-tag-fill me-2"></i>Subject
                      </label>
                    </div>

                    <div className="form-group">
                      <textarea 
                        className="form-control bg-transparent text-white" 
                        rows="5" 
                        placeholder=" "
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        required
                      ></textarea>
                      <label className="form-label">
                        <i className="bi bi-chat-text-fill me-2"></i>Your Message
                      </label>
                    </div>

                    <button onClick={handleSubmit} className="btn btn-danger px-5 py-3 w-100 fs-5">
                      <i className="bi bi-send-fill me-2"></i>
                      Send Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer style={{ backgroundColor: "rgba(18, 18, 18, 0.9)", backdropFilter: "blur(10px)" }} className="py-5 mt-5 footer-fade">
          <div className="container text-center">
            <div className="text-danger fw-bold fs-2 mb-3 flickfix-logo">FLICKFIX</div>
            <p className="text-light mb-3">Experience entertainment like never before</p>
            <div className="d-flex justify-content-center gap-4 mb-3">
              <i className="bi bi-facebook text-white fs-4 icon-hover"></i>
              <i className="bi bi-twitter text-white fs-4 icon-hover"></i>
              <i className="bi bi-instagram text-white fs-4 icon-hover"></i>
              <i className="bi bi-youtube text-white fs-4 icon-hover"></i>
            </div>
            <p className="text-light small mb-0">© 2024 FLICKFIX. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;