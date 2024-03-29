var firebaseConfig = {
    apiKey: "AIzaSyBz6MwAVHiA5gaSwgPM1Aig0jacC-tt4zU",
    authDomain: "things-trains.firebaseapp.com",
    databaseURL: "https://things-trains.firebaseio.com",
    projectId: "things-trains",
    storageBucket: "",
};

firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
var database = firebase.database();

// Initial Variables
var trainName = "";
var destination = "";
// var firstTrain;
// var frequency;
// At the initial load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
// database.ref().on("value", function (snapshot) {


//     $("#user-train-name").text(trainName);
//     $("#user-destination").text(destination);

// Capture Button Click
$("#submit").on("click", function (event) {
    event.preventDefault();

    // variables needed to populate the user input fields
    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    // firstTrain = $("#1st-train").val().trim();
    // frequency = $("#frequency").val().trim();



    // console.log(trainName);
    // console.log(destination);
    // console.log(firstTrain);
    // console.log(frequency);

    database.ref().set({
        train: trainName,
        dest: destination,
    });
});

database.ref().on("value", function (snapshot) {

    // log what's coming out of the snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().train);
    console.log(snapshot.val().dest);

    // Update HTML
    $("#user-train-name").prepend(trainName);
    $("#user-destination").prepend(destination);

    // handle any erros
}, function (errorObjects) {
    console.log("Errors handled: " + errorObjects.code);




});

        // })


