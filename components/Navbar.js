import {useState} from "react";
import {auth} from "../firebase/appClient";
import {onAuthStateChanged} from "firebase/auth";
import logoutUser from "../utils/logoutUser";

export default function Navbar() {
    const [inlog, setInlog] = useState("");
    const [loggedEmail, setLoggedEmail] = useState("");

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setInlog("Press to log out");
            setLoggedEmail(user.email)
        } else {
            setInlog("You are logged out");
            setLoggedEmail("")
        }
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="ps-4 navbar-brand" href="#">
                {loggedEmail}
            </a>
            <a data-cy="nav-login ms-auto" className="nav-link" onClick={() => logoutUser()}>
                {inlog}
            </a>
        </nav>
    );
}
