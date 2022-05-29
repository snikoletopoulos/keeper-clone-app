import styles from "./NavBar.module.css";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const NavBar: React.FC = () => {
	return (
		<header className={styles["nav-bar"]}>
			<h1>
				<AssignmentTurnedInIcon /> Keeper
			</h1>
		</header>
	);
};

export default NavBar;
