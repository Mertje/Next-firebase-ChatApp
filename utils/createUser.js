import { auth } from "../firebase/appClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 

export default function createUser(userName, password) {
  //Store in Firebase/Auth
  return createUserWithEmailAndPassword(auth, userName.toLowerCase(), password)
  .then((user) => {
    //Store in Firebase/Firestore database
    const db = getFirestore();
    const userRef = doc(db, 'users', user.user.uid);
    setDoc(userRef, { email: userName.toLowerCase(), userUID: user.user.uid, group: [] }, { merge: true } );
  })
  .catch(error => error.code);
}

