import { useState } from "react";
import "./App.css";

import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Note from "components/Note";
import InputTask from "components/InputTask";

const App: React.FC = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = task => {
		setTasks(prevValue => [...prevValue, task]);
	};

	const deleteTask = task => {
		setTasks(prevValue => {
			const newTaskList = [...prevValue];
			newTaskList.splice(task, 1);
			return newTaskList;
		});
	};

	return (
		<>
			<NavBar />
			<InputTask handleClick={addTask} />
			{tasks.map((note, index) => (
				<Note
					key={index}
					arrayIndex={index}
					deleteFunc={deleteTask}
					title={note.title}
					note={note.content}
				/>
			))}
			<Footer />
		</>
	);
};

export default App;
