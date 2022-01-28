import useLocalStorage from '../hooks/useLocalStorage'

function CustomHookLocalStorage() {
	const [task, setTask] = useLocalStorage('task', '')
	const [tasks, setTasks] = useLocalStorage('tasks', [])

	const onSubmit = (e) => {
		e.preventDefault()

		const taskObj = {
			title: task,
			completed: false,
			dateCreated: new Date().toLocaleDateString(),
		}

		setTasks([...tasks, taskObj])
	}

	return (
		<div>
			<form onSubmit={onSubmit} className='w-50'>
				<div className='mb-3'>
					<label className='form-label'>Task</label>
					<input
						className='form-control'
						type='text'
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
			<hr />
			{tasks.map((item) => (
				<h3 key={item.date}>{item.title}</h3>
			))}
		</div>
	)
}

export default CustomHookLocalStorage
