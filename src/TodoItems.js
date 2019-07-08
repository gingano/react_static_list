import React from 'react'
import todos from './api/todos'
import TodoItem from './TodoItem'

class TodoItems extends React.Component {
  render () {
    const currentItems = todos.filter((element) => element.userId === this.props.userId)

    return (
      <ul className='listOfTodos'>
        {
          currentItems.map((data) => <TodoItem item={data}/>)
        }
      </ul>
    )
  }
}

export default TodoItems
