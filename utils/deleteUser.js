import {auth} from "../firebase/appClient";
import {arrayRemove, deleteDoc, doc, getDoc, getFirestore, updateDoc} from "firebase/firestore";
import {signOut} from "firebase/auth";

export default async function deleteUser() {
    const user = auth.currentUser;
    if (user) {
        signOut(auth)
            .then(async () => {
                const docUser = await getDoc(doc(getFirestore(), "users", user.uid))
                const groups = docUser.data().group
                getGroupsFromUser({groups})
                await deleteDoc(doc(getFirestore(), "users", user.uid));
            })
            .catch(() => {
                console.log("user not logged in");
            });
    }
    await user.delete();
}


function getGroupsFromUser({groups}) {
    groups.map(async (group) => {
        const docGroups = await getDoc(doc(getFirestore(), "group", group))
        const usersOfGroup = docGroups.data().GroupUsers
        deleteChat(docGroups.data().chats)
        deleteGroupFromOtherUser({usersOfGroup, group})
        await deleteDoc(doc(getFirestore(), "group", group))

    })
}

function deleteGroupFromOtherUser({usersOfGroup, group}) {
    usersOfGroup.map(async (userOfGroup) => {
        const docOfUser = doc(getFirestore(), "users", userOfGroup)
        await updateDoc(docOfUser, {
            group: arrayRemove(group)
        });
    })
}

function deleteChat(chats) {
    chats.map(async (chat) => {
        await deleteDoc(doc(getFirestore(), "chats", chat));
    })
}