import { body } from "express-validator";

const userSingpUpValidation = () => {
	return [
		body("nome")
			.isString()
			.withMessage("Insira um valor para o nome")
			.isLength({ min: 3 })
			.withMessage("O nome necessita de pelo menos 3 caracteres"),
		body("email")
			.isString()
			.withMessage("Insira um valor para o e-mail")
			.isEmail()
			.withMessage("Insira um e-mail válido"),
		body("password")
			.isString()
			.withMessage("Insira um valor para a senha")
			.isLength({ min: 5 })
			.withMessage("A senha necessita de pelo menos 5 caracteres"),
		body("confirmPassword")
			.isString()
			.notEmpty()
			.withMessage("A confirmação de senha é necessária.")
			.custom((value, {req}) =>{
				if(value !== req.body.password){
					throw new Error("As senhas informadas não coincidem")
				};
				return true;
			}),
			body("userType")
			.isNumeric()
			.notEmpty()
			.withMessage("Selecione um tipo de usuário")
	];
};

const userLoginValidation = () => {
	return [
		body("email")
			.isString()
			.notEmpty()
			.withMessage("Insira um valor para o e-mail")
			.isEmail()
			.withMessage("Insira um e-mail válido"),
		body("password")
		.isString()
		.notEmpty()
		.withMessage("Insira um valor para a senha")
	]
};

export { userSingpUpValidation, userLoginValidation };