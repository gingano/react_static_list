import React from 'react'

const TodoItem = ({item}) => {
  return (
    <li
      key={item.id}
    >
      <button className={item.completed ? 'completed' : null}/>
      <label>{item.title}</label>
    </li>
  )
}

export default TodoItem