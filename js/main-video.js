

/****************************************************************/

var src1 = "https://www.youtube.com/embed/tCZBzk9XVPo";
var src2 = "https://www.youtube.com/embed/k92s_Rfd9rA";


document.querySelector('#video-screen-1').onclick = function () {
	popup_block.style.transform = 'scale(1)';
	popup_block.style.opacity = '1';
	document.querySelector('#video-1').setAttribute('src', src1);
};

document.querySelector('#video-screen-2').onclick = function () {
	popup_block.style.transform = 'scale(1)';
	popup_block.style.opacity = '1';
	document.querySelector('#video-1').setAttribute('src', src2);
};
/**************************************************/

document.getElementById('button-exit').onclick = function () {
	popup_block.style.transform = 'scale(0)';
	popup_block.style.opacity = '0';
	document.querySelector('#video-1').setAttribute('src', '');
};
