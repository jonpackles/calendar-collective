$(document).ready(function(){
    $('.infoSection').click(function(){
        $(this).siblings().slideToggle('fast');
    });

    $('#more').click(function () {
        if($(this).hasClass('expanded')){
            $("#more").animate({ left: "99.5vw" }, 700);
            $("#more").removeClass('expanded');
            toLeft();

        } else {
            $("#more").animate({ left: "25.5vw" },700);
            $("#more").addClass('expanded');
            
            toRight();
        }
       
        $(this).toggleClass('expanded');
    });

    $('#more').click(function () {
        $("#more").animate({ left: "99.5vw" });

    });

    $('#videoLink').click(function () {
        $("#videoOverlay").fadeToggle('slow');

        if($('#videoOverlay').is(':visible')){
            $('iframe').attr('src', $('iframe').attr('src'));
        }
    });

    $('#leaveVoicemail').click(function () {
        $("#voicemailOverlay").fadeIn('slow');
    });

    $('#voicemailOverlay').click(function () {
        $("#voicemailOverlay").fadeOut('slow');
    });

    

})


// var svg = document.getElementById("arrows");
// var s = Snap(svg);
// var arrowLeft = Snap.select('#arrowLeft');
// var arrowRight = Snap.select('#arrowRight');
// var arrowLeftPoints = arrowLeft.node.getAttribute('d');
// var arrowRightPoints = arrowRight.node.getAttribute('d');

// var toRight = function () {
//     arrowLeft.animate({ d: arrowRightPoints }, 2000, mina.backout);
// }
// var toLeft = function () {
//     arrowLeft.animate({ d: arrowLeftPoints }, 2000, mina.backout);
// }
