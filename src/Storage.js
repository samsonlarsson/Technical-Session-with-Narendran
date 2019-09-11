const firebase = require('firebase');

class Storage {
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

    storeNewFile(image){
        var user =  firebase.auth().currentUser
        if(user == null){
            return
        }
        var email = user.email
        var storageRef = firebase.storage().ref();
        var splitName = image.name.split(".")
        var extension = splitName[splitName.length-1]

        let path = email + '/' + 'profilepic'  
        var ref = storageRef.child(path);
        ref.put(image).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
          }).catch(function(error){console.log(error)});
    }

    getFile(){
        var user =  firebase.auth().currentUser
        //alert(user)
        if(user == null){
            return
        }
        var email = user.email
        var storageRef = firebase.storage().ref();
        let path = email + '/' + 'profilepic' 
        storageRef.child(path).getDownloadURL().then(function (url) {
            //alert(url)
            console.log(url)
            var img = document.getElementById('profile');
            img.src = url;
            return url;
        }).catch(function(err){
            //alert(err)
            console.log(err)
        });
    }
}

export default Storage