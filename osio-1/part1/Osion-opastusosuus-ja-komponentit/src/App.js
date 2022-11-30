import { useState } from "react";

const App = () => {
	const [counter, setCounter] = useState(0);

	const increaseByOne = () => setCounter(counter + 1);
	const decreaseByOne = () => setCounter(counter - 1);
	const setToZero = () => setCounter(0);

	return (
		<div>
			<Display counter={counter} />
			<Button handleClick={increaseByOne} text="Growth" />
			<Button handleClick={setToZero} text="Reborn" />
			<Button handleClick={decreaseByOne} text="Learn" />
		</div>
	);
};

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>{text}</button>
);

const Display = ({ counter }) => <div>{counter}</div>;

export default App;
