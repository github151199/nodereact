import React from 'react';

const AddUser = ({ onChangeForm, createUser }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                    <h2>Stwórz użytkownika </h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <input type="text"
                                    onChange={(e) => onChangeForm(e)}
                                    className="form-control"
                                    name="fname" id="fname"
                                    placeholder="Imię"
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <input type="text"
                                    onChange={(e) => onChangeForm(e)}
                                    className="form-control"
                                    name="lname" id="lname"
                                    placeholder="Nazwisko"
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <button type="button"
                                    onClick={(e) => createUser()}
                                    className="btn btn-success">
                                    Stwórz
                             </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddUser;
