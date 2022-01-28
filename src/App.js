import CustomHookUseFetch from './components/CustomHookUseFetch'
// import UseCallbackExample from './components/UseCallbackExample'
// import UseMemoExample from './components/UseMemoExample'
// import UseRefExample1 from './components/UseRefExample1'
// import UseRefExample2 from './components/UseRefExample2'
// import UseRefExample3 from './components/UseRefExample3'

import CustomHookLocalStorage from './components/CustomHookLocalStorage'

function App() {
	return (
		<div className='container mt-5'>
			<CustomHookLocalStorage />
			<CustomHookUseFetch />
			{/* <UseRefExample1 />
			<UseRefExample2 />
			<UseRefExample3 />
			<UseMemoExample />
			<UseCallbackExample /> */}
		</div>
	)
}

export default App
