$(document).on('ready',function(){
	AddBackground();
	SliderFunction();
});

function AddBackground(){

	$('.slide').each(function(i,e){
		var url = $(e).data('background');
		$(e).css('background-image', "url("+url+")");
	});
}

function SliderFunction(){
	var intv;
	var banner = {
		padre: $("#banner"),
		numeroSlides: $("#banner").children('.slide').length,
		posicion: 1
	};

	banner.padre.children().first().css({
		'left':0
	});


	intv = setInterval(AnimarSlider, 10000);


	$("#slider-next").on('click', function(e){
		e.preventDefault();
		AnimarSlider();
		clearInterval(intv);
		intv = setInterval(AnimarSlider, 10000);
	});


	function AnimarSlider(){
		
		if (banner.posicion < banner.numeroSlides) {
			
			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner .active').removeClass('active').next().addClass('active').animate({
				'left': 0
			});
			$('#banner .active').prev().animate({
				'left': '-100%'
			});

			banner.posicion = banner.posicion + 1;
		}else{

			$('#banner .active').animate({
				'left': '-100%'
			});

			banner.padre.children().not('.active').css({
				'left': '100%'
			});

			$('#banner .active').removeClass('active');
			banner.padre.children().first().addClass('active').animate({
				'left':0
			});

			banner.posicion = 1;
		}
	}

	$("#slider-prev").on('click', function(e){
		e.preventDefault();
		clearInterval(intv);
		if (banner.posicion > 1) {
			banner.padre.children().not('.active').css({
				'left': '-100%'
			});

			$('#banner .active').animate({
				'left': '100%'
			});

			$('#banner .active').removeClass('active').prev().addClass('active').animate({
				'left': 0
			});

			banner.posicion = banner.posicion - 1;

		}else{
			banner.padre.children().not('.active').css({
				'left': '-100%'
			});

			$('#banner .active').animate({
				'left': '100%'
			});

			$('#banner .active').removeClass('active');
			banner.padre.children().last().addClass('active').animate({
				'left': '0'
			});

			banner.posicion = banner.numeroSlides;
		}

		intv = setInterval(AnimarSlider, 10000);
	});
}


