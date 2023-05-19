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
		const favorites = user.data().favorites ? [...user.data().favorites, medicineId] : [medicineId];
		const update = await setDoc(docRef, {favorites: favorites}, {merge: true})
		//console.log(update);
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
	}
};

const removeMedicineFromFavorites = async(userId, medicineId) => {
	try {
		const docRef = doc(db, "users", userId)
		const userData = await getDoc(docRef)
		let newFavorites;
		if(userData.data().favorites.includes(medicineId)){
			console.log(userData.data().favorites);
			newFavorites = userData.data().favorites.filter(id => {
				return id !== medicineId ? userData.data().favorites.splice(userData.data().favorites.indexOf(medicineId), 1) : undefined;
			})
		}
		const update = await setDoc(docRef, {
			favorites: newFavorites
		}, { merge: true })
		console.log(update);
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorCode, errorMessage);
	}
};

const userService = {
	getMedicineByName,
	getMedicinesNames,
	includeFavoriteMedicine,
	removeMedicineFromFavorites
};

export default userService;