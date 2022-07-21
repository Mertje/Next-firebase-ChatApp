import {
  doc,
  getFirestore,
  updateDoc,
  arrayUnion,
  collection,
  addDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ChatLayout from "./chatLayout";

const ChatButton = (props) => {
  const db = getFirestore();
  const auth = getAuth();

  async function sendChat(e) {
    if (e.key === "Enter") {
      const docRef = await addDoc(collection(db, "chats"), {
        message: e.target.value,
        userName: auth.currentUser.email,
        groupUID: props.group,
        created: new Date().getTime()

      });
      const currentGroup = doc(db, "group", props.group);
      await updateDoc(currentGroup, {
        chats: arrayUnion(docRef.id)
    });
    e.target.value = ""
    }
  }

  return (
    <div>
      <br></br>
      <ChatLayout group={props.group} />
      <input onKeyDown={sendChat} />
    </div>
  );
};

export default ChatButton;
