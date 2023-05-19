import { collection, getDocs, query, where, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const getMedicineByName = async({name}) => {
	try {
		let medicine = {
			id: "",
			data: {}
		};
		const res = await query(collection(db, "medicines"), where("nome", "==", name.toUpperCase()));
		const data = await getDocs(res)
		data.forEach((doc) => {
			medicine.data = doc.data()
			medicine.id = doc.id
		})
		return medicine
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
	}
};

const getMedicinesNames = async() => {
	try {
		let response = [];
		const res = await query(collection(db , "medicines"));
		const data = await getDocs(res);
		data.forEach((doc) => {
			response.push(doc.data().nome)
		})
		return response
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
	}
};

const includeFavoriteMedicine = async (userId, medicineId) => {
	try {
		const docRef = doc(db, "users", userId)
		const user = await getDoc(docRef);
		const userData = {
			birthdayDate: user.data().birthdayDate,
			contact: user.data().contact,
			email: user.data().email,
			name: user.data().name,
			userType: user.data().userType,
			favorites: user.data().favorites ? [...user.data().favorites, medicineId] : [medicineId]
		}
		const update = await setDoc(docRef, userData)
		//console.log(update);
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
	}
};

const userService = {
	getMedicineByName,
	getMedicinesNames,
	includeFavoriteMedicine
};

export default userService;