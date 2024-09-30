const { z } = require("zod");
const requiredBody = z.object({
	email: z.string().email().min(10).max(100),
	password: z.string().min(10).max(100),
	firstName: z.string().min(3).max(100),
	lastName: z.string().min(3).max(100),
});

module.exports = {
	requiredBody,
};
