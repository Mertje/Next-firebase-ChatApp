import {
  onSnapshot,
  where,
  getFirestore,
  collection,
  query,
  orderBy
} from "firebase/firestore";
import { useState, useEffect } from "react";

const ChatLayout = (props) => {
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
    <div>
        {chats.map((chat) => (
          <p className={currentUser === chat.userName ? 'bg-primary text-end': 'bg-success text-start'} key={chat.created}>
            <span style={ {fontSize: 10, color: "#FFFFFF"}} >{chat.userName}</span>
            <br></br>
            {chat.message} 
            <br></br>
            <span style={ {fontSize: 10, color: "#FFFFFF"}} >{chat.created}</span>
          </p>
        ))}
    </div>
  );
};

export default ChatLayout;
