import React from "react";
import FireBase from './FireBase';
var isUserLoggedIn = false;
var userLabel;

class UserLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        var firebase = new FireBase();
        firebase.getUserDetails(setUserInfo);
        userLabel = this;
    }

    signOut(){
        var firebase = new FireBase();
        firebase.logOutUser();
    }

    rerender() {
        this.forceUpdate()
    }

    render() {
        if (isUserLoggedIn) {
            return (
                <li><button type="button" class="btn btn-primary" onClick={this.signOut}>Signout</button></li>
            );
        } else {
            return('');
        }
    }
}

function setUserInfo(user) {
    if (user) {
        console.log(user)
        isUserLoggedIn = true
        console.log(isUserLoggedIn)
        userLabel.rerender()
    }
    else {
        isUserLoggedIn = false
        userLabel.rerender()
    }
}

export default UserLabel;