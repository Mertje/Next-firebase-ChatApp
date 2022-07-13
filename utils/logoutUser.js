import { getAuth, signOut } from "firebase/auth";

export default function logoutUser() {
  const auth = getAuth();
  signOut(auth)
    .catch((error) => {
      console.log(error)
    });
}
