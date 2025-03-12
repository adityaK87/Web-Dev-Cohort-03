interface employee {
	firstName: string;
	lastName: string;
	department: string;
}
interface Manager {
	firstName: string;
	company: string;
}

type intersection = employee & Manager;

const user: intersection = {
	firstName: "Raja",
	lastName: "Kumar",
	department: "sdjdfl",
	company: "dsfdop",
};
