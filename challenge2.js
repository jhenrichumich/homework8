$(document).ready(function() {
    $('#sameAddress').change(function() {
        if (this.checked) {
            $('#home').val($('#bill').val());
            $("#home").prop("disabled", true);
            $('#home').css('background-color', '#d1d1d1');
        } else {
            $('#home').val('');
            $("#home").prop("disabled", false);
            $('#home').css('background-color', 'white');
        }
    });
});