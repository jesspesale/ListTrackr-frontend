import React from 'react'
import "../App.css"
import {Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="nav-item">
          Home
        </Link>
      </div>
      <div>
        <Link to="/lists" className="nav-item">
          All Lists
        </Link>
      </div>
      <div>
        <Link to="/lists/new" className="nav-item">
          Create a new List
        </Link>
      </div>
    </div>
  )
}
