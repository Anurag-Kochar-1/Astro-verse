import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from "../firebaseConfig"

const SignInWithGoogleFunction = async () => {
    const googleProvider = new GoogleAuthProvider()

    try {
        const result = await signInWithPopup(auth, googleProvider)
        const userRef = doc(db, "users", result?.user.uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
            console.log(`User already Exist => ${userDoc.id}`);

        } else {
            await setDoc(doc(db, "users", result?.user?.uid), {

                userName: result?.user?.displayName,
                userDisplayPicture: result?.user?.photoURL,
                userEmail: result?.user?.email,
                userID: result?.user?.uid,
                completedLessonsID: [],
                userCoins: 100,
                userProfileBanner: ""
            })

            try {
                const userNotificationSubCollectionRef = collection(db, 'users', result?.user?.uid as string, 'notifications')
                const sendingNotification = await addDoc(userNotificationSubCollectionRef, {
                    notificationID: "",
                    notificationText: "You got 100 coins",
                    notificationIconName: "coinIcon",
                    notificationSendedAt: serverTimestamp()
                })

                // adding id 
                const notificationRef = doc(db, 'users', result?.user?.uid as string, 'notifications', sendingNotification?.id)
                await updateDoc(notificationRef, {
                    notificationID: sendingNotification?.id
                })

            } catch (error) {
                console.error(error);
            }
        }


    } catch (error) {
        console.error(error);
    }
}


export { SignInWithGoogleFunction }