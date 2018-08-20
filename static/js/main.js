(function($){
	$(document).ready(function(){
		$('.menu-ul .menu-li').on('click',function(){
			var index = $(this).index();
			if( $(this).find('.sub-ul').hasClass('active') ){
				$('.menu-ul .sub-ul').removeClass('active');
			} else {
				$('.menu-ul .sub-ul').removeClass('active');
				$('.menu-ul .sub-ul').eq(index).addClass('active');
			}	
		});
	});
})(jQuery);
