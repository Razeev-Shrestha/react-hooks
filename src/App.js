import { useState } from 'react'
import Gallery from './Gallery'
import Joke from './Joke'
import Matrix from './Matrix'
import Stories from './Stories'
import Tasks from './Tasks'

const App = () => {
	const [userQuery, setUserQuery] = useState('')
	const [showGallery, setShowGallery] = useState(true)
	const searchQuery = () => {
		window.open(`https://google.com/search?q=${userQuery}`, '_blank')
	}
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			searchQuery()
		}
	}
	const toggleShowGallery = () => {
		setShowGallery(!showGallery)
	}
	return (
		<div className='App'>
			<h1>Hello World</h1>
			<div className='form'>
				<input
					value={userQuery}
					onChange={(e) => {
						console.log(userQuery)
						setUserQuery(e.target.value)
					}}
					onKeyPress={handleKeyPress}
				/>
				<button onClick={searchQuery}>Search</button>
			</div>
			<hr />
			<Joke />
			<hr />
			<Tasks />
			<hr />
			<div>
				{showGallery ? <Gallery /> : null}
				<button onClick={toggleShowGallery}>
					{showGallery ? 'Hide' : 'Show'} Gallery
				</button>
			</div>
			<hr />
			<Stories />
			<hr />
			<Matrix />
		</div>
	)
}

export default App
