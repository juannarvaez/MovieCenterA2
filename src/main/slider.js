var pointer = 0;

$(document).on('ready', function(){
	
	$('.bt_left').on('click', function(e){
		e.preventDefault();
		moveSlider('left');
		console.log("en el click left");
	});

	console.log("paso por el bt_left");


	$('.bt_right').on('click', function(e){
		e.preventDefault();
		moveSlider('right');
	});

	console.log("paso por el bt_right");

	console.log("Hola k ase");

	var mensaje = $('.form_container .slide').length;
	console.log(mensaje);

});




function moveSlider(direction){
	var limit = $('.form_container .slide').length;

	pointer = (direction == 'right') ? pointer + 1 : pointer-1;
	pointer = (direction >= limit) ? 0 : pointer ;
	pointer = (direction < 0 ) ? limit - 1 : pointer ;

	var mensaje = -(pointer * $('.form_container').width())+"px";
	console.log(mensaje);

	$('.form_container .slide_container').animate({
		'margin-left': -(pointer * $('.form_container').width())+"px"

	});


}


