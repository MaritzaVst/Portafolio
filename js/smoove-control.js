$(document).ready(function(){
	$('.fullrow').smoove({
		offset:'30%',
		moveY:'100px',
	});
	$('.proyecto:nth-child(2n-1)').smoove({
		offset:'30%',
		moveX: '-100px',
		moveY: '100px',
	});
	$('.proyecto:nth-child(2n)').smoove({
		offset:'30%',
		moveX: '100px',
		moveY: '100px',
	});
});