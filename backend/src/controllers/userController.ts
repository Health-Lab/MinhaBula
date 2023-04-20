import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { Timestamp } from 'firebase-admin/firestore'; 
import { UserModel } from '../models/userModel';
import { db } from "../config/db";

const singUP = async(req: Request, res: Response) => {
	try {
		//get the data on the req body
	const { nome, email, password, userType } = req.body;
	//create salt
	const salt =  bcrypt.genSaltSync(10);
	//hash password
	const hashPassword = bcrypt.hashSync(password, salt);
	//create user object
	const newUser: UserModel = {
		nome,
		email,
		password:  hashPassword,
		userType,
		createdAt: Timestamp.now(),
		updatedAt: Timestamp.now(),
	};

	const userRef = await db.collection("users").add(newUser);

	res.status(201).json({
		uid: userRef._path.segments[1]
	});
	return;
	} catch (error) {
		res.status(422).json({
			errors: "Ocorreu um erro, por favor tente novamente mais tarde!"
		});
		return;
	};
};

const login = async(req: Request, res: Response) => {
	try {
		const { email, password } = req.body;

		const query = await db.collection("users").where("email", "==", email);

		if(!query){
			res.status(404).json({
				errors: "Não foram encontrados usuários associados a este e-mail."
			});
			return;
		};

		let user;

		await query.get().then(querySnapshot => {
			querySnapshot.forEach(documentSnapshot => {
				user = documentSnapshot.data()
			});
		})

		console.log(user);

		if(!(bcrypt.compareSync(password, user.password))){
			res.status(404).json({
				errors: "O e-mail ou senha informada não existe."
			})
			return;
		};

		res.status(200).json({
			message: "Usuário autenticado com sucesso!"
		});
		return;
	} catch (error) {
		res.status(422).json({
			errors: "Ocorreu um erro, por favor tente novamente mais tarde!"
		});
		return;
	}
};


export {
	singUP,
	login,
};