import { useRef } from 'react'

function UseRefExample1() {
	const inputRef = useRef()
	const paraRef = useRef()

	const onSubmit = (e) => {
		e.preventDefault()

		console.log(inputRef.current.value) //inputRef gives an object "current", and current is the DOM

		inputRef.current.value = 'Hello'
		inputRef.current.style.backgroundColor = 'red'
		paraRef.current.innerText = 'Goodbrye'
	}

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					ref={inputRef}
					id='name'
					className='form-control mb-2'
				/>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
				<p onClick={() => inputRef.current.focus()} ref={paraRef}>
					Hello
				</p>
			</form>
			<br />
			<hr />
		</div>
	)
}

export default UseRefExample1
