import { useEffect, useState } from "react";
import ChatInterface from "./ChatInterface";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

const GroupChats = (props) => {
  const { triggerGetGroups } = props;
  const [groups, getGroups] = useState();

    useEffect(() => {
       onSnapshot(
           doc(getFirestore(), "users", getAuth().currentUser.uid),
           (doc) => {
               if(doc.data()){
                   getGroups(doc.data().group);
               }
           }
       );
  }, [triggerGetGroups]);

  return (
    <div>
      <ul className="group_Chat_Name">
        {groups
          ? groups.map((group) => (
              <li key={group}>
                <div> <ChatInterface group={group} /> </div>
              </li>
            ))
          : undefined}
      </ul>
    </div>
  );
};

export default GroupChats;
