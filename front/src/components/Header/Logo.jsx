import React from 'react'
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <Link to={'/'}>
      <div className="logo">
        <picture><img src='../images/cocodrilos.png' alt="Logo" /></picture>
        <div className="footer-registro-form">
          <p>Arte de <span>Cocodrilos</span></p>
        </div>
      </div>
    </Link>
  )
}

export default Logo