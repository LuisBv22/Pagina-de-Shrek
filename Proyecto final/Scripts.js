$(document).ready(main);

var contador = 1;

function main() {
	$('.menu_bar').click(function () {
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function () {
		$(this).children('.children').slideToggle();
	});
}

/** SCRIPT DE POPOVERS **/

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl)
})
var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
	container: 'body'
})
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
	trigger: 'focus'
  })
/** SCRIPT DE BARRA DE PROGRESO **/

function move() {
	var elem = document.getElementById("myBar");
	var width = 0;
	var id = setInterval(frame, 1);
	function frame() {
		if (width >= 100) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
		}
	}
}

