import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
	const [newName, setNewName] = useState("");

	// Lisätään inputtiin value="value" ja onChange=(() => setNewName({value}))

	// Set new name concatilla persons listaan ja lopuks tyhjennetään newname

	// Ehdollinen muuttuja jos nimi on const setNewName = () => persons.filter({value}) > 0.5) ? persons.concat({value}) : console.alert("`${persons.name} already excists`")

	// onSubmit kutsuu funktioa joka hyödyntäen setNewNamea kutsuu ehdollista muuttujaa

	console.log(setNewName);

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input />
				</div>
				<div>
					<button
						type="submit"
						value="add contact"
						onChange={() => setNewName(value)}
					>
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			...
		</div>
	);
};

export default App;
