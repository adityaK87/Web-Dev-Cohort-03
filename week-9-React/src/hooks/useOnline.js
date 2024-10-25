import { useEffect, useState } from "react";

export const useOnline = () => {
	const [isOnline, setIsOnline] = useState(true);

	console.log("Render 1");
	useEffect(() => {
		console.log("Inside useEffect");
		window.addEventListener("online", () => {
			setIsOnline(true);
		});
		window.addEventListener("offline", () => {
			setIsOnline(false);
		});
	}, []);

	return isOnline;
};
