$(function(){
	$('#haha').on('click',function(){
		//alert('2')
		$('.content').load($(this).attr('p'));
	})
	//$('.leftnav li').eq(0).trigger('click');
})