import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import FireBase from './FireBase';
import UserLabel from './UserLabel';
import Profile from './Profile';
import Messaging from './Messaging';

var isUserLoggedIn = false;
var app;
var messaging;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    var firebase = new FireBase();
    app = this;
    messaging = new Messaging()
  }

  rerender(){
    this.forceUpdate()
  }

  render() {
    return (
      <body>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"></link>

        <Router>
          <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a to="/" class="navbar-brand">FirebaseDemo</a>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <UserLabel />
                  <li>
                    <Link to="/">Profile</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <hr />
          <br></br>
          <div class="container body-content">
            <Route exact path="/" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

          </div>
        </Router>

      </body>
    );
  }
}

export default App;