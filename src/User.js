import React from 'react';
import users from './api/users';

class User extends React.Component {
    render() {
        const index = Number(this.props.userId);
        return (

         this.props.userId !== '' ?
         <div className='user'>
             <h2>Information about user:</h2>
             <p>Name: {users[index - 1].name}</p>
             <p>Username: {users[index - 1].username}</p>
             <p>Email: {users[index - 1].email}</p>
             <p>Phone: {users[index - 1].phone}</p>
             <p>Website: {users[index - 1].website}</p>
             <p>Company: {users[index - 1].company.name}</p>
          </div>
         :
         <div className='user'>
            <p>Please select a user</p>
            <p>There you will see information about selected user</p>
         </div>
        );
    }
}

export default User;