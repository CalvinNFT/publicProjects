import { useState } from "react";

const Contact = ({ person }) => (
	<li>
		{person.name}, {person.number}
	</li>
);

const Phonebook = ({ persons }) => {
	return (
		<ul>
			{persons.map((person, i) => (
				// added indexing to enable contacts with same names
				<Contact person={person} key={person.name + i} />
			))}
		</ul>
	);
};

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Calvin Klein", number: "040-123456" },
		{ name: "Ada Lovelace", number: "39-44-5323523" },
		{ name: "Dan Abramov", number: "12-43-234345" },
		{ name: "Mary Poppendieck", number: "39-23-6423122" },
	]);
	const [newName, setNewName] = useState("no name saved");
	const [newMobile, setNewMobile] = useState("no number saved");
	const [search, setSearch] = useState("Calvin Klein");

	const addContact = (event) => {
		event.preventDefault();
		const contactObject = {
			name: newName,
			number: newMobile,
		};
		const existingPersons = persons.filter((person) => newName === person.name);
		const existingMobiles = persons.filter(
			(mobile) => newMobile === mobile.number
		);

		const acceptAdd = () => {
			setPersons(persons.concat(contactObject));
			// alert(`${newName} was added to contacts`); // TODO: UNCOMMENT BEFORE PUBLISHING, disabled for development
		};
		const secondScreening =
			0.9 < existingMobiles.length
				? alert(`${newName}'s mobile number already exists`)
				: acceptAdd();
		const action =
			1 === existingPersons.length
				? alert(
						`${newName} or their mobile number has already been added to your contacts`
				  )
				: secondScreening;
		action;
		setNewName("no name saved");
	};
	const submitSearch = (event) => {
		// const searchObject // ? Tarviiko
		event.preventDefault();
		setSearch(event.target.value);
	};

	const handleChange = (event) => {
		setNewName(event.target.value);
	};
	const handleMobileChange = (event) => {
		setNewMobile(event.target.value);
	};
	const handleSearchChange = (event) => {
		setNewSearch(event.target.value); // newSearch ja search erikseen eli voi hakea ja sit submittaa.
	};

	const searchId = persons.findIndex((person) => person.name === search);
	const isSearched = <li>{persons[searchId].name}</li>;
	return (
		<div>
			<h1>Phonebook</h1>
			<h2>Search</h2>
			<div>
				<form onSubmit={submitSearch}>
					Search by name:{" "}
					<input value={newSearch} onChange={handleSearchChange} />
					<button type="submit">search</button>
				</form>
			</div>
			<h2>Add new</h2>
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
			<h3>
				MVP is:
				<ul>{isSearched}</ul>
			</h3>
			<Phonebook persons={persons} search={search} />
		</div>
	);
};

export default App;
