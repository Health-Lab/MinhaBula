import { body } from "express-validator";

const userSingpUpValidation = () => {
	return [
		body("nome")
			.isString()
			.withMessage("Name is neccessary")
			.isLength({ min: 3 })
			.withMessage("Name need at least 3 characters"),
		body("email")
			.isString()
			.withMessage("E-mail is neccessary")
			.isEmail()
			.withMessage("Inform an valid e-mail"),
		body("password")
			.isString()
			.withMessage("Password is neccessary")
			.isLength({ min: 5 })
			.withMessage("Password need at least 5 characters"),
		body("confirmPassword")
			.isString()
			.notEmpty()
			.withMessage("Confirm password is neccessary")
			.custom((value, {req}) =>{
				if(value !== req.body.password){
					throw new Error("The password confirmation does not match")
				};
				return true;
			}),
			body("userType")
			.isNumeric()
			.notEmpty()
			.withMessage("Select one user type")
	];
};

const userLoginValidation = () => {
	return [
		body("email")
			.isString()
			.notEmpty()
			.withMessage("E-mail is neccessary")
			.isEmail()
			.withMessage("Inform an valid e-mail"),
		body("password")
		.isString()
		.notEmpty()
		.withMessage("Password is neccessary")
	]
};

export { userSingpUpValidation, userLoginValidation };