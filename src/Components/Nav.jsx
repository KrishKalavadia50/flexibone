import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo" style={{ filter: "invert(1)" }}>
           <Link to="/" ><img src="/img/flexi_bone.png"/></Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/Flexibone_info">About</Link>
              </li>
              <li>
              <Link to="/Flexibone_info">Services</Link>
              </li>
              <li>
                <a href="#">Blog / Articles</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="#">
              <img src="/img/facebook-app-symbol.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href="#">
              <img src="/img/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="/img/pinterest.png" alt="Pinterest" />
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}
