import { doc, getFirestore, getDoc } from "firebase/firestore";
const db = getFirestore();

const Chats = () => {
    async function getUser(){
        try {
          const docSnap = await getDoc( doc(db, "users", user.uid));
          if (docSnap.exists()) {
            console.log( docSnap.data())
          } else {
             return console.log("Document does not exist");
          }
        } catch (error) {
          return console.log(error);
        }
      }

    return (  <div></div>);
}
 
export default Chats;