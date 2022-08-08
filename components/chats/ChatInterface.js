import { doc, getFirestore, onSnapshot} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import GroupTextMessage from "./GroupTextMessage";
import { useEffect, useState } from "react";
import sendChat from "../../utils/sendtext";

const ChatInterface = (props) => {
  const db = getFirestore();
  const auth = getAuth();
  const [hide, setHide] = useState(true)
  const [groupName, setGroupName] = useState(true)

  useEffect(() =>{
      onSnapshot(doc(db, "group", props.group), (doc) => {
      setGroupName(doc.data().GroupName)
    });
  }, [db , props.group])

  return (
    <div >
      <div className="border my-2 p-2 mb-0 d-flex" onClick={() => setHide(!hide)}>
        <p data-cy="group-name" className="my-0">{groupName}</p>
        <span className={hide ? 'arrow': 'arrow arrow-open'}>	&lt; </span>
      </div>
      <div className={hide ? 'd-none' : "bg-light pb-2 pt-1"}>
        <GroupTextMessage group={props.group} currentUser={auth.currentUser.email}/>
        <div className="d-flex">
        <input className="w-100 border border-dark rounded py-2 me-4 ms-1" onKeyDown={e => sendChat(e, props.group)} placeholder="press enter to send text" />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
