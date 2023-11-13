import React from 'react'
import "./index.css"

const Navbar = () => {
  return (
    <nav>
        <div className="container">
        <div className="navbar">
        <div className="logo">
            <img src="https://lh3.googleusercontent.com/wAPeTvxh_EwOisF8kMR2L2eOrIOzjfA5AjE28W5asyfGeH85glwrO6zyqL71dCC26R63chADTO7DLOjnqRoXXOAB8t2f4C3QnU6o0BA" alt="" />
        </div>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
        </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar