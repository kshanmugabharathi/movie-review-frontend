import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email: formData.email,
      password: formData.password,
    });

    alert(response.data.message || 'Login successful');
    // Optionally store token or redirect
    navigate('/');
    console.log('Login success:', response.data);
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || 'Login failed. Please try again.');
  }
};


  const loginStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
    @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      overflow-x: hidden;
    }

    .auth-container {
      min-height: 100vh;
      width: 100vw;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d1b1b 100%);
    }

    .auth-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 1;
    }

    .floating-elements {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .element {
      position: absolute;
      background: rgba(220, 53, 69, 0.1);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .element-1 {
      width: 80px;
      height: 80px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    .element-2 {
      width: 120px;
      height: 120px;
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }

    .element-3 {
      width: 60px;
      height: 60px;
      bottom: 30%;
      left: 20%;
      animation-delay: 4s;
    }

    .element-4 {
      width: 100px;
      height: 100px;
      top: 10%;
      right: 30%;
      animation-delay: 1s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
      50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
    }

    .auth-content {
      position: relative;
      z-index: 2;
      display: flex;
      width: 100%;
      max-width: none;
      min-height: 100vh;
      align-items: stretch;
    }

    .auth-card {
      flex: 1;
      max-width: none;
      width: 50%;
      padding: 60px 80px;
      background: rgba(26, 26, 26, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(220, 53, 69, 0.2);
      border-radius: 0;
      margin: 0;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      border-left: 4px solid #dc3545;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .brand-section {
      flex: 1;
      width: 50%;
      padding: 60px 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .brand-content {
      max-width: 500px;
      width: 100%;
    }

    .brand-logo {
      font-size: 4rem;
      font-weight: 700;
      color: #dc3545;
      margin-bottom: 1rem;
      text-shadow: 0 0 30px rgba(220, 53, 69, 0.3);
      letter-spacing: 2px;
    }

    .brand-tagline {
      font-size: 2rem;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .brand-description {
      font-size: 1.1rem;
      color: #cccccc;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .feature-list {
      space-y: 1rem;
    }

    .feature-item {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      color: #ffffff;
      font-weight: 500;
    }

    .feature-item i {
      color: #dc3545;
      margin-right: 1rem;
      font-size: 1.2rem;
    }

    .auth-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .auth-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 0.5rem;
      letter-spacing: -0.5px;
    }

    .auth-subtitle {
      font-size: 1.1rem;
      color: #cccccc;
      font-weight: 400;
    }

    .auth-form {
      margin-bottom: 2rem;
      max-width: 400px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .form-group {
      margin-bottom: 2rem;
    }

    .input-wrapper {
      position: relative;
    }

    .auth-input {
      width: 100%;
      padding: 1.2rem 1rem 1.2rem 3rem;
      background: rgba(42, 42, 42, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: #ffffff;
      font-size: 1rem;
      font-weight: 400;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .auth-input:focus {
      outline: none;
      border-color: #dc3545;
      background: rgba(42, 42, 42, 0.95);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(220, 53, 69, 0.2);
    }

    .auth-input:focus + .auth-label,
    .auth-input:not(:placeholder-shown) + .auth-label {
      top: -12px;
      left: 12px;
      font-size: 0.85rem;
      color: #dc3545;
      background: #1a1a1a;
      padding: 0 8px;
    }

    .auth-label {
      position: absolute;
      top: 1.2rem;
      left: 1rem;
      color: #999999;
      font-weight: 500;
      pointer-events: none;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .auth-label i {
      font-size: 1rem;
    }

    .password-toggle {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: #999999;
      cursor: pointer;
      font-size: 1.2rem;
      transition: color 0.3s ease;
    }

    .password-toggle:hover {
      color: #dc3545;
    }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .checkbox-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #cccccc;
      font-size: 0.95rem;
    }

    .checkbox-wrapper input[type="checkbox"] {
      display: none;
    }

    .checkmark {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      margin-right: 0.75rem;
      position: relative;
      transition: all 0.3s ease;
    }

    .checkbox-wrapper input[type="checkbox"]:checked + .checkmark {
      background: #dc3545;
      border-color: #dc3545;
    }

    .checkbox-wrapper input[type="checkbox"]:checked + .checkmark::after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
      font-weight: bold;
    }

    .forgot-link {
      color: #dc3545;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.3s ease;
    }

    .forgot-link:hover {
      color: #ff4757;
      text-decoration: underline;
    }

    .auth-button {
      width: 100%;
      padding: 1.2rem 2rem;
      background: linear-gradient(135deg, #dc3545, #ff4757);
      border: none;
      border-radius: 12px;
      color: #ffffff;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 1rem;
      position: relative;
      overflow: hidden;
    }

    .auth-button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.6s ease;
    }

    .auth-button:hover::before {
      left: 100%;
    }

    .auth-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(220, 53, 69, 0.4);
    }

    .auth-footer {
      text-align: center;
      color: #cccccc;
      max-width: 400px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }

    .switch-link {
      color: #dc3545;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .switch-link:hover {
      color: #ff4757;
      text-decoration: underline;
    }

    .slide-in-left {
      animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
    }

    .fade-in-right {
      animation: fadeInRight 1s ease-out forwards;
    }

    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @media (max-width: 1200px) {
      .auth-card, .brand-section {
        padding: 40px 60px;
      }
    }

    @media (max-width: 968px) {
      .auth-content {
        flex-direction: column;
        align-items: stretch;
      }

      .brand-section {
        order: 2;
        width: 100%;
        padding: 40px 20px;
        text-align: center;
        min-height: 50vh;
      }

      .auth-card {
        order: 1;
        width: 100%;
        padding: 40px 30px;
        min-height: 50vh;
        border-radius: 0;
      }

      .brand-logo {
        font-size: 3rem;
      }

      .brand-tagline {
        font-size: 1.5rem;
      }

      .auth-title {
        font-size: 2rem;
      }
    }

    @media (max-width: 480px) {
      .auth-card {
        padding: 30px 20px;
      }

      .brand-section {
        padding: 30px 20px;
      }

      .auth-title {
        font-size: 1.8rem;
      }

      .brand-logo {
        font-size: 2.5rem;
      }

      .brand-tagline {
        font-size: 1.3rem;
      }

      .form-options {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      .auth-input {
        padding: 1rem 0.8rem 1rem 2.5rem;
      }

      .auth-label {
        left: 0.8rem;
      }

      .password-toggle {
        right: 0.8rem;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: loginStyles }} />
      <div className="auth-container">
        <div className="auth-background">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
            <div className="element element-4"></div>
          </div>
        </div>

        <div className="auth-content">
          <div className={`brand-section ${isLoaded ? 'fade-in-right' : ''}`}>
            <div className="brand-content">
              <div className="brand-logo">FLICKFIX</div>
              <h1 className="brand-tagline">Welcome Back</h1>
              <p className="brand-description">
                Experience the next generation of secure authentication with advanced 
                features and seamless integration.
              </p>
              <div className="feature-list">
                <div className="feature-item">
                  <i className="bi bi-shield-check"></i>
                  Advanced Security
                </div>
                <div className="feature-item">
                  <i className="bi bi-lightning"></i>
                  Lightning Fast
                </div>
                <div className="feature-item">
                  <i className="bi bi-globe"></i>
                  Global Access
                </div>
                <div className="feature-item">
                  <i className="bi bi-phone"></i>
                  Multi-Device Sync
                </div>
              </div>
            </div>
          </div>

          <div className={`auth-card ${isLoaded ? 'slide-in-left' : ''}`}>
            <div className="auth-header">
              <h2 className="auth-title">Sign In</h2>
              <p className="auth-subtitle">Access your account to continue</p>
            </div>

            <form className="auth-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    className="auth-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label className="auth-label">
                    <i className="bi bi-envelope"></i>
                    Email Address
                  </label>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    className="auth-input"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label className="auth-label">
                    <i className="bi bi-lock"></i>
                    Password
                  </label>
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Remember me
                </label>
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="auth-button">
                <i className="bi bi-box-arrow-in-right"></i>
                    Sign In
              </button>
            </form>

            <div className="auth-footer">
              <p>Don't have an account? <a href="/signup" className="switch-link">Create one</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;