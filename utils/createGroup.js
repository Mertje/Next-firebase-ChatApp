import {arrayUnion, doc, getDoc, getFirestore, setDoc, updateDoc} from "firebase/firestore";
import {auth} from "../firebase/appClient";

const createGroup = async (searchedUser) => {
    const groupDocument = doc(getFirestore(), "group", searchedUser.userUID + auth.currentUser.uid);
    const docSnap = await getDoc(groupDocument);
    const loggedUser = doc(getFirestore(), "users", auth.currentUser.uid);
    const searchingUser = doc(getFirestore(), "users", searchedUser.userUID);

    if (docSnap.exists()) {
        docSnap.data();
    } else {
        await setDoc(groupDocument, {
            GroupUsers: [searchedUser.userUID, auth.currentUser.uid],
            GroupName: (searchedUser.email + " - " + auth.currentUser.email),
            chats: [],
        });
        await updateDoc(loggedUser, {group: arrayUnion(searchedUser.userUID + auth.currentUser.uid)});
        await updateDoc(searchingUser, {group: arrayUnion(searchedUser.userUID + auth.currentUser.uid)});
    }
};

export default createGroup;
 