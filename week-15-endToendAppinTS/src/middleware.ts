import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "./config";

export const userAuth = (req: Request, res: Response, next: NextFunction) => {
	try {
		const token = req.headers["authorization"];
		const decode = jwt.verify(token as string, JWT_SECRET);
		if (decode) {
			// @ts-ignore
			req.userID = decode.id;
			next();
		} else {
			res.status(403).json({
				message: "You are not logged in",
			});
		}
	} catch (error) {
		console.error("Error in route:", error);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
