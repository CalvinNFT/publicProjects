import { useState } from "react";

const App = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<div>{counter}</div>
			<button onClick={() => setCounter(counter + 1)}>Plus</button>
			<button onClick={() => setCounter(0)}>reset</button>
		</>
	);
};

export default App;
