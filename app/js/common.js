$(function() {
	$('#menu').slicknav({
		prependTo:'nav',
		parentTag:'div',
	});
	$('.mix_wrap').mixItUp();
	$('#menu li a').mPageScroll2id();
	$('#menu li a').on('click', function(){
		$('#menu li a').removeClass('active_a');
		$(this).addClass('active_a');
	});
	$('.slicknav_nav li a').mPageScroll2id();
	$('.slicknav_nav li a').on('click', function(){
		$('.slicknav_nav li a').removeClass('active_a');
		$(this).addClass('active_a');
		//$('.slicknav_nav').slideUp(600);
	});
});
