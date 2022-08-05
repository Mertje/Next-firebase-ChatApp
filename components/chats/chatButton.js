import { doc, getFirestore, onSnapshot} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import ChatLayout from "./chatLayout";
import { useEffect, useState } from "react";
import sendChat from "../../utils/sendtext";

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

  return (
    <div >
      <div className="border my-2 p-2 d-flex" onClick={() => setHide(!hide)}>
        <p className="my-0">{groupName}</p>
        <span className={hide ? 'arrow': 'arrow arrow-open'}>	&lt; </span>
      </div>
      <div className={hide ? 'd-none' : "bg-light p-4"}>
        <ChatLayout group={props.group} currentUser={auth.currentUser.email}/>
        <div className="d-flex">
        <input className="w-100 border border-dark rounded  py-2" onKeyDown={(e) => sendChat(e, props.group)} placeholder="press enter to send text" />
        </div>
      </div>
    </div>
  );
};

export default ChatButton;
