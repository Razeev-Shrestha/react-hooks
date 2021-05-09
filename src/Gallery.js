import React, {  useState } from 'react'
import { PICTURES } from './data/pictures'
import { useDynamicTransition } from './hooks'

const SECONDS = 1000
const minimumDelay = 1 * SECONDS
const minimumIncrement = 1

const Gallery = () => {
	const [delay, setDelay] = useState(SECONDS * 3)
	const [increment, setIncrement] = useState(1)
	const index = useDynamicTransition({
		delay,increment,length:PICTURES.length
	})


	const updateDelay = (e) => {
		const delay = Number(e.target.value) * SECONDS
		setDelay(delay < minimumDelay ? minimumDelay : delay)
	}

	const updateIncrement = (e) => {
		const increment = Number(e.target.value)
		setIncrement(increment < minimumIncrement ? minimumIncrement : increment)
	}
	return (
		<div className='Gallery'>
			<img src={PICTURES[index].image} alt='gallery' />
			<div className='multiform'>
				<div>
					Gallery transition delay (seconds)
					<input type='number' onChange={updateDelay} />
				</div>
				<div>Galley increment :</div>
				<input type='number' onChange={updateIncrement} />
			</div>
		</div>
	)
}

export default Gallery
