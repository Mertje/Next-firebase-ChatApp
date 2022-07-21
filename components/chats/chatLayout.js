import {
  onSnapshot,
  where,
  doc,
  getFirestore,
  collection,
  query,
} from "firebase/firestore";
import { useState, useEffect } from "react";

const ChatLayout = (props) => {
  const { group } = props;
  const [chats, getChats] = useState([]);

  useEffect(() => {
    const queryDB = query(
      collection(getFirestore(), "chats"),
      where("groupUID", "==", group)
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
      <ul>
        {chats.map((chat) => (
          <li>{chat.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatLayout;
