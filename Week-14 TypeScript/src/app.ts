interface Address {
	city: string;
	country: string;
	pincode: number;
}
interface User {
	name: string;
	age: number;
	address: Address;
}

interface Office {
	address: Address;
}

let person: User = {
	name: "Aditya",
	age: 21,
	address: {
		city: "Delhi",
		country: "India",
		pincode: 110076,
	},
};
