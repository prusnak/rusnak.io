var canvas;
var stage;
var wave;

function start() {
	new Fingerprint2().get(function(result, components) {
		document.title = result;
		init();
	});
}

function newWave(x, y) {
	var w = {}
	w.particles = [];
	const COUNT = 1000;
	for (var i = 0; i < COUNT; i++) {
		var p = new createjs.Bitmap('dot.png');
		p.x = x;
		p.y = y;
		p.a = i * 2 * Math.PI / COUNT;
		p.v = 1;
		p.t = 0;
		w.particles.push(p);
		stage.addChild(p);
	}
	return w;
}

function init() {
	// create a new stage and point it at our canvas:
	canvas = document.getElementById('canvas');
	stage = new createjs.Stage(canvas);

	wave = newWave(400, 400);

	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
	for (var i = 0; i < wave.particles.length; i++) {
		var p = wave.particles[i];
		p.x += Math.cos(p.a) * p.v;
		p.y += Math.sin(p.a) * p.v;
		p.t += 1/60;
		p.alpha = 1 - p.t / 5;
	}
	stage.update(event);
}
