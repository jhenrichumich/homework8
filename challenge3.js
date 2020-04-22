$(document).ready(function() {
    $("#ch3form").submit(function(e) {
        var grade = $('input[name="standing"]:checked').length;
        var year = $('input[name="gradeDate"]:checked').length;
        console.log(grade);
        console.log(year);
        if (grade == 0 && year == 0) {
            alert('You must select a class standing and graduation date!');
            e.preventDefault();
        } else if (grade == 0 && year != 0) {
            alert('You must select a class standing!');
            e.preventDefault();
        } else if (year == 0 && grade != 0) {
            alert('You must select a graduation date!');
            e.preventDefault();
        }
    });
});