import React, { useEffect, useState } from 'react'
import uuid from 'uuid/dist/v4'

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY'

const storeTasks = (taskMap) => {
	localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(taskMap))
}

const readStoredTasks = () => {
	const taskMapper = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY))
	return taskMapper ? taskMapper : { tasks: [], completedTasks: [] }
}

const Tasks = () => {
	const [taskText, setTaskText] = useState('')
	const storedTasks = readStoredTasks()
	const [tasks, setTasks] = useState([storedTasks.tasks])
	const [completedTasks, setCompletedTasks] = useState([
		storedTasks.completedTasks,
	])

	useEffect(() => {
		storeTasks({ tasks, completedTasks })
	})

	const addTask = () => {
		setTasks([...tasks, { taskText, id: uuid() }])
	}
	const completeTask = (completedTask) => () => {
		setCompletedTasks([...completedTasks, completedTask])
		setTasks(tasks.filter((task) => task.id !== completedTask.id))
	}
	const deleteTask = (task) => () => {
		setCompletedTasks(completedTasks.filter((t) => t.id !== task.id))
	}
	return (
		<div>
			<h3>Tasks</h3>
			<div className='form'>
				<input
					value={taskText}
					onChange={(e) => setTaskText(e.target.value)}
				/>
				<button onClick={addTask}>Add Task</button>
			</div>
			<div className='task-list'>
				{tasks.map((task) => {
					const { id, taskText } = task
					return (
						<div key={id} onClick={completeTask(task)}>
							{taskText}
						</div>
					)
				})}
			</div>
			<div className='completed-list'>
				{completedTasks.map(({ id, taskText }) => {
					return (
						<div key={id}>
							{taskText}
							{'  '}
							<span onClick={deleteTask} className='delete-task'>
								x
							</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Tasks
