import styles from "./Footer.module.css";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; {new Date().getFullYear()}</p>
		</footer>
	);
};

export default Footer;
