import createGroup from "../../utils/createGroup";
import { useState } from "react";
import {
  collection,
  query,
  where,
  getFirestore,
  getDocs,
} from "firebase/firestore";
import AllGroupChats from "./allGroupChats";

const SearchUser = () => {
  const db = getFirestore();
  const emailRef = collection(db, "users");
  const [userInfo, setUserInfo] = useState();

  async function handleKeyDown(e) {
    if (e.key === "Enter") {
      const searchQuery = await getDocs(
        query(emailRef, where("email", "==", e.target.value))
      );
      
      setUserInfo(searchQuery.empty ? 'Error User not found': 'user Added');
      searchQuery.forEach((doc) => {
        createGroup(doc.data())
      });

    }
  }

  return (
    <div>
      <input onKeyDown={handleKeyDown} />
      <p>{userInfo}</p>
      <AllGroupChats triggerGetGroups={userInfo} />
    </div>
  );
};

export default SearchUser;
