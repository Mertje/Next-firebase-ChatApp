import React, { useState } from 'react';
import { auth } from "../firebase/appClient";
import { onAuthStateChanged } from "firebase/auth";
import logoutUser from '../utils/logoutUser';

export default function Navbar() {
  const [inlog, setInlog] = useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setInlog('loggedin')

    } else {
      setInlog('loggedout')
    }
  })
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" onClick={() => logoutUser() }>
             Logout - {inlog}
            </a>
          </li>
          <li className="nav-item">
          </li>
        </ul>
      </div>
    </nav>
  );
}
