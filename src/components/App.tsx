import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Note from "./Note";
import InputTask from "./InputTask";

const App = () => {
	const [tasks, setTasks] = useState([]);

	function addTask(task) {
		setTasks(prevValue => [...prevValue, task]);
	}

	function deleteTask(task) {
		setTasks(prevValue => {
			const newTaskList = [...prevValue];
			newTaskList.splice(task, 1);
			return newTaskList;
		});
	}

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
