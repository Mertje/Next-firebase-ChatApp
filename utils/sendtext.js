import {addDoc, arrayUnion, collection, doc, getFirestore, updateDoc,} from "firebase/firestore";
import {getAuth} from "firebase/auth";

async function sendChat(e, group) {
    const db = getFirestore();
    const auth = getAuth();

    if (e.key === "Enter" && e.target.value !== "") {
        const docRef = await addDoc(collection(db, "chats"), {
            message: e.target.value,
            userName: auth.currentUser.email,
            groupUID: group,
            created: new Date().getTime()
        });
        const currentGroup = doc(db, "group", group);
        await updateDoc(currentGroup, {
            chats: arrayUnion(docRef.id)
        });
        e.target.value = ""
    }
}

export default sendChat;