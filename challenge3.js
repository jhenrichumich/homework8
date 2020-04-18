$(document).ready(function() {
    $("ch3form").submit(function(e) {
        var grade = $('input[name="standing"]:checked').val()
        var year = $('input[name="gradeDate"]:checked').val()
        console.log(grade);
        console.log(year);
        if (!grade || !year) {
            if (!grade && !year) {
                alert('You must select a class standing and graduation date!');
            }
        } else if (!grade) {
            alert('You must select a class standing!');
        } else(!year) {
            alert(' You must select a graduation date!');
        }
    });
});