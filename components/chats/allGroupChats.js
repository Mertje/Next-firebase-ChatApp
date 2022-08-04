import { useEffect, useState } from "react";
import ChatButton from "./chatButton";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";

const allGroupChats = (props) => {
  const { triggerGetGroups } = props;
  const [groups, getGroups] = useState();

  useEffect(() => {
    onSnapshot(
      doc(getFirestore(), "users", getAuth().currentUser.uid),
      (doc) => {
        getGroups(doc.data().group);
      }
    );
  }, [triggerGetGroups]);

  return (
    <div>
      <ul className="group_Chat_Name">
        {groups
          ? groups.map((group) => (
              <li key={group}>
                <div> <ChatButton group={group} /> </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default allGroupChats;
