/*change color menú*/
$(document).scroll(function() {    
    var scroll = $(this).scrollTop();

    if (scroll >= 350) {
        $("#header").addClass("active-fixed");
    } else {
        $("#header").removeClass("active-fixed");
    }

});

/*Menú Toggle and hidden*/
$(".switch").click(function() {
  $(".switch").toggleClass("on");
  $(".menu").toggleClass("opacity");
  $("#menu-movil").toggleClass("active");
});

$("#menu-movil").find("a").click(function(){
  $("#menu-movil").removeClass("active");
  $(".switch").toggleClass("on");
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

