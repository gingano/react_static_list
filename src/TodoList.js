import React from 'react'
import TodoItems from './TodoItems'
import users from './api/users'
import User from './User'

class TodoList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      userId: ''
    }
  }

  chooseUser (item) {
    const userId = item.id;
    this.setState({
      userId
    })
  };

  render () {
    return (
      <div className='toDoListMain'>
        <ul className='select-user'>
          {
            users.map((item) =>
              <li
                key={item.id}
              >
                <button
                  onClick={() => this.chooseUser(item)}
                >
                  {item.name}
                </button>
              </li>
            )
          }
        </ul>
        <TodoItems
            userId={this.state.userId}
        />
        <User
          userId={this.state.userId}
        />
      </div>
    )
  }
}

export default TodoList
