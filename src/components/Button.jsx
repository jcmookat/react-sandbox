import React from 'react'

function Button({ addTask }) {
	console.log('Button rendered')
	return (
		<div>
			<button className='btn btn-primary' onClick={addTask}>
				Add Task
			</button>
		</div>
	)
}

export default React.memo(Button)

// const Button = React.memo(({ addTask }) => {
// 	console.log('Button rendered')
// 	return (
// 		<div>
// 			<button className='btn btn-primary' onClick={addTask}>
// 				Add Task
// 			</button>
// 		</div>
// 	)
// })
