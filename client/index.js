import $ from 'jquery';

$(document).ready(function () {

    $(".menuitem").click(function () {
        $(".menu").toggleClass("visible");
    });

    $(".menuitem > .menu > li").each(function(){
        console.log("value");
    })

    showinput(document);

    $(window).on('resize', function () {
        showinput(this);
    });

    function showinput(content) {
        if ($(content).width() < 700) {
            $(".search").click(function () {
                $(".search input").toggleClass("visible");
            })
        }
    }
});
