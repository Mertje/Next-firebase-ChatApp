import {getAuth, signOut} from "firebase/auth";

export default function logoutUser() {
    const auth = getAuth();

    if (auth.currentUser) {
        signOut(auth)
            .then(() => {
                console.log("logged out successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
