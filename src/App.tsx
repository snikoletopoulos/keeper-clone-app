import { useState } from "react";

import { Note as INote } from "types/notes.types";

import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Note from "components/Note";
import InputTask from "components/InputTask";

const App: React.FC = () => {
	const [notes, setNotes] = useState<INote[]>([]);

	const addNote = (note: INote) => {
		setNotes(prevValue => [...prevValue, note]);
	};

	const deleteNote = (noteIndex: number) => {
		setNotes(prevValue => {
			const newTaskList = [...prevValue];
			newTaskList.splice(noteIndex, 1);
			return newTaskList;
		});
	};

	return (
		<>
			<NavBar />
			<InputTask handleClick={addNote} />
			{notes.map((note, index) => (
				<Note
					key={index}
					arrayIndex={index}
					onDelete={deleteNote}
					title={note.title}
					note={note.content}
				/>
			))}
			<Footer />
		</>
	);
};

export default App;
