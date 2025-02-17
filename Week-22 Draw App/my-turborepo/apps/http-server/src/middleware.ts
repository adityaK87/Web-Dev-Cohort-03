import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "@repo/backend-common/config";

declare global {
	namespace Express {
		interface Request {
			userId: string;
		}
	}
}

export const middleware = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers["authorization"] ?? "";

	const decoded = jwt.verify(token, JWT_SECRET);

	if (decoded) {
		req.userId = (decoded as JwtPayload).userId;
	} else {
		res.json({
			message: "Something went Wrong",
		});
	}
};
