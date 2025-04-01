import "../css/auth.css";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Components/Input";
import Button from "../Components/Button";
import { validateFormData } from "../utils/validateFormData";
import Header from "../Components/Header";
import AuthContext from "../Context/AuthContext";
import ErrorPage from "./Error";
import BASE_URL from "../constants/API";

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
  const [serverError, setServerError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null);

    const formErrors = validateFormData(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/users?email=${formData.email}&password=${formData.password}`
      );

      if (!response.ok) {
        throw new Error("Server error: Unable to check user details.");
      }

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
      setFormData({ email: "", password: "" });
      setErrors({});
    } catch (error) {
      console.error("Error during sign-in:", error);
      setServerError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (serverError) {
    return <ErrorPage code={500} title="Server Error" message={serverError} />;
  }

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

              <Button disabled={isLoading} className={"submit-button"}>
                {isLoading ? "Logging in..." : "Sign In"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
