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
			disableOn: 700,
			type: 'inline',
			showCloseBtn: true
		});
	 $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
});
