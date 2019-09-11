import Database from './Database'

const firebase = require('firebase');

class Messaging {
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
        this.setup()
    }

    // Message receiving completed but SSL setup required to make it work. Not tested
    setup() {
        alert()
        const messaging = firebase.messaging();
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
                messaging.getToken().then((currentToken) => {
                    if (currentToken) {
                        //sendTokenToServer(currentToken);
                        console.log('currentToken', currentToken)
                        //updateUIForPushEnabled(currentToken);
                    } else {
                        // Show permission request.
                        console.log('No Instance ID token available. Request permission to generate one.');
                        // Show permission UI.
                        //updateUIForPushPermissionRequired();
                        //setTokenSentToServer(false);
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                    //showToken('Error retrieving Instance ID token. ', err);
                    //setTokenSentToServer(false);
                });
            } else {
                console.log('Unable to get permission to notify.');
            }
        });

        messaging.onTokenRefresh(() => {
            messaging.getToken().then((refreshedToken) => {
                console.log('Token refreshed.');
                // Indicate that the new Instance ID token has not yet been sent to the
                // app server.
                //setTokenSentToServer(false);
                // Send Instance ID token to app server.
                //sendTokenToServer(refreshedToken);
                // ...
            }).catch((err) => {
                console.log('Unable to retrieve refreshed token ', err);
                //showToken('Unable to retrieve refreshed token ', err);
            });
        });
        messaging.onMessage((payload) => {
            console.log('Message received. ', payload);
            alert('Message received. ', payload)
        });
    }

    // Not completed yet
    sendMessages() {
        const messaging = firebase.messaging();
        const database = new Database();
        var registrationTokens = database.retrieveAllTokens();
          
          // Subscribe the devices corresponding to the registration tokens to the
          // topic.
          messaging.subscribeToTopic(registrationTokens, 'newmembernotifier')
            .then(function(response) {
              // See the MessagingTopicManagementResponse reference documentation
              // for the contents of response.
              console.log('Successfully subscribed to topic:', response);
            })
            .catch(function(error) {
              console.log('Error subscribing to topic:', error);
            });
          
    }
}

export default Messaging