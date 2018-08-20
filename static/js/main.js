(function($){
	$(document).ready(function(){
		$('.menu-ul .menu-li').on('click',function(){
			var index = $(this).index();
			$('.menu-ul .sub-ul').removeClass('active');
			$('.menu-ul .sub-ul').eq(index).addClass('active');
			if( $(this).find('.sub-ul').hasClass('active') ){
				$('.menu-ul .sub-ul').removeClass('active');
			};
		});
	});
})(jQuery);
