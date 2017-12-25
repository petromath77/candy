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

	$('.slicknav_nav li a').on('click', function(e){	
		$('.slicknav_nav li a').removeClass('active_a');
		$(this).addClass('active_a');
	});

	$('.popup_content').magnificPopup({
			type: 'inline',
			showCloseBtn: true
	});
	$('.gallery_item').each(function(i){
		$(this).find('a').attr('href', '#work_' + i);
		$(this).find('.gal_descr_wrap').attr('id', 'work_' + i);
	});

	 $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

	 $('.animation_1').animated('fadeInRight', 'fadeOutRight');
	 $('.animation_2').animated('fadeInLeft', 'fadeOutLeft');
	 $('.animation_3').animated('fadeInDown', 'fadeOutUp');
	 $('.animation_4').animated('flipInY', 'flipOutY');
	 $('.animation_5').animated('fadeInUp', 'fadeOutDown');

});
$(window).on('load', function(){
	$('.loader_inner').fadeOut();
	$('.loader').delay(400).fadeOut('slow');
});
