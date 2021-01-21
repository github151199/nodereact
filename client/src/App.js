import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DisplayUsers from './components/DisplayUsers';
import DisplayInfo from './components/DisplayInfo';
import AddUser from './components/AddUser';
import { APIgetAllUsers, APIcreateUser } from './Users';

class App extends Component {
  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  createUser = (e) => {
    APIcreateUser(this.state.user)
      .then(response => {
        this.setState({ numberOfUsers: this.state.numberOfUsers + 1 });
      });
  }

  getAllUsers = () => {
    APIgetAllUsers()
      .then(users => {
        this.setState({ users: users, numberOfUsers: users.length });
      });
  }

  onChangeForm = (e) => {
    let user = this.state.user;
    if (e.target.name === 'fname') {
      user.firstName = e.target.value;
    }
    else if (e.target.name === 'lname') {
      user.lastName = e.target.value;
    }
    this.setState({ user });
  }
  componentDidMount() {
    this.getAllUsers();
  }


  render() {
    return (
      <div className="App">
        <div style={{ marginTop: 20 }} className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <AddUser
                  onChangeForm={this.onChangeForm}
                  createUser={this.createUser} />
                <DisplayInfo
                  numberOfUsers={this.state.numberOfUsers}
                  getAllUsers={this.getAllUsers} />
              </div>
            </div>
            <div className="col-md-4">
              <DisplayUsers users={this.state.users} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
