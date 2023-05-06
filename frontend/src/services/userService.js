import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const getMedicineByName = async({name}) => {
	try {
		let response;
		const res = await query(collection(db, "medicines"), where("nome", "==", name.toUpperCase()));
		const data = await getDocs(res)
		data.forEach((doc) => {
			response = doc.data()
		})
		return response
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

const userService = {
	getMedicineByName,
	getMedicinesNames
};

export default userService;