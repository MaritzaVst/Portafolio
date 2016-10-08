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
  $(this).toggleClass("on");+
  $(".menu").toggleClass("opacity");
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

