import { auth } from "../firebase/appClient";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email.toLowerCase(), password)
    .catch(error => error.code);
}
