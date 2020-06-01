import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="nav">
        <div>
          <h4>Mobile Cut</h4>
        </div>
        <div className="nav-container">
          <ul className="nav-links">
            <Link className="nav-links__links" to="/">
              <li>Home</li>
            </Link>
            <Link className="nav-links__links" to="/about">
              <li>About</li>
            </Link>
            <Link className="nav-links__links" to="/work">
              <li>Work</li>
            </Link>
            {/* <Link className="nav-links__links" to="/shop">
              <li>Shop</li>
            </Link> */}
            <Link className="nav-links__links" to="/service">
              <li>Service</li>
            </Link>
          </ul>

        </div>
      </div>
    )
  }
}

export default Navigation;