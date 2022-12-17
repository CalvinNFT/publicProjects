import { useState } from "react";

const Contact = ({ person }) => (
	<li>
		{person.name}, {person.number}
	</li>
);

const App = () => {
	const [persons, setPersons] = useState([{ name: "Calvin Klein" }]);
	const [newName, setNewName] = useState("no name saved");
	const [mobile, setMobile] = useState([]);
	const [newMobile, setNewMobile] = useState("no number saved");

	const addContact = (event) => {
		event.preventDefault();
		const contactObject = {
			name: newName,
			number: newMobile,
		};
		const existingPersons = persons.filter((person) => newName === person.name);
		// const existingMobiles = mobile.filter(
		// 	(mobile) => newMobile === mobile.number
		// );

		const acceptAdd = () => {
			setPersons(persons.concat(contactObject));
			// alert(`${newName} was added to contacts`); // TODO: UNCOMMENT BEFORE PUBLISHING, disabled for development
		};
		// const acceptMobile = () => {
		// 	setMobile(mobile.concat(mobileObject));
		// };
		const action =
			1 === existingPersons.length
				? alert(
						`${newName} or their mobile number has already been added to your contacts`
				  )
				: acceptAdd();
		action;
		setNewName("no name saved");
	};

	const handleChange = (event) => {
		event.preventDefault;
		setNewName(event.target.value);
	};
	const handleMobileChange = (event) => {
		event.preventDefault;
		setNewMobile(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addContact}>
				<div>
					name: <input value={newName} onChange={handleChange} />
				</div>
				<div>
					number: <input value={newMobile} onChange={handleMobileChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{/* Näytä käyttäjät täällä, jos ei numeroa näytä "no number saved -- persons.map */}
			{persons.map((person, i) => (
				// added indexing to enable contacts with same names
				<Contact person={person} key={person.name + i} />
			))}
		</div>
	);
};

export default App;
