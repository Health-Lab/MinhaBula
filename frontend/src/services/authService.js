import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";

const singUp = async(data) => {
	let userUid;
	createUserWithEmailAndPassword(auth, data.email, data.password)
		.then(async (userCredential) => {
			console.log(userCredential.user.uid);
			userUid = userCredential.user.uid;
			const docRef = doc(db, "users", userUid)
			await setDoc(docRef, data);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		})
};



const authService = {
	singUp
};

export default authService;