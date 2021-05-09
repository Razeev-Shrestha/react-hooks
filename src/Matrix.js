import React, {useState } from 'react'
import { MATRIX_FRAMES } from './data/matrix'
import { useDynamicTransition } from './hooks'

const SECONDS = 10
const minimumDelay = 1 * SECONDS
const minimumIncrement = 1

const Matrix = () => {
	const [delay, setDelay] = useState(500)
	const [increment, setIncrement] = useState(5)

	const index = useDynamicTransition({
		increment,
		delay,
		length: MATRIX_FRAMES.length,
	})

	const updateDelay = (e) => {
		const delay = Number(e.target.value)
		setDelay(delay < minimumDelay ? minimumDelay : delay)
	}
	const updateIncrement = (e) => {
		const increment = Number(e.target.value)
		setIncrement(increment < minimumIncrement ? minimumIncrement : increment)
	}
	return (
		<div className='Matrix'>
			<img src={MATRIX_FRAMES[index]} alt='matrix-animation' />
			<div className='multiform'>
				<div>
					Frame Transition Delay (seconds):
					<input type='number' onChange={updateDelay} />
				</div>
				<div>
					Frame Increment :
					<input type='number' onChange={updateIncrement} />
				</div>
			</div>
		</div>
	)
}

export default Matrix
