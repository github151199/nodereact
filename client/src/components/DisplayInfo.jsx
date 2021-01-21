import React from 'react';
const DisplayInfo = ({ numberOfUsers, getAllUsers }) => {
    return (
        <>
            <h4 style={{ marginLeft: 12, marginRight: 20 }}>
                Ilość użytkowników: {numberOfUsers}
            </h4>
            <button type="button" onClick={(e) => getAllUsers()}
                className="btn btn-success">
                Pobierz użytkowników
           </button>
        </>
    )
}
export default DisplayInfo;
