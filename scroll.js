$(document).ready(function() {


    $("a.bottomLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 900,
            easing: "swing"
        });
        return false;
    });


});