import React from "react";
import { Redirect } from 'react-router-dom'
import FireBase from './FireBase';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert('Login request was submitted' + this.state.email);
    var fireBase = new FireBase()
    fireBase.signinUser(this.state.email, this.state.password,this.successFunction,this.errorFunction);

    event.preventDefault();
  }

  successFunction(user) {
    console.log("I am here")
    this.props.history.push('/Home')
  }

  errorFunction(error){
    console.log(error);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group row">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" value={this.state.email} onChange={this.handleEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    );
  }
}



export default Login;