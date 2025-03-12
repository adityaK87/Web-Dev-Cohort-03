import { useEffect, useRef } from "react";

export const usePrev = (value) => {
	const prev = useRef();
	console.log("usePrev render");

	useEffect(() => {
		console.log("inside UseEffect");
		prev.current = value;
	}, [value]);

	return prev.current;
};
