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


  console.log(groups)
  return (
    <div>
      <ul>
        {groups
          ? groups.map((group) => (
              <li key={group}>
                {group} <ChatButton group={group} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default allGroupChats;
