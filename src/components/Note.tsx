import { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Note = props => {
const Note: React.FC<Props> = props => {
	const [deleteIcon, setDeleteIcon] = useState(false);

	const handleHover = (inButton: boolean) => {
		if (inButton) {
			setDeleteIcon(true);
		} else {
			setDeleteIcon(false);
		}
	};

	return (
		<article className="note">
			<h1>{props.title}</h1>
			<p>{props.note}</p>
			<button
				onMouseEnter={() => handleHover(true)}
				onMouseLeave={() => handleHover(false)}
				type="submit"
				onClick={e => {
					e.preventDefault();
					props.deleteFunc(props.arrayIndex);
				}}
			>
				{deleteIcon ? <DeleteForeverIcon /> : <DeleteIcon />}
			</button>
		</article>
	);
};

export default Note;
