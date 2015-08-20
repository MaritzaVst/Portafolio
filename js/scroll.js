/*change color menú*/
$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 350) {
        $("#scroll").addClass("active");
    } else {
        $("#scroll").removeClass("active");
    }

});

/*Menú Toggle*/
$(".switch").click(function() {
  $(this).toggleClass("on");
});

/*Scroll top*/
$(document).on('click', 'a.smooth', function(e) {
	e.preventDefault();
    var $link = $(this);
    var anchor  = $link.attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top
    }, 1000);
});

// $('.imagen').hover(function(){
//     $(this).find(".overlay").addClass('active');
//     $(this).find(".overlay").toggleClass("active");
// });

/*MENÚ HIDEEN*/
$(".switch").click(function(){
    $(".menu").toggleClass("opacity");
});