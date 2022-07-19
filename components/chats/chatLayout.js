import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useState, useEffect } from "react";

const ChatLayout = (props) => {
  const [chats, getChats] = useState()  
  const db = getFirestore();
  useEffect(() =>{hi()}, [])


  const q = query(
    collection(db, "chats"),
    where("groupUID", "==", props.group)
  );

  
  async function hi() {
    const res = []
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
      res.push( doc.data() )
    })
    getChats(res)
  }

  console.log(chats)
  return(
    <div>
    <ul>
    {chats ? chats.map(ea => <li>{ea.message} - {ea.userName}</li>) : ''}
    </ul>
    </div>
  )
};

export default ChatLayout;
