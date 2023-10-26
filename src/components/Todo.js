import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
          <div className='things'>
            <p onClick={() => editTodo(task.id)}>#</p>
            <p onClick={() => deleteTodo(task.id)}>@</p>
          </div>
    </div>
  )
}
