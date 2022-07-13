import Form from "../components/auth/Form"
import { auth } from "../firebase/appClient";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

export default function Home() {
  const [logged, setLogged] = useState()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  });
  
  return (
    <div className="container">
     {logged ? 'hi there' : <Form />}
    </div>
  )
}
