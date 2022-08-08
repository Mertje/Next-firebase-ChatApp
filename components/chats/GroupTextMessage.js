import {
  onSnapshot,
  where,
  getFirestore,
  collection,
  query,
  orderBy
} from "firebase/firestore";
import { useState, useEffect } from "react";
import timeConvert from "../../utils/timeConvert";

const GroupTextMessage = (props) => {
  const { group, currentUser } = props;
  const [chats, getChats] = useState([]);

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
  }, []);

  return (
    <div className="text-block mb-1" id="scroll">
        {chats.map((chat) => (
          <div className="w-100 text-message-block" key={chat.created}>
              <p className={currentUser === chat.userName ? 'logged-text ms-auto me-2 px-2': 'opposite-text text-start me-auto ms-2 px-2'}>
                <span style={ {fontSize: 10 }} >{chat.userName}</span>
                <br></br>
                {chat.message} 
                <br></br>
                <span style={ {fontSize: 10 }} >
                  {timeConvert(chat.created)}</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default GroupTextMessage;
