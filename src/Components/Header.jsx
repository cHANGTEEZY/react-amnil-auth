"use client"

import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    setMenuOpen(false)
  }


  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Amnil Technology</span>
        </div>

        <div className={`menu-toggle ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link signup">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
