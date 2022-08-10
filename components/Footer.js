import deleteUser from "../utils/deleteUser";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase/appClient";
import {useState} from "react";

export default function Footer(){
    const [logged, setLogged] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setLogged(false);
        } else {
            setLogged(true);
        }
    });

    return (
        <div className="footer">
            {logged ? undefined : <button onClick={() => deleteUser()}> Delete my account</button>}
        </div>
    )
}