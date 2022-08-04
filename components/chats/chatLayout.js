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
          <div className="w-100" key={chat.created}>
              <p style={ {width: 'fit-content', maxWidth: '50%'}} className={currentUser === chat.userName ? 'bg-primary ms-auto me-0': 'bg-success text-start me-auto ms-0'}>
                <span style={ {fontSize: 10, color: "#FFFFFF"}} >{chat.userName}</span>
                <br></br>
                {chat.message} 
                <br></br>
                <span style={ {fontSize: 10, color: "#FFFFFF"}} >
                  {// format time
                chat.created
                }</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default ChatLayout;
