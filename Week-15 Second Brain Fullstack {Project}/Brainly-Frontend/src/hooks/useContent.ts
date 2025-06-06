import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export const useContent = () => {
	const [contents, setContents] = useState([]);
	function refresh() {
		axios
			.get(`${BACKEND_URL}/api/v1/content`, {
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			})
			.then((response) => {
				setContents(response.data.content);
			});
	}

	useEffect(() => {
		refresh();
		const timerId = setInterval(() => {
			refresh();
		}, 10 * 1000);

		return () => {
			clearInterval(timerId);
		};
	}, []);
	return contents;
};
