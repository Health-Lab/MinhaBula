import { validationResult, ValidationError } from "express-validator";
import { Request, Response, NextFunction } from "express";

const validate = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);
	
	if(errors.isEmpty()){
		next();
		return;
	};
	const extratedErrors: [] = [];
	errors.array().map((error: ValidationError) => {
		extratedErrors.push(error.msg)
	});
	res.status(422).json({
		errors: extratedErrors
	});
	return;
};

export { validate };