import React from 'react'
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={'/'}>
      <div className="logo">
        <picture><img src='../images/cocodrilos.png' alt="Logo" /></picture>
        <span>COCODRILO</span>
      </div>
    </Link>
  )
}

export default Logo