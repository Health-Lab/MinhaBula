import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection, getDoc } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";

const singUp = async(data) => {
	try {
		const user = {
			name: data.name,
			email: data.email,
			contact: data.contact,
			birthdayDate: data.birthdayDate,
			userType: data.userType
		};
		const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
		const userUid = res.user.uid;
		const docRef = doc(db, "users", userUid);
		const dbRes = await setDoc(docRef, user);
		return userUid;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
	}
};

const singIn = async({email, password}) => {
	try {
		const res = await signInWithEmailAndPassword(auth, email, password);
		const data = res.user.uid;
		return data;
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
	}
};

const authService = {
	singUp,
	singIn,
};

export default authService;