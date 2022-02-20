import "./Body.css";
import React, { useEffect, useState } from "react";
import Todo from "./todo/Todo";

function Body() {
	const [todos, setTodos] = useState([]);
	// const [todos, setTodos] = useState([{}]);
	const [input, setInput] = useState("");

	useEffect(() => {
		setTodos([...JSON.parse(localStorage.getItem("todos"))]);
		console.log(JSON.parse(localStorage.getItem("todos")));
		console.log("todos fetched");
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
		console.log("todos changed");
	}, [todos]);

	return (
		<div className="body">
			<div className="body__header">
				<h1 className="body__title">Your Tasks For Today</h1>
				<form className="body__form">
					<input
						className="body__todo-input"
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
						type="text"
						placeholder="Add your Todo here"
					/>
					<button
						className="body__todo-button"
						disabled={input === "" ? true : false}
						onClick={(e) => {
							e.preventDefault();
							// setTodos([...todos, input]);
							setTodos([{ task: input, done: false }, ...todos]);
							setInput("");
						}}
					>
						Add New Task
					</button>
				</form>
			</div>
			<ul>
				{todos.map((todo, index) => {
					return (
						<Todo key={index} todo={todo} setTodos={setTodos} todos={todos} />
					);
				})}
			</ul>
			{/* <ul>
				{todos.map((todo, index) => {
					return (
						<></>
						// <Todo key={index} todo={todo} />
						// <li key={index}>
						// 	{todo}
						// 	<img
						// 		className="del_icon"
						// 		onClick={() => {
						// 			setTodos(
						// 				todos.filter((tdo) => {
						// 					return todo !== tdo;
						// 				})
						// 			);
						// 			console.log(todo);
						// 			console.log(`You are deleting element at index no: ${index}`);
						// 			localStorage.setItem("todos", JSON.stringify(todos));
						// 		}}
						// 		src={Delete}
						// 		alt="Delete"
						// 	/>
						// </li>
					);
				})}
			</ul> */}
		</div>
	);
}

export default Body;
