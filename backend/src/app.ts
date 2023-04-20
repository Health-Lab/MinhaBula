//import express framework
import express from "express";
//import cors
import cors from "cors";
//import .env variables
import dotenv from "dotenv";
//import the routes
import router from "../src/routes/router";

//configure dotenv
dotenv.config();

const app = express();

//aceppt form data and json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//configure cors
app.use(cors());

//route for test
app.get('/', (req, res) => {
	res.status(200).json({status: 200, message: "HTTPS in Node.Js"});
});

//using the routes
app.use(router);

//server port
const port = process.env.SERVER_PORT;

app.listen(port, () => {
	console.log("Server is running on port 8080");
})