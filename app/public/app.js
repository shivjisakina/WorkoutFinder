// Document ready function
$( document ).ready(function() {
    console.log("ready!");

    // What the browser does when the submit button is clicked
    $(document).on("click", "#submitbtn", function () {

        // Setting the user input = to an empty array
         var userInput = [];

         var answersPush = {
         name: $('#name').val().trim(),
         image: $('#picture').val().trim(),
         scores: userAnswers
         };

         console.log(answersPush);
         console.log(userInput)


         // Trying to push the information to the endpoint and showing the modal
         $.post("/api/workouts", answersPush, function(data) {
         console.log(data.name);
         console.log(data.photo);
         // pushes info from modal
         $("#chosenWorkout").html("<h3>" + data.name + "</h3> <br> <img src=" + data.photo + "</img>");
         $('#workoutPopup').modal("show")
         })

    });
});