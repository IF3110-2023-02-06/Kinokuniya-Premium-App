import React from 'react';

const Register = () => {
  return (
    <div className="login-container">
      <div className="registration form">
        <header>Sign Up</header>
        <form id="registration-form" method="post" autoComplete="on">
          <div className="error-message" id="username-error"></div>
          <input type="text" id="username" name="username" placeholder="Enter a username" />
          <div className="error-message" id="password-error"></div>
          <input type="password" id="password" name="password" placeholder="Create a password" />
          <div className="error-message" id="confirm-password-error"></div>
          <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" />
          <input type="submit" id="register-button" className="sign-in-button" value="Sign up" />
        </form>
        <div className="signup">
          <span className="signup">Already have an account? <a href="/login">Login</a></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
