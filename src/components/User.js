import { useEffect, useMemo, useState, memo } from 'react';

function User(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    // useEffect(() => {
    //     if (props.listUser.length === 0) {
    //         console.log("No user");
    //     }
    // }, [props.listUser]);
    return (
        <>
            <h1>User List</h1>
            {console.log('User List')}
            {/* <ul>
                {props.listUser.map((user) => (
                    <div key={user.id}>
                        <li key={user.id}>{user.name} - {user.age}</li>
                        <button onClick={() => props.deleteUser(user.id)}>Delete</button>
                    </div>
                ))}
            </ul>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <button onClick={() => props.addNewUser({ name, age })}>Add User</button> */}
        </>
    );
}

export default memo(User);
