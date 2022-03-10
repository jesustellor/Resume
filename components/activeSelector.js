$(document).ready(function() {
    $("li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

    });
});