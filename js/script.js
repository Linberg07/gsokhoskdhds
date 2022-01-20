function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();

$(document).ready(function(){
	$('.fitback-body').slick();

	let input = $('.check-input');
	input.each(function(){
		$(this).keyup(function(){
			$(this).parent().addClass('active');
		})
		$(this).click(function(){
			$(this).parent().addClass('active');
		})
		$(this).change(function(){
			$(this).parent().removeClass('active');
		})
		$(this).blur(function(){
			$(this).parent().removeClass('active');
		})
	})




	let w = $(window).width();
	let menu = $('.header-list');
	let burgerBody = $('.burger-menu__body');
	let burgerBtn = $('.header-burger');
	burgerBtn.click(function(){
		$(this).toggleClass('active');
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.container').toggleClass('lock');
	})
	if(w<993){
		menu.appendTo(burgerBody);
	}else{
		menu.prependTo($('.header-navigation'));
	}
})
$(window).resize(function(){
	let w = $(window).width();
	let menu = $('.header-list');
	let burgerBody = $('.burger-menu__body');
	let burgerBtn = $('.header-burger');
	burgerBtn.click(function(){
		$(this).toggleClass('active');
		$('.burger-menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.container').toggleClass('lock');
	})
	if(w<993){
		menu.appendTo(burgerBody);
	}else{
		menu.prependTo($('.header-navigation'));
	}
})


