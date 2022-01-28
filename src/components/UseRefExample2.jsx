import { useEffect, useRef, useState } from 'react'

function UseRefExample2() {
	const renders = useRef(1) //creates a DOM

	const [name, setName] = useState('')
	const prevName = useRef('')

	useEffect(() => {
		renders.current = renders.current + 1
		prevName.current = name
	}, [name]) //name as a dependency, everytime name changes, useEffect will run
	return (
		<div>
			<h1>Render: {renders.current}</h1>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='form-control mb-3'
			/>
			<p>Prev Name State: {prevName.current}</p>
			<br />
			<hr />
		</div>
	)
}

export default UseRefExample2
