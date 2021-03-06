import { doc, setDoc, getFirestore , getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { auth } from "../firebase/appClient";

const createGroup = async (searchedUser) => {
  const groupDocument= doc(getFirestore(), "group", searchedUser.userUID + auth.currentUser.uid);
  const docSnap = await getDoc(groupDocument);
  const loggedUser = doc(getFirestore(), "users", auth.currentUser.uid);
  const searchingUser = doc(getFirestore(), "users", searchedUser.userUID);

  if (docSnap.exists()) {
    docSnap.data();
  } else {
    //create a group collection with chosen user email
    setDoc(groupDocument, {GroupUsers: [searchedUser.userUID, auth.currentUser.uid], chats: [],});
    updateDoc(loggedUser, {group: arrayUnion( searchedUser.userUID + auth.currentUser.uid) });
    updateDoc(searchingUser, {group: arrayUnion( searchedUser.userUID + auth.currentUser.uid) });
  }
};

export default createGroup;
 