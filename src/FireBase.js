const firebase = require('firebase');

class FireBase {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyCDLXfi5hmbNUwk-lQc1nGCvdz3GcjVxUA",
            authDomain: "fir-demo-31852.firebaseapp.com",
            databaseURL: "https://fir-demo-31852.firebaseio.com",
            projectId: "fir-demo-31852",
            storageBucket: "fir-demo-31852.appspot.com",
            messagingSenderId: "225120831032",
            appId: "1:225120831032:web:2438a9777a09b3603e48cd"
        };
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }


    }

    registerUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).t(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    signinUser(email, password, successFunction, errorFunction) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(successFunction).catch(errorFunction);
    }

    logOutUser() {
        firebase.auth().signOut().then(function () {
            console.log('Signed Out');
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    }

    getUserDetails(func){
        firebase.auth().onAuthStateChanged(func)          
    }
}

export default FireBase