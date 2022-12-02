import { useState } from "react";

const Buttons = ({ handleClick, text }) => {
	return (
		<>
			<button onClick={handleClick}>{text}</button>
		</>
	);
};

const StatisticsLine = (props) => {
	// console.log(props.value, "StatisticsLine component"); // DELETE AFTER DEV
	return (
		<>
			<table>
				<tbody>
					<tr>
						<td
							style={{
								textAlign: "left",
								width: "100px",
							}}
						>
							{props.stat}
						</td>
						<td>{props.value}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

const Statistics = ({ content }) => {
	// console.log(content, " Statistics component"); // DELETE AFTER DEV
	return (
		<div>
			<StatisticsLine stat={"Bad"} value={content[0]} />
			<StatisticsLine stat={"Good"} value={content[1]} />
			<StatisticsLine stat={"Neutral"} value={content[2]} />
			<StatisticsLine stat={"Total"} value={content[3]} />
			<StatisticsLine stat={"Average"} value={content[4]} />
			<StatisticsLine stat={"Positive Ratio"} value={content[5]} />
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
	const content = [bad, good, neutral, total, average, positiveRatio];

	// console.log(content, "App component"); // DELETE AFTER DEV

	if (total === 0) {
		return (
			<>
				<div>
					<h1>Score your experience</h1>
					<Buttons handleClick={() => setGood(good + 1)} text={"Good"} />
					<Buttons
						handleClick={() => setNeutral(neutral + 1)}
						text={"just ok"}
					/>
					<Buttons handleClick={() => setBad(bad + 1)} text={"Bad"} />
				</div>
				<h1>Visitor reviews</h1>
				<p>Client feedback will be visible here!</p>;
			</>
		);
	}

	return (
		<>
			<div>
				<h1>Score your experience</h1>
				<Buttons handleClick={() => setGood(good + 1)} text={"Good"} />
				<Buttons handleClick={() => setNeutral(neutral + 1)} text={"just ok"} />
				<Buttons handleClick={() => setBad(bad + 1)} text={"Bad"} />
			</div>
			<h1>Visitor reviews</h1>
			<Statistics content={content} />
		</>
	);
};

export default App;
