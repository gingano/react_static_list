import React from 'react';
import todos from './api/todos';
import users from "./api/users";

class TodoItems extends React.Component {

    render() {
        let currentItems = todos.filter((element) => element.userId === this.props.state.userId)

        return (
            <ul className='theList'>
                {
                    currentItems.map((item) =>
                        <li
                            key={item.id}
                        >
                            <button className={item.completed ? 'completed-true' : 'completed-false'}/>
                            <label>{item.title}</label>
                        </li>
                    )
                }
            </ul>
        );
    }
}

export default TodoItems;