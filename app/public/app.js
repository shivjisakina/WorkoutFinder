// Document ready function
$(document).ready(function () {
    console.log("ready!");

    // What the browser does when the submit button is clicked
    $(".workoutForm").on("submit", function (e) {

        e.preventDefault();

        // Getting the values of the user input
        var answersPush = {
            name: $('#name').val().trim(),
            image: $('#photo').val().trim(),
            q1: $('input[name=q1]:checked').val(),
            q2: $('input[name=q2]:checked').val(),
            q3: $('input[name=q3]:checked').val(),
            q4: $('input[name=q4]:checked').val(),
            q5: $('input[name=q5]:checked').val()
        };

        console.log(answersPush);

        // Trying to push the information to the endpoint and showing the modal
        $.post("/api/workouts", answersPush, function (data) {
            console.log(data.name);
            console.log(data.photo);
            // pushes info from modal
            $("#chosenWorkout").html("<h3>" + data.name + "</h3> <br> <img src=" + data.photo + "</img>");
            $('#workoutPopup').modal("show")
        })

    });
});