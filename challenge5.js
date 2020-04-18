$(document).ready(function() {
    var imgs = $("img");
    var msg = "Hover over an image below to display the image"

    $('img').mouseover(show)
    $('img').mouseleave(hide)
    $('img').focus(show)
    $('img').blur(hide)

    function show() {
        console.log("show")
        $('display').css("background-image", "url('" + this.src "')");
        $('display').html(this.alt);
    }

    function hide() {
        console.log("hide")
        $('display').css("background-image", "url('')");
        $('display').html(msg);
    }

});