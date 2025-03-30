import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Input from "../Components/Input";
import { validateFormData } from "../utils/validateFormData";
import Header from "../Components/Header";
import AuthContext from "../Context/AuthContext";

const Signin = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateFormData(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/users?email=${formData.email}&password=${formData.password}`
      );

      const users = await response.json();

      if (users.length === 0) {
        setErrors({
          email: "Wrong email or password",
          password: "Wrong email or password",
        });
        return;
      }

      localStorage.setItem("userAuthToken", users[0].id);
      setIsAuthenticated(true);
      setFormData({
        email: "",
        password: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error during sign-in:", error);
      setErrors({ email: "Something went wrong. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
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

              <button
                type="submit"
                className="submit-button"
                disabled={isLoading}
              >
                {isLoading ? "Logging in...." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
