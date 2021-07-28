/*eslint-disable*/


$(function () {

    $("li.mainLi").mouseover(function () {
        $(this).children("ul.subMenu").stop().fadeIn(300);
    });


    $("li.mainLi").mouseout(function () {
        $(this).children("ul.subMenu").stop().hide();
    });


    setInterval(fnslide, 5000);

    function fnslide() {
        $("div#shuttleFrame").animate({
            "margin-left": "-780px"
        },
            3000,
            function () {
                $("#shuttleFrame>a:nth-child(1)")
                .insertAfter("#shuttleFrame>a:nth-child(3)");
                $("#shuttleFrame").css({
                    "margin-left": "0"
                });
            }


        );

    }


    $("#popPoint").click(function(){
        
        $("div#layerBg").css({"display":"block"});

    });

    $("#btnArea").click(function(){
        $("div#layerBg").css({"display":"none"});
    });






});