import admin from "firebase-admin";

import credentials from "../serviceAccountKey.json";

admin.initializeApp({
	credential: admin.credential.cert(credentials)
});

export const db = admin.firestore();
