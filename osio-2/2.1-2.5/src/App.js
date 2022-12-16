import React from "react";

const App = () => {
	const course = {
		name: "Half Stack application development",
		id: 1,
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2,
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3,
			},
		],
	};

	return (
		<div>
			<Course course={course} />
		</div>
	);
};

const Course = ({ course }) => {
	const parts = course.parts;
	return (
		<>
			<h1>Current course: {course.name}</h1>
			<ul>
				{parts.map((part) => (
					<li key={part.id}>
						{part.name} {part.exercises}
					</li>
				))}
			</ul>
		</>
	);
};

export default App;
