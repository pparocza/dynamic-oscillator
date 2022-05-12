let code;
let valence;
let degree;

 const startBtn = document.querySelector('button:nth-of-type(1)');
 const stopBtn = document.querySelector('button:nth-of-type(2)');

 //create the context for the web audio

let audioCtx

startBtn.onclick = function() {
	audioCtx = new (window.AudioContext || window.webkitAudioContext)();
	//create, tune, start and connect each oscillator sinea, sineb and sinec
	var sinea = audioCtx.createOscillator();
	sinea.frequency.value = 20;
	sinea.type = "sawtooth";
	sinea.start();
	sinea.connect(audioCtx.destination);
	
	setInterval(function(){ 
fetch("./data.json")
	.then(response => response.json())
	.then(data => {
	console.log(data.valence);
	console.log(data.degree);
	valence=data.valence;
	degree=data.degree;
	
	sinea.frequency.value = degree*10;
	}
) 
}, 5000);
	
	/*var sineb = audioCtx.createOscillator();
	sineb.frequency.value = 523.25;
	sineb.type = "sine";
	sineb.start();
	sineb.connect(audioCtx.destination);
	
	var sinec = audioCtx.createOscillator();
	sinec.frequency.value = 698.46;
	sinec.type = "sine";
	sinec.start();
	sinec.connect(audioCtx.destination);
   */
  }

stopBtn.onclick = function() {
	audioCtx.suspend()
}
