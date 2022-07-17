import { doc, getFirestore, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const currentGroups = async () => {
    const docSnap = await getDoc(
      doc(getFirestore(), "users", getAuth().currentUser.uid)
    );
    return docSnap.data().group;
};

export default currentGroups;
