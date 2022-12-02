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
const Anectode = ({ anectode, selected }) => {
	console.log(selected, " Anectode component"); // DELETE AFTER DEV
	return (
		<div
			style={{
				margin: "5% 0%",
				justifyContent: "space-between",
				height: "6.5vh",
			}}
		>
			<h1>{anectode[selected]}</h1>
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
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
		'Brooks Law: "Adding manpower to a late software project makes it later!"',
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Even the best planning is not so omniscient as to get it right the first time. -- Fred Brooks",
		"Plan to throw one (implementation) away; you will, anyhow. -- Fred Brooks",
		"Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away --Antoine de Saint-Exupery",
		"Program testing can be used to show the presence of bugs, but never to show their absence! --Edsger Dijkstra",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand. --Martin Fowler",
		"Programming can be fun, so can cryptography; however they should not be combined. --Kreitzberg and Shneiderman ",
	];
	const feedback = [
		"Ew it has plastic in it!",
		"Such a great savings app!",
		"But have you heard of DaySave?",
		"! COULD NOT BELIEVE, the food was great",
		"I forgot my student ID and the lunch lady gave me a stare, still managed to get the discount",
		"Because I'm happy",
		"Did you know X brings good luck and it can be random if you get them multiple times a row?",
		"A",
		"Yeah I just got bored",
		"B",
		"C",
		"D",
		"E",
		"H",
		"X",
	];

	const [selected, setSelected] = useState(0);

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
				<p>
					Client feedback will be visible here! At the mean time, thy anecdotes
				</p>
				<Anectode anectode={anecdotes} selected={selected} />
				<Buttons
					handleClick={() => setSelected(Math.floor(Math.random() * 15))}
					text={"Randomize me an anecdote!"}
				/>
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
			<Anectode anectode={feedback} selected={selected} />
			<Buttons
				handleClick={() => setSelected(Math.floor(Math.random() * 15))}
				text={"Show me feedback"}
			/>
		</>
	);
};

export default App;
