/*для 3 слайда*/
//$('.next').click(function() {
//	next();
//});
//
//$('.prev').click(function() {
//	prev();
//});
//
//var a = 0;
//var slidWidth = 100 / ($('.ittem').children.length + 1); 
//var next = function() {
//	if(a < slidWidth*2) {
//		a += slidWidth;
//		$('.ittem').css('transform', 'translateX(-' + a + '%)');
//	} else {
//		a = 0;
//		$('.ittem').css('transform', 'translateX(-' + a + '%)');
//	} 
//}
//
//var prev = function() {
//	if(a === 0) {
//		a = slidWidth*2;
//		$('.ittem').css('transform', 'translateX(-' + a + '%)');
//	} else {
//		a -= slidWidth;
//		$('.ittem').css('transform', 'translateX(-' + a + '%)');
//	}
//}
$('.next').click(function() {
	next();
});

$('.prev').click(function() {
	prev();
});

var a = 0;
var slidWidth = 100 / ($('.ittem').children.length + 1); 
var next = function() {
	if(a < slidWidth*1) {
		a += slidWidth;
		$('.ittem').css('transform', 'translateX(-' + a + '%)');
	} else {
		a = 0;
		$('.ittem').css('transform', 'translateX(-' + a + '%)');
	} 
}

var prev = function() {
	if(a === 0) {
		a = slidWidth*1;
		$('.ittem').css('transform', 'translateX(-' + a + '%)');
	} else {
		a -= slidWidth;
		$('.ittem').css('transform', 'translateX(-' + a + '%)');
	}
}
// скрипт для блока header
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var subMenuClick = document.querySelector('.submenu-link');
var submenu = document.querySelector('.submenu');


navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function(){
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');

	} else{
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});

subMenuClick.addEventListener('click', function (evt) {

	if (submenu.classList.contains('submenuOpen')) {
		submenu.classList.remove('submenuOpen');
	}
	else {
		submenu.classList.add('submenuOpen');
	}



});

$(document).ready(function () {
	
	var phone_show = document.querySelector('.show_hide_number');
	var phone_number = document.querySelector('.phone-number');
	var play_and_stop_music = true;

	/* Promo video */

	var srcPromo = "https://www.youtube.com/embed/tCZBzk9XVPo";

	document.querySelector('.btn_video').onclick = function () {
		console.log('!');
		popup_block.style.transform = 'scale(1)';
		popup_block.style.opacity = '1';
		document.querySelector('#video-1').setAttribute('src', srcPromo);
	};


	document.getElementById('button-exit').onclick = function () {
		popup_block.style.transform = 'scale(0)';
		popup_block.style.opacity = '0';
		document.querySelector('#video-1').setAttribute('src', '');
	};

	/*Retractable contacts*/
	var popup2 = document.querySelector('.modal-content2');
	var popupOpen2 = document.querySelector('.show_hide_contacts_2');
	var close2 = document.querySelector('.modal-content-close2');

	var modalOverlay = document.querySelector('.modal-overlay');




	popupOpen2.addEventListener('click', function(event){
		popup2.classList.add('modal-content-show');
		modalOverlay.classList.add('modal-overlay-show');
	});

	close2.addEventListener("click", function(event) {
		event.preventDefault();
		popup2.classList.remove("modal-content-show");
		modalOverlay.classList.remove('modal-overlay-show');

	});

	phone_show.addEventListener('click', function () {
		$(phone_number).toggleClass('width_phone');
	})
	/*end retractable contacts*/
});

/*Проигрываение музыки по кадрам из фильма*/
var sound = new Audio();
var bool = true;

function playing(obj) {
	number_sound = obj.id;
	var player = document.querySelector(".aplayer-pause");
	$(player).trigger("click");
	if (number_sound != bool) {
		sound.src = 'sound/img_sound/' + number_sound + '.mp3';
		sound.play();
		bool = number_sound;
	} else if (number_sound == bool) {
		if (sound.paused) {
			sound.src = 'sound/img_sound/' + number_sound + '.mp3';
			sound.play();
		} else {
			sound.pause();
		}
	}
}

/*play and pause in poster music*/
var player = document.querySelector(".aplayer-play");
player.addEventListener('click', function () {
	sound.pause();
});

var playerList = document.querySelector(".aplayer-list");
playerList.addEventListener('click', function () {
	sound.pause();
});
/*end play and pause in poster music*/

/**/
/*popup window*/


