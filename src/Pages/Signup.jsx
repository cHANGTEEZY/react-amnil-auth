import React, { useState } from "react";
import Input from "../Components/Input";
import { validateFormData } from "../utils/validateFormData";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({}); // ✅ Initialize as an empty object

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateFormData(formData, true);

    console.log("Validation Errors:", formErrors);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log("Form Submitted Successfully!", formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setErrors({});
  };

  return (
    <div className="signup-container">
      <div className="form-image">
        <div className="brand-logo">Amnil Technologies</div>
        <div className="image-caption">
          <h2>Capturing Moments,</h2>
          <p>Creating Memories</p>
        </div>
      </div>
      <div className="signup-box">
        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Sushank"
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleFormData}
            error={errors.firstName}
          />
          <Input
            type="text"
            placeholder="Gurung"
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleFormData}
            error={errors.lastName}
          />
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

          <Input
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleFormData}
            error={errors.confirmPassword}
          />
          <button type="submit" className="submit-button">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
