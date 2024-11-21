interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	age: number;
}

// Problem : update only name, age, password

type UpdateProps = Pick<User, "name" | "age" | "password">;

// it won't complain if I pass only 2 props
type optionalAllProps = Partial<UpdateProps>;

function updateUser(updateProps: optionalAllProps): UpdateProps {
	let updateUser = {
		...updateProps,
		name: "Abhi",
		password: "ffdgfdg",
		age: 12,
	};
	return updateUser;
	//Write DB call Here
}

let ans = updateUser({ password: "sdsg", age: 11 });
// console.log(ans);

//Readonly

interface Config {
	apiUrl: string;
	apiKey: string;
}

const config: Readonly<Config> = {
	apiUrl: "http://api.aditya.com",
	apiKey: "dsjfkhdkjghdfkjgh",
};

// Cannot assign to 'apiKey' because it is a read-only property.
// config.apiKey = "efehfer";
// config.apiKey = "efehfer";

// Records and Map
type Users = Record<string, { name: string; age: number }>;
const users: Users = {
	"a2@": { age: 12, name: "Aditya Kumar" },
};

interface Employee {
	id: number;
	name: string;
}

const employee = new Map<string, Employee>();

employee.set("emp@1", { id: 12, name: "aditya" });
employee.set("emp@2", { id: 2, name: "abhinav" });

employee.get("emp@1"); //{ id: 12, name: "aditya" }
