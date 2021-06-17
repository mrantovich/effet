const burger = document.querySelector('.burger');
const header = document.querySelector('.header');

const wholeHTML = document.querySelector('html');
const wholeBody = document.querySelector('body');

burger.addEventListener('click', toggleActive);

function toggleActive() {
	burger.classList.toggle('_active');
	header.classList.toggle('_active');
	wholeHTML.classList.toggle('_lock');
	wholeBody.classList.toggle('_lock');
};

const progress = document.querySelector('.controls__progressbar');
const controlsPlay = document.querySelector('.controls__play');
const controlsStop = document.querySelector('.controls__stop');

controlsPlay.addEventListener('click', playSound);
controlsStop.addEventListener('click', stopSound);

function makeStep() {
	let seek = 	sound.seek() || 0;
	progress.style.width = (((seek / sound.duration()) * 100 ) || 0) + "%";
	if (sound.playing()) {
		requestAnimationFrame(makeStep);
	};
};

let sound = new Howl({
	src: ['../sound/test-audio.wav'],
	onplay: function() {
		requestAnimationFrame(makeStep);
	},
});

function setControls() {
	controlsPlay.classList.add('_disabled');
	controlsStop.classList.remove('_disabled');
};

function unsetControls() {
	controlsPlay.classList.remove('_disabled');
	controlsStop.classList.add('_disabled');
};

sound.on('end', unsetControls);

function playSound() {
	setControls();
	sound.stop();
	sound.play();
};

function stopSound() {
	unsetControls();
	sound.stop();
};