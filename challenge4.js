$(document).ready(function() {
    $("#challenge4_form").submit(function(e) {
        var name = $("#name");
        var address = $("#addr");

        if (name.val().length == 0) {
            $("#nameError").css("display", "block");
            e.preventDefault();
        } else {
            $("#nameError").css("display", "none");
        }
        console.log("Do I get here?");

        if (address.val().length == 0) {
            $("#addrError").css("display", "block");
            e.preventDefault();
        } else {
            $("#addrError").css("display", "none");
        }
        console.log("Do I get here?");
    });
});