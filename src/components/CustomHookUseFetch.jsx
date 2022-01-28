import React from 'react'
import useFetch from '../hooks/useFetch'

function CustomHookUseEffect() {
	const { loading, data } = useFetch(
		'https://jsonplaceholder.typicode.com/posts',
		{},
	) //destructured response

	if (loading) {
		return <h3>Loading...</h3>
	}
	return (
		<div>
			{data.map((post) => (
				<p key={post.id}>{post.title}</p>
			))}
		</div>
	)
}

export default CustomHookUseEffect
