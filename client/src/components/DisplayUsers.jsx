import React from 'react'

const DisplayUsers = ({ users }) => {
    if (users.length === 0) return null;

    const OneUser = (user, index) => {
        return (
            <p>{index + 1}. {user.firstName} {user.lastName}</p>
        )
    }

    const usersContent = users.map((user, index) =>
        OneUser(user, index));

    return (
        <div className="container">
            <h2>Użytkownicy</h2>
            {usersContent}
        </div>
    )
}

export default DisplayUsers;
