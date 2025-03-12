const { z } = require("zod");
const requiredBody = z.object({
	email: z.string().email().min(10).max(100),
	password: z.string().min(10).max(100),
	firstName: z.string().min(3).max(100),
	lastName: z.string().min(3).max(100),
});

const validateCourse = z.object({
	title: z.string().min(5).max(100),
	description: z.string().min(10).max(1000),
	price: z.number(),
	imageUrl: z.string(),
});

module.exports = {
	requiredBody,
	validateCourse,
};
