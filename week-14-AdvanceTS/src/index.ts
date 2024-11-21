interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	age: number;
}

// Problem : update only name, age, password

type UpdateProps = Pick<User, "name" | "age" | "password">;

function updateUser(updateProps: UpdateProps): UpdateProps {
	let updateUser = {
		...updateProps,
		name: "Abhi",
		password: "ffdgfdg",
		age: 12,
	};
	return updateUser;
	//Write DB call Here
}

let ans = updateUser({ name: "Aditya", password: "sdsg", age: 11 });
console.log(ans);
