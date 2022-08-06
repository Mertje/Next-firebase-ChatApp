import { auth } from "../firebase/appClient";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      return errorCode
    });
}
