import { Timestamp } from 'firebase-admin/firestore'; 

export interface UserModel {
	nome: string;
	email: string;
	password: string;
	userType: number;
	createdAt: Timestamp;
	updatedAt: Timestamp;
};