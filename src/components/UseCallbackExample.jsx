import React, { useState, useCallback } from 'react'
import Button from './Button'

function UseCallbackExample() {
	const [tasks, setTasks] = useState([])
	// const addTask = () => {
	// 	setTasks((prevState) => [...prevState, 'Some Task'])
	// }

	const addTask = useCallback(() => {
		setTasks((prevState) => [...prevState, 'Some Task'])
	}, [setTasks])
	return (
		<div>
			<Button addTask={addTask} />
			{tasks.map((task, index) => (
				<p key={index}>{task}</p>
			))}
		</div>
	)
}

export default UseCallbackExample
