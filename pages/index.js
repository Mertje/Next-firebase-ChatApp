import Form from "../components/auth/Form";
import { auth } from "../firebase/appClient";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import ChatScreen from "../components/chats/chatScreen";

export default function Home() {
  const [logged, setLogged] = useState();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  });

  return <div className="container">{logged ? <ChatScreen /> : <Form />} </div>
}
