$(document).ready(function(){
	$('.fullrow').smoove({
		offset:'30%',
		moveY:'100px',
	});
	$('.proyecto').smoove({
		offset:'30%',
		moveY: '100px',
	});
	$('.proyecto:nth-child(2n-1)').smoove({
		moveX: '-100px',
	});
	$('.proyecto:nth-child(2n)').smoove({
		moveX: '100px',
	});
});