import { useState } from 'react'

function useLocalStorage(key, initialValue) {
	const [localStorageValue, setLocalStorageValue] = useState(() =>
		getLocalStorageValue(key, initialValue),
	) //useState takes in a function, and another function to get items of localstorage if present.

	const setValue = (value) => {
		//check if it's a function or not
		const valueToStore = value instanceof Function ? localStorageValue : value

		// Set to state
		setLocalStorageValue(value)
		// Set to local Storage
		localStorage.setItem(key, JSON.stringify(valueToStore))
	}

	return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initialValue) {
	const itemFromStorage = localStorage.getItem(key)
	return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
}

export default useLocalStorage
