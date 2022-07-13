import { auth } from "../firebase/appClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";

export default  function createUser(userName, password) {
  return createUserWithEmailAndPassword(auth, userName, password)
  .then((user) => {
    const db = getFirestore();
    const cityRef = doc(db, 'users', user.user.uid);
    setDoc(cityRef, { email: userName, userUID: user.user.uid, groups: [] }, { merge: true } );
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorCode
  });
}

