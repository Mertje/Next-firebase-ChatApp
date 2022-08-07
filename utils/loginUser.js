import { auth } from "../firebase/appClient";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginUser(email, password) {
  //TODO : email all chars to lowercase
  return signInWithEmailAndPassword(auth, email, password)
    .catch(error => error.code);
}
