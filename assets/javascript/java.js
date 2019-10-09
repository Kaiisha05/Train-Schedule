var firebaseConfig = {
    apiKey: "AIzaSyBz6MwAVHiA5gaSwgPM1Aig0jacC-tt4zU",
    authDomain: "things-trains.firebaseapp.com",
    databaseURL: "https://things-trains.firebaseio.com",
    projectId: "things-trains",
    storageBucket: "",
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();