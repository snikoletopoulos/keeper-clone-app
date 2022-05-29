import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function InputTask({ handleClick }) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	const [expansion, setExpansion] = useState(false);

	function handleChange(e) {
		const { name, value } = e.target;
		setNote(prevNote => ({ ...prevNote, [name]: value }));
	}

	function addTask(e) {
		e.preventDefault();
		if (note.title !== "") {
			handleClick(note);
			setNote({
				title: "",
				content: "",
			});
		} else {
			alert("Please enter a task");
		}
	}

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
				rows={expansion ? "3" : "1"}
			/>
			<Zoom in={expansion}>
				<Fab onClick={addTask} type="submit">
					<AddIcon />
				</Fab>
			</Zoom>
		</form>
	);
}
