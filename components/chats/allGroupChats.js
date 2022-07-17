
import { useEffect, useState } from "react";
import CurrentGroups from "../../utils/currentGroups";
import ChatButton from "./chatButton";

const allGroupChats = () => {
  const [groups, getGroups] = useState()  
  useEffect(() =>{
    CurrentGroups().then(group => getGroups(group))
  }, [])


  return (
    <div>
      <ul>
       {groups.map(group => <li key={group}>{group} <ChatButton group={group} /></li>)}
      </ul>
    </div>
  );
};

export default allGroupChats;
