import createGroup from "../../utils/createGroup";
import { useState } from "react";
import {
  collection,
  query,
  where,
  getFirestore,
  getDocs,
} from "firebase/firestore";

const searchUser = () => {
  const db = getFirestore();
  const citiesRef = collection(db, "users");
  const [userInfo, setUserInfo] = useState();

  async function handleKeyDown(e) {
    if (e.key === "Enter") {
      const searchQuery = await getDocs(
        query(citiesRef, where("email", "==", e.target.value))
      );
      setUserInfo(searchQuery.empty ? 'Error User not found': 'user Added');
      searchQuery.forEach((doc) => {
        console.log(doc)
        createGroup(doc.data())
      });
    }
  }

  return (
    <div>
      <input onKeyDown={handleKeyDown} />
      <p>{userInfo}</p>
    </div>
  );
};

export default searchUser;
