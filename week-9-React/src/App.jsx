// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import "./App.css";
// import { counterAtom, counterSelector } from "./store/atoms/counter";
// import Stopwatch from "./components/StopWatch";

// import { useEffect, useState } from "react";
// import useKeyPress from "./hooks/useKeyPress";

// function App() {
// 	return (
// 		<>
// 			<Stopwatch />
// 			<RecoilRoot>
// 				<CounterApp />
// 			</RecoilRoot>
// 		</>
// 	);
// }

// export default App;

// const CounterApp = () => (
// 	<>
// 		<Counter />
// 		<Increase />
// 		<Decrease />
// 		<IsEven />
// 	</>
// );

// const Counter = () => {
// 	const count = useRecoilValue(counterAtom);
// 	return <h1>{count}</h1>;
// };

// const Increase = () => {
// 	const setCount = useSetRecoilState(counterAtom);

// 	const increase = () => {
// 		setCount((count) => count + 2);
// 	};

// 	return <button onClick={increase}>Increase</button>;
// };
// const Decrease = () => {
// 	const setCount = useSetRecoilState(counterAtom);

// 	const decrease = () => {
// 		setCount((count) => count - 1);
// 	};

// 	return <button onClick={decrease}>decrease</button>;
// };

// const IsEven = () => {
// 	const isEven = useRecoilValue(counterSelector);
// 	return <div>{isEven ? "Even" : "Odd"}</div>;
// };

// import { useState, useContext, createContext } from "react";

// const Context = createContext();

// const ChildWithCount = () => {
// 	const { count, setCount } = useContext(Context);
// 	console.log("ChildWithCount re-renders");
// 	return (
// 		<div>
// 			<button onClick={() => setCount(count + 1)}>{count}</button>
// 			<p>Child</p>
// 		</div>
// 	);
// };

// const ExpensiveChild = () => {
// 	console.log("ExpensiveChild re-renders");
// 	return <p>Expensive child</p>;
// };

// const CountContext = ({ children }) => {
// 	const [count, setCount] = useState(0);
// 	const contextValue = { count, setCount };
// 	return (
// 		<>
// 			<Context.Provider value={contextValue}>{children}</Context.Provider>
// 		</>
// 	);
// };

// const App = () => {
// 	return (
// 		<CountContext>
// 			<ChildWithCount />
// 			<ExpensiveChild />
// 		</CountContext>
// 	);
// };

// export default App;

const App = () => {
	return (
		<>
			<h1>Hello World!!!</h1>
		</>
	);
};

export default App;
