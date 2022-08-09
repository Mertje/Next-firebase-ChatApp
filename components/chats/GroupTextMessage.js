import {
  onSnapshot,
  where,
  getFirestore,
  collection,
  query,
  orderBy
} from "firebase/firestore";
import { useState, useEffect, useRef  } from "react";
import timeConvert from "../../utils/timeConvert";

const GroupTextMessage = (props) => {
  const textRef = useRef(undefined);
  const { group, currentUser } = props;
  const [chats, getChats] = useState([]);

  useEffect( () =>{
    textRef.current.scrollTop = textRef.current.scrollHeight;
  }, [chats])

  useEffect(() => {
    const queryDB = query(
      collection(getFirestore(), "chats"),
      where("groupUID", "==", group),
      orderBy('created', 'asc')
    );
    const unsubscribe = onSnapshot(queryDB, (snapshots) => {
      getChats(snapshots.docs.map((doc) => doc.data()));
    });
    return () => {
      unsubscribe();
    };
  }, [group]);

  return (
    <div className="text-block mb-1" id="scroll" ref={textRef}>
        {chats.map((chat) => (
          <div className="w-100 text-message-block" key={chat.created}>
              <p className={currentUser === chat.userName ? 'logged-text ms-auto me-2 px-2': 'opposite-text text-start me-auto ms-2 px-2'}>
                <span className="time-stamp" >{chat.userName}</span>
                <br></br>
                {chat.message} 
                <br></br>
                <span className="time-stamp" >
                  {timeConvert(chat.created)}</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default GroupTextMessage;
