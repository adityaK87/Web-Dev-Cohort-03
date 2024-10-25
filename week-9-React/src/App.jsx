import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import { counterAtom, counterSelector } from "./store/atoms/counter";
import Stopwatch from "./components/StopWatch";

function App() {
	return (
		<>
			<Stopwatch />
			<RecoilRoot>
				<CounterApp />
			</RecoilRoot>
		</>
	);
}

export default App;

const CounterApp = () => (
	<>
		<Counter />
		<Increase />
		<Decrease />
		<IsEven />
	</>
);

const Counter = () => {
	const count = useRecoilValue(counterAtom);
	return <h1>{count}</h1>;
};

const Increase = () => {
	const setCount = useSetRecoilState(counterAtom);

	const increase = () => {
		setCount((count) => count + 2);
	};

	return <button onClick={increase}>Increase</button>;
};
const Decrease = () => {
	const setCount = useSetRecoilState(counterAtom);

	const decrease = () => {
		setCount((count) => count - 1);
	};

	return <button onClick={decrease}>decrease</button>;
};

const IsEven = () => {
	const isEven = useRecoilValue(counterSelector);
	return <div>{isEven ? "Even" : "Odd"}</div>;
};
