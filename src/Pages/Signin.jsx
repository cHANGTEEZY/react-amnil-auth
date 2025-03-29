import React, { useState } from "react";
import Input from "../Components/Input";
import { validateFormData } from "../utils/validateFormData";
import Header from "../Components/Header";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateFormData(formData);

    console.log("Validation Errors:", formErrors);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Signed in successfully!", formData);

    setFormData({
      email: "",
      password: "",
    });

    setErrors({});
  };

  return (
    <>
    <Header/>
    <section className="auth-section">
      <div className="Signin-container">
        <div className="form-image">
          <div className="brand-logo">Amnil Technologies</div>
          <div className="image-caption">
            <h2>Capturing Moments,</h2>
            <p>Creating Memories</p>
          </div>
        </div>
        <div className="Signin-box">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="example@email.com"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleFormData}
              error={errors.email}
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleFormData}
              error={errors.password}
            />

            <button type="submit" className="submit-button">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Signin;
