import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/appClient";

export default function dashboard(){
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.email);
      const uid = user.uid;

    } else {

    }
  })

}