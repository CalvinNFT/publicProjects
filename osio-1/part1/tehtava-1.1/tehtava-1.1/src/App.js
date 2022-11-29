const App = () => {
	const course = "Half Stack application development";
	const part1 = "Fundamentals of React";
	const exercises1 = 10;
	const part2 = "Using props to pass data";
	const exercises2 = 7;
	const part3 = "State of a component";
	const exercises3 = 14;

	return (
		<>
			<Header course={course} />
			<Content
				part1={"Fundamentals of React"}
				part2={"Using props to pass data"}
				part3={"State of a component"}
				exercises1={10}
				exercises2={7}
				exercises3={14}
			/>
			<Total totalExercises={exercises1 + exercises2 + exercises3} />
		</>
	);
};

const Header = (props) => {
	return (
		<>
			<h1>Current course: {props.course}</h1>
		</>
	);
};

const Part = (props) => {
	return (
		<>
			<p>
				Part on {props.part} includes {props.exercises} exercises
			</p>
		</>
	);
};

const Content = (props) => {
	return (
		<>
			<Part part={props.part1} exercises={props.exercises1} />
			<Part part={props.part2} exercises={props.exercises2} />
			<Part part={props.part3} exercises={props.exercises3} />
		</>
	);
};

const Total = (props) => {
	return (
		<>
			<p>Number of exercises {props.totalExercises}</p>
		</>
	);
};

export default App;
