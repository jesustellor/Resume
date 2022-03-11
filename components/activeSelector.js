$(document).ready(function() {
    $("#navMenu").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

    });
});