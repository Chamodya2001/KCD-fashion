import React, { useState } from 'react';
import './Signup.css';
import lernmore from '../lernmore';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sign-up logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
            <div className="image-section">
                <h1>KCD</h1>
                <div className="image-wrapper">
                    <img src=".\images\v2_12.png" alt="" />
                </div>
            </div>
            <div className="signup-section">
                <h2>Sign Up</h2>
                <p>Do you already have an account? <button className="link-button" onClick={() => { /* handle navigation */ }}>Log in</button></p>
                <div className="social-login">
                    <button className="google-login">
                        <span className='smalllogo'><img src=".\images\google-logo.png" alt="Google Logo" /></span>
                        Continue with Google
                    </button>
                    <button className="facebook-login">
                        <span className='smalllogo'><img src=".\images\facebook-new.png" alt="Facebook Logo" /></span>
                        Continue with Facebook
                    </button>
                </div>
                <p className="or">or</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-mail address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="example@mail.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type={passwordVisible ? 'text' : 'password'} 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <div className="password-toggle">
                            <input 
                                type="checkbox" 
                                id="togglePassword" 
                                checked={passwordVisible} 
                                onChange={() => setPasswordVisible(!passwordVisible)} 
                            />
                            <label htmlFor="togglePassword">Show Password</label>
                        </div>
                    </div>
                    <button type="submit" className="signup-button">Sign Up</button>
                </form>
                <p className="terms">By registering on WebWave, you acknowledge that you are familiar with the <button className="link-button" onClick={() => { <lernmore/> }}>regulations</button> and agree with them.</p>
            </div>
        </div>
    );
};

export default Signup;
