$(document).ready(function(){
	var maxHeight=0;
	"use strict"
	var image = $(".proyecto").find("img");
	$(".proyecto").each(function(){
		var heightImage = $(this).find("img").height();
		if(heightImage > maxHeight){
			maxHeight = heightImage;
		}
	});
	image.height(maxHeight);
});