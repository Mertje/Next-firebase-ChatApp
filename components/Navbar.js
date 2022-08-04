import { useState } from "react";
import { auth } from "../firebase/appClient";
import { onAuthStateChanged } from "firebase/auth";
import logoutUser from "../utils/logoutUser";

export default function Navbar() {
  const [inlog, setInlog] = useState();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setInlog("loggedin");
    } else {
      setInlog("logged out");
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <a className="nav-link" onClick={() => logoutUser()}>
        {inlog}
      </a>
    </nav>
  );
}
