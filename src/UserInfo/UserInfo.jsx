import React from "react";

class User{
    constructor(id, name, birth, email){
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.email = email;
    }
}

const users = [
    new User(1,"John Doe", "1970-01-01", "johndoe@gmail.com"),
    new User(2,"Jane Doe", "1974-01-01", "jdoe@wp.pl"),
    new User(3,"Bob Smith", "2000-05-23", "smith@wp.pl"),
]

function UserInfo(){
    const [selected, setSelected] = React.useState();

    function handleSelect(event){
        setSelected(event.target.value);
    }

    const user = users.find(u => u.id === parseInt(selected));

    return (
        <main>
            <h1>User Information</h1>
            <select onChange={event => handleSelect(event)}>
                <option disabled selected>Choose User...</option>
                { users.map(u => <option value={u.id}>{u.name}</option>) }
            </select>

            {user && (
                <div>
                    <h1>{user.name}</h1>
                    <p><b>Date of Birth:</b> {user.birth}</p>
                    <p><b>Email Address:</b> {user.email}</p>
                </div>
            )}
        </main>
    );
}

export default UserInfo;