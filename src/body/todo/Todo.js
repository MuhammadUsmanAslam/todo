import React from "react";
import "./Todo.css";
import Delete from "./Delete.js";

function Todo({ todo, setTodos, todos }) {
	// let d = todo.done;
	return (
		<li className="todo">
			<input
				className="todo__checkbox"
				type="checkbox"
				checked={todo.done}
				disabled={todo.done ? true : false}
				onChange={(e) => {
					// setTodos([
					// 	(todos[todos.indexOf(todo)] = { ...todo, done: !todo.done }),
					// 	...todos,
					// ]);
					//
					setTodos([
						...todos.filter((t) => {
							return todo.task != t.task;
						}),
						{ ...todo, done: !todo.done },
					]);
					//
					// setTodos([...todos, { ...todo, done: !todo.done }]);
				}}
			/>
			<p className="todo__task">{todo.task}</p>
			<Delete todo={todo} setTodos={setTodos} todos={todos} />
		</li>
	);
}

export default Todo;
