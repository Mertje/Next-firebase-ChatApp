import {
  doc,
  getFirestore,
  updateDoc,
  arrayUnion,
  collection,
  addDoc,
  onSnapshot
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ChatLayout from "./chatLayout";
import { useEffect, useState } from "react";

const ChatButton = (props) => {
  const db = getFirestore();
  const auth = getAuth();
  const [hide, setHide] = useState(true)
  const [groupName, setGroupName] = useState(true)

  // Get Group name of each group
  useEffect(() =>{
      onSnapshot(doc(db, "group", props.group), (doc) => {
      setGroupName(doc.data().GroupName)
    });

  }, [])

  // Send text message to DB
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
    <div >
      <p onClick={() => setHide(!hide)}>{groupName}</p>
      <div className={hide ? 'd-none' : "bg-light p-4"}>
        <ChatLayout group={props.group} currentUser={auth.currentUser.email}/>
        <input className="w-100 border border-dark rounded  py-2" onKeyDown={sendChat} />
      </div>
    </div>
  );
};

export default ChatButton;
