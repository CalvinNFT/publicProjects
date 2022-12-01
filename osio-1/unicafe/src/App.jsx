import { useState } from "react";

const Buttons = ({ handleClick, text }) => {
	return (
		<>
			<button onClick={handleClick}>{text}</button>
		</>
	);
};

const Statistics = (props) => {
	if (props.total === 0) {
		return <p>No feedback given</p>;
	}

	return (
		<div>
			<p>
				{props.stat}: {props.value}
			</p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const total = bad + good + neutral;
	const average = (good - bad) / total;
	const positiveRatio = good / total;

	// Stats in raw ( ok? ), advanced stats: sum, avg, posratio

	return (
		<>
			<div>
				<h1>Score your experience</h1>
				<Buttons handleClick={() => setGood(good + 1)} text={"Good"} />
				<Buttons handleClick={() => setNeutral(neutral + 1)} text={"just ok"} />
				<Buttons handleClick={() => setBad(bad + 1)} text={"Bad"} />
			</div>
			<h1>Visitor reviews</h1>
			<Statistics stat={"good"} value={bad} />
			<Statistics stat={"bad"} value={good} />
			<Statistics stat={"neutral"} value={neutral} />
			<Statistics stat={"total"} value={total} />
			<Statistics stat={"average"} value={average} />
			<Statistics stat={"positiveRatio"} value={positiveRatio} />
		</>
	);
};

export default App;
