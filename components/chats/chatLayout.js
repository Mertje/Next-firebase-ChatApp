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
          <p className={currentUser === chat.userName ? 'text-primary': 'text-success'} key={chat.created}>
            {chat.message} {chat.created} - {chat.userName}
          </p>
        ))}
    </div>
  );
};

export default ChatLayout;
