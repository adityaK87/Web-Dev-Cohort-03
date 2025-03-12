export function randomString(len: number) {
	let ans = "";
	const randomCharacter = "dfhsgjfdgldkfglk13123423esrdgvisdfuzsd";

	const randomLength = randomCharacter.length;
	for (let i = 0; i < len; i++) {
		ans += randomCharacter[Math.floor(Math.random() * randomLength)];
	}
	return ans;
}
