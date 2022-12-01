import { useState } from "react";

const Buttons = ({ handleClick, text }) => {
	return (
		<>
			<button onClick={handleClick}>{text}</button>
		</>
	);
};

const Statistics = ({ bad, good, neutral }) => {
	const total = bad + good + neutral;
	const average = (good - bad) / total;
	const positiveRatio = good / total;

	if (total === 0) {
		return <p>No feedback given</p>;
	}

	return (
		<div>
			<p>Good reviews: {good}</p>
			<p>Neutral reviews: {neutral}</p>
			<p>Bad reviews: {bad}</p>
			<p>Total sum: {total} reviews</p>
			<p>Average review: {average}</p>
			<p>Positive of all {positiveRatio} % </p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<>
			<div>
				<h1>Score your experience</h1>
				<Buttons handleClick={() => setGood(good + 1)} text={"Good"} />
				<Buttons handleClick={() => setNeutral(neutral + 1)} text={"just ok"} />
				<Buttons handleClick={() => setBad(bad + 1)} text={"Bad"} />
			</div>
			<h1>Visitor reviews</h1>
			<Statistics bad={bad} good={good} neutral={neutral} />
		</>
	);
};

export default App;
