import { useState, useEffect } from "react";
import Note from "./components/notes";
import axios from "axios";

const App = (props) => {
	const [notes, setNotes] = useState(props.notes);
	const [newNote, setNewNote] = useState("a new note...");
	const [showAll, setShowAll] = useState(true);
	useEffect(() => {
		console.log('effect')
		axios
		  .get('http://localhost:3001/notes')
		  .then(response => {
			console.log('promise fulfilled')
			setNotes(response.data)
		  })
	  }, [])

	const addNote = (event) => {
		event.preventDefault();
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() > 0.5,
			id: notes.length + 1,
		};

		setNotes(notes.concat(noteObject));
		setNewNote("Plain Jane");
	};

	const handleNoteChange = (event) => {
		console.log(event.target.value);
		setNewNote(event.target.value);
	};

	const notesToShow = showAll ? notes : notes.filter((note) => note.important);

	return (
		<div>
			<h1>Notes</h1>
			<button onClick={() => setShowAll(!showAll)}>
				{showAll ? "filter important" : "show all"}
			</button>
			<ul>
				{notesToShow.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</ul>
			<form onSubmit={addNote}>
				<input value={newNote} onChange={handleNoteChange} />
				<button type="submit">save</button>
			</form>
		</div>
	);
};

export default App;
