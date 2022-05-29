import { useState } from "react";
import styles from "./Note.module.css";

import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface Props {
	title: string;
	note: string;
	arrayIndex: number;
	onDelete: (index: number) => void;
}

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
		<article className={styles.note}>
			<h1>{props.title}</h1>
			<p>{props.note}</p>
			<button
				onMouseEnter={() => handleHover(true)}
				onMouseLeave={() => handleHover(false)}
				type="submit"
				onClick={e => {
					e.preventDefault();
					props.onDelete(props.arrayIndex);
				}}
			>
				{deleteIcon ? <DeleteForeverIcon /> : <DeleteIcon />}
			</button>
		</article>
	);
};

export default Note;
