import React from "react";

const Register = () => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chataroo</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} id="file" type="file" />
          <label htmlFor="file">
            <img src={""} alt="" />
            <span>Add an avtar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already have an account? Login!</p>
      </div>
    </div>
  );
};

export default Register;
