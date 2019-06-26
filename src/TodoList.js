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
    let currentUser = item.id;
    this.setState({
      userId: currentUser
    })
  };

  render () {
    return (
      <div className='toDoListMain'>
        <ul className='select-user'>
          {
            users.map((item) =>
              <li>
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
          toggleStatus={this.toggleStatus}
          remove={(index) => { this.remove(index) }}
          state={this.state}
        />
        <User
          state={this.state}
        />
      </div>
    )
  }
}

export default TodoList
