import { Request, Response } from "express";
import { db } from "../config/db";
import bulas from "../../bulas.json";
import { MedicineModel } from "../models/medicineModel";
import { Timestamp } from 'firebase-admin/firestore'; 

const getMedicineByName = async(req: Request, res: Response) => {
	try {
		const { medicine } = req.params;
		const query = await db.collection("medicines").where("nome", "==", medicine);

		if(!query){
			res.status(404).json({
				errors: `Não foram encontrados medicamentos com o nome de ${medicine}.`
			});
			return;
		};

		let medicines: MedicineModel[] = [];

		await query.get().then(querySnapshot => {
			querySnapshot.forEach(documentSnapshot => {
				medicines.push(documentSnapshot.data());
			});
		})

		console.log(medicines);

		res.status(200).json({
			medicines: medicines
		});
		return;

	} catch (error) {
		res.status(422).json({
			errors: "Ocorreu um erro, por favor tente novamente mais tarde!"
		});
		return;
	};
};

const findMedicine = (query, medicineArray) => {
	const medicineResponse = medicineArray.map((medicamento) => {
		if(medicamento.name === query){
			return medicamento;
	}})
	return medicineResponse
};

const insert = async(req: Request, res: Response) => {
try {
	bulas.forEach(async bula => {
		bula.createdAt = Timestamp.now()
		await db.collection("medicines").add(bula)
	});
	res.status(201).json({
		message: "Medicamentos adicionados com sucesso!"
	})
} catch (error) {
	res.status(422).json({
		errors: "Ocorreu um erro, por favor tente novamente mais tarde!"
	});
	return;
}
};

export { getMedicineByName, insert };