import { doc, getFirestore, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const allGroupChats = () => {
  let listItems = '';
  const [results, setResults] = useState([]);
  useEffect(() => {
    getGroupsFromUser();
  }, []);

  async function getGroupsFromUser() {
    const docSnap = await getDoc(
      doc(getFirestore(), "users", getAuth().currentUser.uid)
    );
    const docGroup = docSnap.data().group;
    setResults(docGroup);
  }

  if(results){
     listItems = results.map((number) =><li key={number}>{number}</li>)
  }else{
     listItems = "st"
  }

  return (
    <div>
      <span onClick={() => getGroupsFromUser()}> Refresh</span>
      <ul>
       {listItems}
      </ul>
    </div>
  );
};

export default allGroupChats;
