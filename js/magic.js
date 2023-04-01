// start after the button is pressed
var audio = new Audio('music/roll.m4a');

document.getElementById('fake-form').onsubmit = function () {
	return false;
};

function start() {
	audio.play();
	// loop the audio
	audio.loop = true;

	// count time spend on site and display it in "time" paragraph after the button is pressed
	const time = document.querySelector('#time');
	let timeSpend = 0;
	let timer = setInterval(() => {
		timeSpend++;
		time.innerHTML = timeSpend;
	}, 1000);

	// hide the start button, show timer and gif, start animation
	const form = document.querySelector('.form-box');
	const clockText = document.querySelector('.clock-text');
	const siteBackground = document.querySelector('body');
	const footer = document.querySelector('.footer');
	form.style.display = 'none';
	clockText.style.display = 'block';
	siteBackground.style.animation = 'pulse-body 6s ease infinite';
	siteBackground.style.background = "url('/images/bg.jpg')";
	footer.style.display = 'flex';
}
