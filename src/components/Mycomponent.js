import User from './User.js';
import React, { useState } from 'react';

function MyComponent() {
    const [listUser, setListUser] = useState([
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 24 },
    ]);
    const [count, setCount] = useState(0);

    const addNewUser = (user) => {
        setListUser([...listUser, { id: listUser.length + 1, ...user }]);
    };
    const deleteUser = (id) => {
        setListUser(listUser.filter((user) => user.id !== id));
    };
    return (
        <>
            {console.log('My Component')}
            <h1>My Component</h1>
            <User />
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p>{count}</p>
        </>
    );
}

export default MyComponent;
