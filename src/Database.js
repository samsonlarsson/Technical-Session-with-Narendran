const firebase = require('firebase');

class Database {
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

    storeToken(token) {
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref('tokens/' + userId).set({
            token: token
        });
    }

    retrieveToken() {
        var userId = firebase.auth().currentUser.uid;
        var tokenPromise = firebase.database().ref('tokens/' + userId).once('token').then(function (snapshot) {
            return snapshot.val()
        });
        return tokenPromise.resolve()
    }

    retrieveAllTokens(){
        // to do: Write query to retrieve all registered tokens
    }
}

export default Database