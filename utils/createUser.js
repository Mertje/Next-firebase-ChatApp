import { auth } from "../firebase/appClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 

export default function createUser(userName, password) {
  return createUserWithEmailAndPassword(auth, userName, password)
  .then((user) => {
    //store user into firestore DB
    const db = getFirestore();
    const userRef = doc(db, 'users', user.user.uid);
    setDoc(userRef, { email: userName, userUID: user.user.uid, groups: [] }, { merge: true } );
  })
  .catch((error) => {
    const errorCode = error.code;
    return errorCode
  });
}

