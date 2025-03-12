import { atom, selector } from "recoil";

export const counterAtom = atom({
	default: 0,
	key: "counter",
});

export const counterSelector = selector({
	key: "counterSelector",
	get: ({ get }) => {
		const value = get(counterAtom);
		let isEven = value % 2 == 0;
		return isEven;
	},
});
