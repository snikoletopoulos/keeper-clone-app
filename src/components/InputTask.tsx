import { useState } from "react";

import { Note } from "types/notes.types";

import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

interface Props {
	handleClick: (task: Note) => void;
}

const InputTask: React.FC<Props> = ({ handleClick }) => {
	const [note, setNote] = useState<Note>({
		title: "",
		content: "",
	});

	const [expansion, setExpansion] = useState(false);

	const handleChange: React.ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement
	> = event => {
		const { name, value } = event.target;
		setNote(prevNote => ({ ...prevNote, [name]: value }));
	};

	const addTask: React.FormEventHandler = event => {
		event.preventDefault();
		if (note.title === "") {
			alert("Please enter a task");
			return;
		}

		handleClick(note);
		setNote({
			title: "",
			content: "",
		});
	};

	return (
		<form className="create-note" onClick={() => setExpansion(true)}>
			{expansion && (
				<input
					onChange={handleChange}
					value={note.title}
					name="title"
					placeholder="Title"
					required
					autoComplete="off"
				/>
			)}
			<textarea
				onChange={handleChange}
				value={note.content}
				name="content"
				placeholder="Take a note"
				rows={expansion ? 3 : 1}
			/>
			<Zoom in={expansion}>
				<Fab onClick={addTask} type="submit">
					<AddIcon />
				</Fab>
			</Zoom>
		</form>
	);
};

export default InputTask;
