function showMenu(obj){
	var status=$(obj).attr('data-is-open');
	
	if(status=='0'){
		$('.menu')
		.css({
			'width': '40%'
		});
		$(obj).attr("data-is-open",'1');
		
		$('.container-fluid').css({
			'left':'40%'
		});
	}else{
		$('.menu')
		.css({
			'width': '0'
		});
		$(obj).attr("data-is-open",'0');
		
		$('.container-fluid').css({
			'left':'0'
		});
	}
}


$(function() {
    $('.banner').unslider({
		speed: 500,               //  The speed to animate each slide (in milliseconds)
		delay: 3000,              //  The delay between slide animations (in milliseconds)
		complete: function() {},  //  A function that gets called after every slide animation
		keys: true,               //  Enable keyboard (left, right) arrow shortcuts
		dots: true,               //  Display dot navigation
		fluid: true              //  Support responsive design. May break non-responsive designs
	});
});