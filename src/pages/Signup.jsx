import React, { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff, Film, Mail, Lock, User, Calendar } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updated = { ...formData, [name]: type === 'checkbox' ? checked : value };
    setFormData(updated);

    if (name === 'password') {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;
    return strength;
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 2) return '#f87171';
    if (passwordStrength <= 3) return '#facc15';
    return '#4ade80';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', {
        fullName: formData.fullName,
        email: formData.email,
        dateOfBirth: formData.dateOfBirth,
        password: formData.password,
      });

      alert(response.data.message || 'Signup successful');
      setFormData({
        fullName: '',
        email: '',
        dateOfBirth: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false,
      });
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message || 'An error occurred while signing up.'
      );
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="page">
      {/* Full-width expanded background */}
      <div className="background-expanded"></div>
      
      {/* Animated background elements */}
      <div className="blob-wrapper">
        <div className="blob-red"></div>
        <div className="blob-blue"></div>
        <div className="blob-purple"></div>
        <div className="blob-orange"></div>
      </div>

      {/* Centered form container */}
      <div className="center-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="header">
            <div className="logo-wrapper">
              <Film className="logo-icon" size={32} />
              <h2 className="logo-text">FlickFix</h2>
            </div>
            <p className="subtext">Create your account</p>
          </div>

          {[
            { icon: <User size={18} />, name: 'fullName', type: 'text', placeholder: 'Full Name' },
            { icon: <Mail size={18} />, name: 'email', type: 'email', placeholder: 'Email' },
            { icon: <Calendar size={18} />, name: 'dateOfBirth', type: 'date', placeholder: 'Date of Birth' },
          ].map((field) => (
            <div key={field.name} className="input-group">
              <span className="input-icon">{field.icon}</span>
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleInputChange}
                required
                className="input"
              />
            </div>
          ))}

          <div className="input-group">
            <span className="input-icon">
              <Lock size={18} />
            </span>
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="input"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-button">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="strength-bar">
            <div 
              className="strength-fill"
              style={{ 
                background: getStrengthColor(), 
                width: `${(passwordStrength / 5) * 100}%` 
              }} 
            />
          </div>

          <div className="input-group">
            <span className="input-icon">
              <Lock size={18} />
            </span>
            <input
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              className="input"
            />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="eye-button">
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {formData.confirmPassword && (
            <p className={`password-match ${formData.password === formData.confirmPassword ? 'match' : 'no-match'}`}>
              {formData.password === formData.confirmPassword ? '✅ Passwords match' : '❌ Passwords do not match'}
            </p>
          )}

          <label className="checkbox-label">
            <input 
              type="checkbox" 
              name="agreeToTerms" 
              checked={formData.agreeToTerms} 
              onChange={handleInputChange} 
              required 
              className="checkbox"
            />
            <span className="checkbox-text">
              I agree to the <a href="#" className="link">Terms</a> and <a href="#" className="link">Privacy</a>
            </span>
          </label>

          <button
            type="submit"
            disabled={isLoading || formData.password !== formData.confirmPassword}
            className={`submit-button ${isLoading || formData.password !== formData.confirmPassword ? 'disabled' : ''}`}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <p className="footer">
            Already have an account?{' '}
            <a href="/login" className="link-bold">Sign in</a>
          </p>
        </form>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.1); 
          }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(5%, 5%); }
          50% { transform: translate(10%, 0); }
          75% { transform: translate(5%, -5%); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
          50% { box-shadow: 0 0 20px rgba(220, 38, 38, 0.8); }
        }

        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .page {
          height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
        }

        .background-expanded {
          position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
  z-index: 0;
        }

        .blob-wrapper {
          position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
        }

        .blob-red {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(220,38,38,0.15) 0%, rgba(220,38,38,0.05) 70%);
          border-radius: 50%;
          top: -20%;
          left: -10%;
          filter: blur(80px);
          animation: pulse 12s infinite ease-in-out, float 18s infinite ease-in-out;
        }

        .blob-blue {
          position: absolute;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 70%);
          border-radius: 50%;
          bottom: -20%;
          right: -10%;
          filter: blur(80px);
          animation: pulse 14s infinite ease-in-out, float 20s infinite ease-in-out reverse;
        }

        .blob-purple {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(147,51,234,0.03) 70%);
          border-radius: 50%;
          top: 30%;
          left: 60%;
          filter: blur(100px);
          animation: pulse 16s infinite ease-in-out, float 22s infinite ease-in-out;
        }

        .blob-orange {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(234,88,12,0.1) 0%, rgba(234,88,12,0.03) 70%);
          border-radius: 50%;
          top: 60%;
          left: 20%;
          filter: blur(90px);
          animation: pulse 18s infinite ease-in-out, float 24s infinite ease-in-out;
        }

        .center-container {
           width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 2;
  position: relative;

        }

        .form {
          position: relative;
          background: rgba(15, 15, 35, 0.95);
          backdrop-filter: blur(20px);
          padding: 2.5rem;
          border-radius: 1.25rem;
          width: 100%;
          max-width: 420px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          animation: slideIn 0.8s ease-out;
          z-index: 10;
        }

        .header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .logo-icon {
          color: #dc2626;
          animation: rotate 8s linear infinite;
          filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.5));
        }

        .logo-text {
          color: #dc2626;
          font-size: 2rem;
          font-weight: 800;
          margin: 0;
          text-shadow: 0 0 10px rgba(220, 38, 38, 0.3);
        }

        .subtext {
          color: #9ca3af;
          font-size: 1rem;
          margin: 0;
          font-weight: 500;
        }

        .input-group {
          display: flex;
          align-items: center;
          background: rgba(31, 41, 55, 0.8);
          border: 2px solid rgba(55, 65, 81, 0.8);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          margin-bottom: 1.25rem;
          gap: 0.75rem;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .input-group:hover {
          border-color: rgba(220, 38, 38, 0.5);
          background: rgba(31, 41, 55, 0.9);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.15);
        }

        .input-group:focus-within {
          border-color: #dc2626;
          background: rgba(31, 41, 55, 1);
          transform: translateY(-2px);
          animation: glow 2s ease-in-out infinite;
        }

        .input-icon {
          color: #9ca3af;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .input-group:focus-within .input-icon {
          color: #dc2626;
          transform: scale(1.1);
        }

        .input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          outline: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .input::placeholder {
          color: #6b7280;
          transition: all 0.3s ease;
        }

        .input:focus::placeholder {
          color: #9ca3af;
          transform: translateX(5px);
        }

        .eye-button {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          padding: 0.25rem;
          border-radius: 0.375rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .eye-button:hover {
          color: #dc2626;
          background: rgba(220, 38, 38, 0.1);
          transform: scale(1.1);
        }

        .strength-bar {
          height: 8px;
          background: rgba(55, 65, 81, 0.8);
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .strength-fill {
          height: 100%;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 8px;
        }

        .password-match {
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1rem;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .password-match.match {
          color: #4ade80;
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.3);
        }

        .password-match.no-match {
          color: #f87171;
          background: rgba(248, 113, 113, 0.1);
          border: 1px solid rgba(248, 113, 113, 0.3);
        }

        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          color: #d1d5db;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .checkbox-label:hover {
          color: #f3f4f6;
        }

        .checkbox {
          width: 1.25rem;
          height: 1.25rem;
          margin: 0;
          accent-color: #dc2626;
          cursor: pointer;
        }

        .checkbox-text {
          line-height: 1.5;
        }

        .link {
          color: #dc2626;
          text-decoration: underline;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .link:hover {
          color: #ef4444;
          text-shadow: 0 0 8px rgba(220, 38, 38, 0.5);
        }

        .submit-button {
          width: 100%;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 1rem;
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          margin-bottom: 1.5rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .submit-button:hover {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.4);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .submit-button.disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.15);
        }

        .submit-button.disabled:hover {
          transform: none;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        }

        .footer {
          text-align: center;
          font-size: 0.875rem;
          color: #9ca3af;
          margin: 0;
        }

        .link-bold {
          color: #dc2626;
          font-weight: 700;
          text-decoration: underline;
          transition: all 0.3s ease;
        }

        .link-bold:hover {
          color: #ef4444;
          text-shadow: 0 0 8px rgba(220, 38, 38, 0.5);
        }

        @media (max-width: 480px) {
          .form {
            padding: 2rem 1.5rem;
          }
          
          .logo-text {
            font-size: 1.75rem;
          }

          .blob-red,
          .blob-blue,
          .blob-purple,
          .blob-orange {
            width: 400px;
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default Signup;