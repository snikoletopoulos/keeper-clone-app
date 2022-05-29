import { useState } from "react";
import styles from "./InputTask.module.css";

import { Note } from "types/notes.types";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

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
		<form className={styles["create-note"]} onClick={() => setExpansion(true)}>
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
