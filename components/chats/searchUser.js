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

  async function handleKeyDown(e) {
    if (e.key === "Enter") {
      const searchQuery = await getDocs(
        query(citiesRef, where("email", "==", e.target.value))
      );

      searchQuery.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    }
  }

  return (
    <div>
      <input onKeyDown={handleKeyDown} />
    </div>
  );
};

export default searchUser;