var popup = document.querySelector('.modal-content');
var popupOpen = document.querySelector('.btnFile');
var close = document.querySelector('.modal-content-close');

var modalOverlay = document.querySelector('.modal-overlay');




popupOpen.addEventListener('click', function(event){
	event.preventDefault();
	popup.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	modalOverlay.classList.remove('modal-overlay-show');

});

/*popupTeam1*/
var popupTeam1 = document.querySelector('.content-team1');
var popupTeamOpen1 = document.querySelector('.teambutton1');
var closeTeam1 = document.querySelector('.close-team1');

popupTeamOpen1.addEventListener('click', function(event){
	event.preventDefault();
	popupTeam1.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
});

closeTeam1.addEventListener("click", function(event) {
	event.preventDefault();
	popupTeam1.classList.remove("modal-content-show");
	modalOverlay.classList.remove('modal-overlay-show');

});
/*popupTeam2*/
var popupTeam2 = document.querySelector('.content-team2');
var popupTeamOpen2 = document.querySelector('.teambutton2');
var closeTeam2 = document.querySelector('.close-team2');

popupTeamOpen2.addEventListener('click', function(event){
	event.preventDefault();
	popupTeam2.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
});

closeTeam2.addEventListener("click", function(event) {
	event.preventDefault();
	popupTeam2.classList.remove("modal-content-show");
	modalOverlay.classList.remove('modal-overlay-show');

});
/*popupTeam3*/
var popupTeam3 = document.querySelector('.content-team3');
var popupTeamOpen3 = document.querySelector('.teambutton3');
var closeTeam3 = document.querySelector('.close-team3');

popupTeamOpen3.addEventListener('click', function(event){
	event.preventDefault();
	popupTeam3.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
});

closeTeam3.addEventListener("click", function(event) {
	event.preventDefault();
	popupTeam3.classList.remove("modal-content-show");
	modalOverlay.classList.remove('modal-overlay-show');

});
/*popupTeam4*/
var popupTeam4 = document.querySelector('.content-team4');
var popupTeamOpen4 = document.querySelector('.teambutton4');
var closeTeam4 = document.querySelector('.close-team4');

popupTeamOpen4.addEventListener('click', function(event){
	event.preventDefault();
	popupTeam4.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
});

closeTeam4.addEventListener("click", function(event) {
	event.preventDefault();
	popupTeam4.classList.remove("modal-content-show");
	modalOverlay.classList.remove('modal-overlay-show');

});
/*popupTeam5*/
var popupTeam5 = document.querySelector('.content-team5');
var popupTeamOpen5 = document.querySelector('.teambutton5');
var closeTeam5 = document.querySelector('.close-team5');

popupTeamOpen5.addEventListener('click', function(event){
	event.preventDefault();
	popupTeam5.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
});

closeTeam5.addEventListener("click", function(event) {
	event.preventDefault();
	popupTeam5.classList.remove("modal-content-show");
	modalOverlay.classList.remove('modal-overlay-show');

});
/*popupTeam6*/
var popupTeam6 = document.querySelector('.content-team6');
var popupTeamOpen6 = document.querySelector('.teambutton6');
var closeTeam6 = document.querySelector('.close-team6');

popupTeamOpen6.addEventListener('click', function(event){
	event.preventDefault();
	popupTeam6.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
});

closeTeam6.addEventListener("click", function(event) {
	event.preventDefault();
	popupTeam6.classList.remove("modal-content-show");
	modalOverlay.classList.remove('modal-overlay-show');

});
/*popupTeam7*/
var popupTeam7 = document.querySelector('.content-team7');
var popupTeamOpen7 = document.querySelector('.teambutton7');
var closeTeam7 = document.querySelector('.close-team7');

popupTeamOpen7.addEventListener('click', function(event){
	event.preventDefault();
	popupTeam7.classList.add('modal-content-show');
	modalOverlay.classList.add('modal-overlay-show');
});

closeTeam7.addEventListener("click", function(event) {
	event.preventDefault();
	popupTeam7.classList.remove("modal-content-show");
	modalOverlay.classList.remove('modal-overlay-show');

});
//
//
//window.addEventListener('keydown', function(event){
//	if(event.keyCode === 27) {
//		if(popup.classList.contains('modal-content-show')) {
//			popup.classList.remove('modal-content-show');
//			modalOverlay.classList.remove('modal-overlay-show');
//		}
//
//	}
//});





