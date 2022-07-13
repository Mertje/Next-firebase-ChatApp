import { auth } from "../firebase/appClient";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default  function createUser(userName, password) {
  return createUserWithEmailAndPassword(auth, userName, password)
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorCode
  });
}
