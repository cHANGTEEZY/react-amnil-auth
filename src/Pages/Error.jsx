import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import { FileWarning } from "lucide-react";

const ErrorPage = ({
  code = 404,
  title = "Page Not Found",
  message = "Sorry, we couldn't find the page you're looking for.",
}) => {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-icon">
          <FileWarning size={80} />
        </div>

        <h1 className="error-title">{title}</h1>
        <p className="error-message">{message}</p>

        <div className="error-actions">
          <button
            onClick={() => window.history.back()}
            className="error-button secondary"
          >
            Go Back
          </button>
        </div>

        <div className="error-code">
          <span>{code}</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
