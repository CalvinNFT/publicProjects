import React from "react";

const Course = ({ courses }) =>
	courses.map((course, i) => {
		const parts = courses[i].parts;
		return (
			<>
				<h1>Current course: {course.name}</h1>
				<ul>
					{parts.map((part) => (
						<li key={`${i}.${part.id}`}>
							ID {`${i}.${part.id}`}: {part.name} {part.exercises}
						</li>
					))}
				</ul>
				<p>
					Total excersises:
					{parts.reduce((sum, part) => sum + part.exercises, 0)}
				</p>
			</>
		);
	});

export default Courses;
