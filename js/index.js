'use strict';

var called = 0;

function speak() {
	var text = 'Yo Playboi';
	called = called + 1;

	for (var i = 0; i < called; i++) {
		speechSynthesis.speak(new SpeechSynthesisUtterance('Yo Playboi'));
	}
}

document.querySelectorAll('button')[0].addEventListener('click', speak);

speak();