import { useRef, useState } from "react";

// ugly code

function Stopwatch() {
	const [time, setTime] = useState(0);
	const intervalId = useRef(null); // Use state to store the interval ID

	console.log("rendering");
	const startTimer = () => {
		console.log("inside startTimer");
		if (intervalId.current !== null) return; // Already running, do nothing

		const newIntervalId = setInterval(() => {
			console.log("inside Interval");
			setTime((prevTime) => prevTime + 1);
		}, 1000);

		// Store the interval ID in state (triggers re-render)
		intervalId.current = newIntervalId;
	};

	const stopTimer = () => {
		console.log("inside stopTimer");
		clearInterval(intervalId.current);

		// Clear the interval ID in state (triggers re-render)
		intervalId.current = null;
	};

	return (
		<div>
			<h1>Timer: {time}</h1>
			<button onClick={startTimer}>Start</button>
			<button onClick={stopTimer}>Stop</button>
		</div>
	);
}

// function Stopwatch() {
// 	const [time, setTime] = useState(0);
// 	const intervalRef = useRef(null);

// 	const startTimer = () => {
// 		if (intervalRef.current !== null) return; // Already running, do nothing

// 		intervalRef.current = setInterval(() => {
// 			setTime((prevTime) => prevTime + 1);
// 		}, 1000);
// 	};

// 	const stopTimer = () => {
// 		clearInterval(intervalRef.current);
// 		intervalRef.current = null;
// 	};

// 	return (
// 		<div>
// 			<h1>Timer: {time}</h1>
// 			<button onClick={startTimer}>Start</button>
// 			<button onClick={stopTimer}>Stop</button>
// 		</div>
// 	);
// }
export default Stopwatch;
