$(document).on('ready', function(){

	$('a').on('click', function(e){
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

});