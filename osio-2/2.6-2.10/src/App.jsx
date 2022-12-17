import { useState } from "react";

const Contact = ({ person }) => <li>{person.name}</li>;

const App = () => {
	const [persons, setPersons] = useState([{ name: "Calvin Klein" }]);
	const [newName, setNewName] = useState("boogie man");
	const [existingPersons, setExistingPersons] = useState([]);

	const addContact = (event) => {
		event.preventDefault();
		const contactObject = {
			name: newName,
		};
		setPersons(persons.concat(contactObject));
		// alert(`${newName} was added to contacts`); // TODO: DELETE BEFORE PUBLISHING, disabled for development
		setNewName("");
	};

	const handleChange = (event) => {
		event.preventDefault;
		setNewName(event.target.value);
		persons.filter((existingCopies) => {
			newName === persons.name;
			setExistingPersons(existingCopies);
		}); // yritetään luoda lista, jossa
		const reject =
			0.5 < existingPersons.lenght
				? alert(`${NewName} is already in your contacts`)
				: setNewName(newName);
		reject;
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<ul>
				{persons.map((person, i) => (
					// added indexing to enable contacts with same names
					<Contact person={person} key={person.name + i} />
				))}
			</ul>
			<form onSubmit={addContact}>
				<div>
					name: <input value={newName} onChange={handleChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			...
		</div>
	);
};

export default App;
