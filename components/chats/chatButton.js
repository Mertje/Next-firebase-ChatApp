import {
  doc,
  setDoc,
  getFirestore,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  addDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ChatLayout from "./chatLayout";
import { useState } from "react";

const ChatButton = (props) => {
  const db = getFirestore();
  const auth = getAuth();

  async function sendChat(e) {
    if (e.key === "Enter") {
      const docRef = await addDoc(collection(db, "chats"), {
        message: e.target.value,
        userName: auth.currentUser.email,
        groupUID: props.group,
      });
      const currentGroup = doc(db, "group", props.group);
      await updateDoc(currentGroup, {
        chats: arrayUnion(docRef.id)
    });
    }
  }

  return (
    <div>
      <button>Open current chat</button>
      <br></br>
      <ChatLayout group={props.group} />
      <input onKeyDown={sendChat} />
    </div>
  );
};

export default ChatButton;
