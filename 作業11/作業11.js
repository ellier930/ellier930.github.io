(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"作業11_atlas_1", frames: [[0,52,89,30],[0,0,97,50],[99,0,48,96]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["作業11_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.補間動畫2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.補間動畫1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.左鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("AgBApQgMgEgOgIIgLgGIgEAKIgzgRIASgoIAFgBQAJgRAKgHQAVgPAEAzIAQANQASAPAHAEQASAKA8AZQhDgDgbgKg");
	this.shape.setTransform(9.35,5.3383);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左鞋, new cjs.Rectangle(0,0,18.7,10.7), null);


(lib.左手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手, new cjs.Rectangle(0,0,44.5,15), null);


(lib.左大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("ABVCvQgPgJgRgSIgPgQQgUgphPhQQhEhEgJgrIAAgBIgBgMIABgBQABgdAKgRQAOgaAiAGQAuAJASAMQAJAHAVAeIAGAFIAyBPQA0BbARBIQgEA5gcAAQgKAAgNgHg");
	this.shape.setTransform(14,18.1692);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左大腿, new cjs.Rectangle(0,0,28,36.4), null);


(lib.左小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("AACC8IgvgMIgHgCQAGgIAIhhQAIhjAAhDIADg9IAbgZQAdgRATAuQAOA2gWCWQgLBLgOBAg");
	this.shape.setTransform(5.2972,18.8804);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左小腿, new cjs.Rectangle(0,0,10.6,37.8), null);


(lib.右鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AgFAHQgEgLgDgPIgBgNIgKADIgSgyIArgMIAcAHQAWALgdAcIgBAWQgBAWABAJQACATARBBQgmg4gIgdg");
	this.shape.setTransform(4.15,9.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右鞋, new cjs.Rectangle(0,0,8.3,18.3), null);


(lib.右手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手, new cjs.Rectangle(0,0,48.5,25), null);


(lib.右大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("ABBC6QgOgKgQgUIgMgSQgPgqhJhgQg+hPAEgvIAAgLQAAgJAGABQAaguAmgEQAzgGAnBaIAnBUQApBhAIBKQgLA0gZAAQgLAAgNgKg");
	this.shape.setTransform(12.4875,19.661);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右大腿, new cjs.Rectangle(0,0,25,39.3), null);


(lib.右小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AiOBzIgWgxIgCgHQAKAABSg0QBTg0A2gqIAygiIAlAGQAfAOgZAqQgjAsiEBJQhDAkg7Acg");
	this.shape.setTransform(16.7158,12.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右小腿, new cjs.Rectangle(0,0,33.5,24.5), null);


(lib.頭部 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AgoAxQghglAFgaQAEgOAXgXQARgRAkABQAfABATAKIAHAIQADALgKAKQgOgBgOAEQgdAHgEAUQgGgDgHgCQgPgEADAOQAEARAEAFQAFAFAIgEIgiAlg");
	this.shape.setTransform(6.9795,6.8223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFEFE6").s().p("AghAxIgMg5QgjgoANgiQAFAEAFgDIADgCQAEACAEgCIAMgGIATgFQATgFATgCIAfASQACAGABAOIABARQACAEAMANQABACgIAJQAGAkgHAEQgEADgHABIgKABQgVAHgWAiQgUAggDACIgKg1g");
	this.shape_1.setTransform(7.7474,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.頭部, new cjs.Rectangle(0,0,14.9,22.7), null);


(lib.上半身 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.上半身, new cjs.Rectangle(0,0,24,48), null);


(lib.走鋼索男人 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 骨架_1
	this.ikNode_18 = new lib.右鞋();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(40.65,107.6,1,1,-26.5901,0,0,8.2,0);

	this.ikNode_16 = new lib.右小腿();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(53.65,82.2,1,1,-26.5901,0,0,27,1.9);

	this.ikNode_2 = new lib.頭部();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(54.15,19.4,1,1,0,0,0,7.5,19.4);

	this.ikNode_1 = new lib.上半身();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(54.05,22.7,1,1,0,0,0,14.2,9.2);

	this.ikNode_14 = new lib.右大腿();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(55.15,52.65,1,1,15.2365,0,0,12.4,3.9);

	this.ikNode_4 = new lib.右手();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(43.3,24.65,1,1,0,0,0,43.3,5.8);

	this.ikNode_6 = new lib.左手();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(57.7,23.95,1,1,0,0,0,12.2,11.5);

	this.ikNode_8 = new lib.左大腿();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(52.2,53.1,1,1,0,0,0,8.3,3.8);

	this.ikNode_10 = new lib.左小腿();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(66.5,81.4,1,1,0,0,0,5.3,6.2);

	this.ikNode_12 = new lib.左鞋();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(64.05,110.35,1,1,0,0,0,4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_12,p:{rotation:0,x:64.05,y:110.35,regY:1.4}},{t:this.ikNode_10,p:{rotation:0,x:66.5,y:81.4,regX:5.3}},{t:this.ikNode_8,p:{rotation:0,x:52.2,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:0,x:57.7,y:23.95,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:0,x:43.3,y:24.65,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.4,scaleX:1,scaleY:1,rotation:15.2365,x:55.15,y:52.65,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:1,scaleY:1,rotation:-26.5901,x:53.65,y:82.2,regX:27}},{t:this.ikNode_18,p:{scaleX:1,scaleY:1,rotation:-26.5901,x:40.65,y:107.6,regX:8.2,regY:0}}]}).to({state:[{t:this.ikNode_12,p:{rotation:0.6592,x:63.35,y:110.45,regY:1.4}},{t:this.ikNode_10,p:{rotation:0.6592,x:66.15,y:81.55,regX:5.3}},{t:this.ikNode_8,p:{rotation:0.6592,x:52.15,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:1.5196,x:57.65,y:23.9,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:1.0378,x:43.2,y:24.5,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:15.852,x:55,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.4126,x:53.1,y:82.25,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.4126,x:40.05,y:107.5,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.3185,x:62.7,y:110.6,regY:1.4}},{t:this.ikNode_10,p:{rotation:1.3185,x:65.85,y:81.7,regX:5.3}},{t:this.ikNode_8,p:{rotation:1.3185,x:52.2,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:3.0395,x:57.75,y:23.95,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:2.076,x:43.15,y:24.35,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:16.4701,x:54.8,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.235,x:52.55,y:82.2,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.235,x:39.4,y:107.5,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.978,x:62.1,y:110.7,regY:1.4}},{t:this.ikNode_10,p:{rotation:1.978,x:65.55,y:81.9,regX:5.3}},{t:this.ikNode_8,p:{rotation:1.978,x:52.25,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:4.5598,x:57.65,y:23.85,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:3.1139,x:43.3,y:24.25,regX:43.4,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:17.0875,x:54.5,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.0587,x:52,y:82.2,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.0587,x:38.8,y:107.4,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:2.6377,x:61.5,y:110.85,regY:1.4}},{t:this.ikNode_10,p:{rotation:2.6377,x:65.25,y:82,regX:5.3}},{t:this.ikNode_8,p:{rotation:2.6377,x:52.4,regX:8.4,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:6.0797,x:57.75,y:23.9,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:4.1521,x:43.3,y:24.15,regX:43.4,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:17.7042,x:54.25,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.8808,x:51.6,y:82.05,regX:27.1}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.8808,x:38.2,y:107.3,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:3.2969,x:60.85,y:110.95,regY:1.4}},{t:this.ikNode_10,p:{rotation:3.2969,x:65,y:82.15,regX:5.3}},{t:this.ikNode_8,p:{rotation:3.2969,x:52.45,regX:8.4,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:7.5996,x:57.75,y:23.9,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:5.1898,x:43.15,y:24,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.4,scaleX:0.9999,scaleY:0.9999,rotation:18.321,x:53.95,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.7032,x:50.9,y:82.15,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.7032,x:37.55,y:107.3,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:3.9557,x:60.25,y:111.05,regY:1.4}},{t:this.ikNode_10,p:{rotation:3.9557,x:64.65,y:82.3,regX:5.3}},{t:this.ikNode_8,p:{rotation:3.9557,x:52.5,regX:8.4,regY:3.9,y:53.2}},{t:this.ikNode_6,p:{rotation:9.1204,x:57.75,y:23.9,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:6.2283,x:43.2,y:23.85,regX:43.4,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:18.9393,x:53.9,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.5257,x:50.35,y:82.05,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.5257,x:36.95,y:107.2,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:4.6159,x:59.65,y:111.1,regY:1.4}},{t:this.ikNode_10,p:{rotation:4.6159,x:64.4,y:82.5,regX:5.3}},{t:this.ikNode_8,p:{rotation:4.6159,x:52.4,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:10.6397,x:57.75,y:23.85,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:7.2663,x:43.1,y:23.75,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:19.5567,x:53.65,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.3493,x:49.8,y:82,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.3493,x:36.3,y:107.15,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:5.2749,x:58.95,y:111.15,regY:1.4}},{t:this.ikNode_10,p:{rotation:5.2749,x:64.2,y:82.55,regX:5.4}},{t:this.ikNode_8,p:{rotation:5.2749,x:52.4,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:12.1604,x:57.75,y:23.9,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:8.3041,x:43.1,y:23.6,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:20.1732,x:53.45,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.1713,x:49.25,y:81.95,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.1713,x:35.65,y:107.05,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:5.9347,x:58.35,y:111.25,regY:1.4}},{t:this.ikNode_10,p:{rotation:5.9347,x:63.65,y:82.7,regX:5.2}},{t:this.ikNode_8,p:{rotation:5.9347,x:52.45,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:13.68,x:57.65,y:23.85,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:9.3427,x:43.05,y:23.5,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:20.791,x:53.2,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.9946,x:48.7,y:81.95,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.9946,x:35.1,y:106.95,regX:8.3,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:6.5943,x:57.7,y:111.3,regY:1.4}},{t:this.ikNode_10,p:{rotation:6.5943,x:63.45,y:82.85,regX:5.3}},{t:this.ikNode_8,p:{rotation:6.5943,x:52.5,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:15.2002,x:57.65,y:23.85,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:10.3801,x:43.05,y:23.35,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:21.4088,x:52.95,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.8165,x:48.2,y:81.85,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.8165,x:34.45,y:106.9,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:7.2531,x:57.05,y:111.4,regY:1.4}},{t:this.ikNode_10,p:{rotation:7.2531,x:63.05,y:82.95,regX:5.2}},{t:this.ikNode_8,p:{rotation:7.2531,x:52.55,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:16.7206,x:57.7,y:23.8,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:11.4183,x:43.05,y:23.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:22.0253,x:52.7,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.6401,x:47.65,y:81.85,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.6401,x:33.8,y:106.8,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:7.9129,x:56.45,y:111.45,regY:1.4}},{t:this.ikNode_10,p:{rotation:7.9129,x:62.85,y:83.1,regX:5.3}},{t:this.ikNode_8,p:{rotation:7.9129,x:52.6,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:18.2406,x:57.65,y:23.8,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:12.4565,x:43.1,y:23.1,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:22.6433,x:52.5,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.4633,x:47.05,y:81.7,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.4633,x:33.15,y:106.65,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:8.5719,x:55.8,y:111.5,regY:1.4}},{t:this.ikNode_10,p:{rotation:8.5719,x:62.7,y:83.25,regX:5.4}},{t:this.ikNode_8,p:{rotation:8.5719,x:52.65,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:19.7607,x:57.65,y:23.8,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:13.4947,x:43.05,y:22.95,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:23.2607,x:52.25,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.2856,x:46.55,y:81.7,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.2856,x:32.55,y:106.55,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:9.2319,x:55.2,y:111.55,regY:1.4}},{t:this.ikNode_10,p:{rotation:9.2319,x:62.25,y:83.3,regX:5.3}},{t:this.ikNode_8,p:{rotation:9.2319,x:52.7,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:21.2804,x:57.65,y:23.8,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:14.5326,x:42.95,y:22.8,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:23.8782,x:52,y:52.65,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.1075,x:46.15,y:81.55,regX:27.1}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.1075,x:32,y:106.55,regX:8.2,regY:0.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:9.8908,x:54.55,y:111.55,regY:1.4}},{t:this.ikNode_10,p:{rotation:9.8908,x:61.95,y:83.4,regX:5.3}},{t:this.ikNode_8,p:{rotation:9.8908,x:52.8,regX:8.4,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:22.801,x:57.65,y:23.85,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:15.5712,x:43.05,y:22.7,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:24.495,x:51.8,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.9306,x:45.5,y:81.55,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.9306,x:31.35,y:106.3,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:10.5509,x:53.95,y:111.6,regY:1.4}},{t:this.ikNode_10,p:{rotation:10.5509,x:61.5,y:83.5,regX:5.2}},{t:this.ikNode_8,p:{rotation:10.5509,x:52.75,regX:8.3,regY:3.9,y:53.2}},{t:this.ikNode_6,p:{rotation:24.3206,x:57.6,y:23.85,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:16.6086,x:43.05,y:22.6,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:25.1131,x:51.55,y:52.7,regY:4}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.7537,x:44.8,y:81.45,regX:26.9}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.7537,x:30.7,y:106.2,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.2096,x:53.3,y:111.55,regY:1.4}},{t:this.ikNode_10,p:{rotation:11.2096,x:61.3,y:83.7,regX:5.3}},{t:this.ikNode_8,p:{rotation:11.2096,x:52.8,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:25.8409,x:57.7,y:23.75,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:17.647,x:43.05,y:22.5,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.4,scaleX:0.9999,scaleY:0.9999,rotation:25.731,x:51.2,y:52.6,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.576,x:44.35,y:81.35,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.576,x:30.1,y:106,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.8691,x:52.65,y:111.4,regY:1.3}},{t:this.ikNode_10,p:{rotation:11.8691,x:61,y:83.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:11.8691,x:52.8,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:27.3611,x:57.65,y:23.75,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:18.6849,x:42.95,y:22.3,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:26.3476,x:51.05,y:52.7,regY:4}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.3997,x:43.9,y:81.25,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.3997,x:29.4,y:105.8,regX:8.2,regY:-0.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.5291,x:52,y:111.4,regY:1.3}},{t:this.ikNode_10,p:{rotation:12.5291,x:60.6,y:83.85,regX:5.2}},{t:this.ikNode_8,p:{rotation:12.5291,x:52.9,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:28.8811,x:57.7,y:23.75,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:19.7226,x:42.95,y:22.15,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:26.9651,x:50.9,y:52.6,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.2216,x:43.35,y:81.15,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.2216,x:28.9,y:105.75,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.4924,x:52,y:111.45,regY:1.3}},{t:this.ikNode_10,p:{rotation:12.4924,x:60.55,y:83.8,regX:5.2}},{t:this.ikNode_8,p:{rotation:12.7066,x:52.9,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:28.5622,x:57.65,y:23.8,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:19.836,x:43.1,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:25.51,x:51.35,y:52.6,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.5604,x:54.05,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.2883,x:44.55,y:81.35,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.2883,x:31,y:106.5,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.4557,x:52,y:111.5,regY:1.3}},{t:this.ikNode_10,p:{rotation:12.4557,x:60.65,y:83.9,regX:5.3}},{t:this.ikNode_8,p:{rotation:12.8839,x:53,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:28.2438,x:57.65,y:23.75,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:19.9485,x:43.1,y:22.05,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.4,scaleX:0.9999,scaleY:0.9999,rotation:24.0562,x:51.8,y:52.6,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.1209,x:54.05,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-27.3526,x:45.8,y:81.55,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-27.3526,x:33.15,y:107.15,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.419,x:51.95,y:111.6,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.419,x:60.6,y:83.9,regX:5.3}},{t:this.ikNode_8,p:{rotation:13.0608,x:53.2,regX:8.4,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:27.925,x:57.7,y:23.7,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:20.0611,x:43,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:22.6025,x:52.4,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.6815,x:54.1,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.4167,x:47.05,y:81.75,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.4167,x:35.35,y:107.7,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.3823,x:51.95,y:111.65,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.3823,x:60.55,y:83.95,regX:5.3}},{t:this.ikNode_8,p:{rotation:13.2385,x:53.25,regX:8.4,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:27.6067,x:57.6,y:23.85,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:20.1728,x:43.05,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:21.1481,x:52.95,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:2.2413,x:54.15,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-31.4835,x:48.25,y:81.85,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-31.4835,x:37.55,y:108.2,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.3456,x:51.95,y:111.7,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.3456,x:60.5,y:83.95,regX:5.3}},{t:this.ikNode_8,p:{rotation:13.4156,x:53.15,regX:8.3,regY:3.9,y:53.25}},{t:this.ikNode_6,p:{rotation:27.2876,x:57.7,y:23.7,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:20.2854,x:43.05,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:19.6936,x:53.5,y:52.65,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:2.8023,x:54.15,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.5482,x:49.6,y:82,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.5482,x:39.8,y:108.75,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.3089,x:51.9,y:111.7,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.3089,x:60.65,y:84,regX:5.4}},{t:this.ikNode_8,p:{rotation:13.5926,x:53.2,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:26.9693,x:57.7,y:23.75,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:20.3983,x:43.1,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:18.24,x:53.95,y:52.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:3.3626,x:54.15,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-35.6139,x:50.85,y:82.1,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-35.6139,x:42,y:109.2,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.2731,x:51.9,y:111.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.2731,x:60.6,y:84,regX:5.4}},{t:this.ikNode_8,p:{rotation:13.7708,x:53.3,regX:8.3,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:26.6507,x:57.7,y:23.7,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:20.5103,x:43.05,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.4,scaleX:0.9999,scaleY:0.9999,rotation:16.7855,x:54.35,y:52.85,regY:4}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:3.9233,x:54.15,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-37.6804,x:52.1,y:82.15,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-37.6804,x:44.25,y:109.6,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.2364,x:51.9,y:111.8,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.2364,x:60.55,y:84.05,regX:5.4}},{t:this.ikNode_8,p:{rotation:13.9482,x:53.35,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:26.3324,x:57.7,y:23.7,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:20.6232,x:43.05,y:22.25,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:15.3318,x:55.1,y:52.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:4.4835,x:54.2,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-39.7455,x:53.35,y:82.15,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-39.7455,x:46.5,y:109.8,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.1998,x:51.85,y:111.8,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.1998,x:60.4,y:84,regX:5.3}},{t:this.ikNode_8,p:{rotation:14.1249,x:53.4,regX:8.3,regY:3.9,y:53.25}},{t:this.ikNode_6,p:{rotation:26.0138,x:57.7,y:23.7,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:20.7355,x:43.05,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:13.877,x:55.6,y:52.8,regY:4}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:5.044,x:54.15,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-41.8112,x:54.6,y:82.2,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-41.8112,x:48.8,y:110.1,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.1631,x:51.85,y:111.85,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.1631,x:60.4,y:84.05,regX:5.3}},{t:this.ikNode_8,p:{rotation:14.3026,x:53.5,regX:8.3,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:25.6951,x:57.7,y:23.7,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:20.8484,x:42.95,y:22.1,regX:43.2,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:12.4232,x:56.15,y:52.65,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:5.6043,x:54.15,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-43.8766,x:55.9,y:82.15,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-43.8766,x:51.05,y:110.3,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.1264,x:51.85,y:111.85,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.1264,x:60.35,y:84.05,regX:5.3}},{t:this.ikNode_8,p:{rotation:14.4803,x:53.5,regX:8.3,regY:3.9,y:53.25}},{t:this.ikNode_6,p:{rotation:25.3764,x:57.65,y:23.8,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:20.9607,x:43.1,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.4,scaleX:0.9999,scaleY:0.9999,rotation:10.9689,x:56.55,y:52.6,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:6.1651,x:54.05,y:19.5,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-45.9416,x:57.15,y:82.1,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-45.9416,x:53.4,y:110.35,regX:8.3,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.0898,x:51.8,y:111.9,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.0898,x:60.3,y:84.1,regX:5.3}},{t:this.ikNode_8,p:{rotation:14.6573,x:53.75,regX:8.4,regY:3.8,y:53.2}},{t:this.ikNode_6,p:{rotation:25.0576,x:57.7,y:23.65,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.0734,x:43.1,y:22.1,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:9.5144,x:57.2,y:52.55,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:6.7254,x:54.2,y:19.4,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-48.0073,x:58.45,y:82.05,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-48.0073,x:55.65,y:110.4,regX:8.2,regY:-0.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.0531,x:51.8,y:111.95,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.0531,x:60.25,y:84.1,regX:5.3}},{t:this.ikNode_8,p:{rotation:14.8346,x:53.65,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:24.7384,x:57.8,y:23.7,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.1858,x:43,y:22.15,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:8.0607,x:57.75,y:52.45,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:7.2857,x:54.2,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-50.0726,x:59.75,y:81.95,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-50.0726,x:58,y:110.4,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.0165,x:51.75,y:111.95,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.0165,x:60.2,y:84.15,regX:5.3}},{t:this.ikNode_8,p:{rotation:15.0119,x:53.7,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:24.4204,x:57.7,y:23.65,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.2984,x:43.05,y:22.25,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:6.6071,x:58.15,y:52.35,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:7.8466,x:54.2,y:19.35,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-52.1382,x:61,y:81.85,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-52.1382,x:60.25,y:110.35,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.9798,x:51.75,y:112,regY:1.4}},{t:this.ikNode_10,p:{rotation:11.9798,x:60.2,y:84.15,regX:5.3}},{t:this.ikNode_8,p:{rotation:15.1894,x:53.8,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:24.1019,x:57.7,y:23.65,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.4108,x:43.05,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:5.1523,x:58.75,y:52.35,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:8.4066,x:54.1,y:19.5,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-54.2039,x:62.35,y:81.65,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-54.2039,x:62.6,y:110.15,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.9431,x:51.75,y:112,regY:1.4}},{t:this.ikNode_10,p:{rotation:11.9431,x:60.15,y:84.2,regX:5.3}},{t:this.ikNode_8,p:{rotation:15.3669,x:53.85,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:23.7833,x:57.7,y:23.6,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.5227,x:43.1,y:22.25,regX:43.4,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:3.6975,x:59.25,y:52.2,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:8.9673,x:54.25,y:19.35,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-56.2697,x:63.55,y:81.5,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-56.2697,x:64.9,y:110,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.9066,x:51.7,y:112.05,regY:1.4}},{t:this.ikNode_10,p:{rotation:11.9066,x:60.1,y:84.2,regX:5.3}},{t:this.ikNode_8,p:{rotation:15.544,x:53.95,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:23.4646,x:57.7,y:23.6,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.6357,x:43.05,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:2.2441,x:59.75,y:52.15,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:9.528,x:54.25,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-58.3345,x:64.75,y:81.25,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-58.3345,x:67.2,y:109.7,regX:8.2,regY:0.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.8699,x:51.75,y:111.9,regY:1.3}},{t:this.ikNode_10,p:{rotation:11.8699,x:60.05,y:84.25,regX:5.3}},{t:this.ikNode_8,p:{rotation:15.7218,x:53.95,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:23.1458,x:57.7,y:23.6,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.7483,x:42.95,y:22.2,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.7895,x:60.25,y:52.05,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:10.0887,x:54.25,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-60.4,x:66.05,y:81.05,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-60.4,x:69.4,y:109.35,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.8332,x:51.75,y:111.95,regY:1.3}},{t:this.ikNode_10,p:{rotation:11.8332,x:60.2,y:84.25,regX:5.4}},{t:this.ikNode_8,p:{rotation:15.8992,x:54.05,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:22.8273,x:57.75,y:23.6,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.8605,x:43.1,y:22.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-0.6593,x:60.75,y:51.9,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:10.6486,x:54.1,y:19.45,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-62.466,x:67.3,y:80.75,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-62.466,x:71.7,y:108.95,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.7976,x:51.7,y:111.95,regY:1.3}},{t:this.ikNode_10,p:{rotation:11.7976,x:60.15,y:84.25,regX:5.4}},{t:this.ikNode_8,p:{rotation:16.0763,x:54.15,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:22.5083,x:57.7,y:23.55,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.9735,x:43.05,y:22.25,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-2.1137,x:61.25,y:51.8,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:11.2096,x:54.25,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-64.5314,x:68.45,y:80.5,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-64.5314,x:73.95,y:108.5,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.3267,x:51.15,y:112.05,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.3267,x:59.9,y:84.35,regX:5.4}},{t:this.ikNode_8,p:{rotation:16.5347,x:54.05,regX:8.3,regY:3.9,y:53.2}},{t:this.ikNode_6,p:{rotation:21.5783,x:57.7,y:23.55,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:21.3106,x:43.05,y:22.3,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-2.0026,x:61.45,y:51.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:11.4317,x:54.3,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-63.3802,x:68.6,y:80.4,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-63.3802,x:73.4,y:108.5,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.8563,x:50.65,y:112.05,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.8563,x:59.3,y:84.35,regX:5.2}},{t:this.ikNode_8,p:{rotation:16.993,x:54.15,regX:8.4,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:20.6487,x:57.75,y:23.45,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:20.6475,x:42.9,y:22.35,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-1.8915,x:61.6,y:51.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:11.6547,x:54.35,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-62.2294,x:68.7,y:80.45,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-62.2294,x:72.9,y:108.6,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:13.3859,x:50.15,y:112,regY:1.4}},{t:this.ikNode_10,p:{rotation:13.3859,x:59.15,y:84.45,regX:5.3}},{t:this.ikNode_8,p:{rotation:17.4515,x:54,regX:8.3,regY:3.9,y:53.2}},{t:this.ikNode_6,p:{rotation:19.719,x:57.75,y:23.5,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:19.9847,x:43.05,y:22.35,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-1.7813,x:61.7,y:51.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:11.877,x:54.35,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-61.0776,x:68.75,y:80.3,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-61.0776,x:72.45,y:108.6,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:13.9158,x:49.6,y:111.85,regY:1.3}},{t:this.ikNode_10,p:{rotation:13.9158,x:58.9,y:84.4,regX:5.3}},{t:this.ikNode_8,p:{rotation:17.9102,x:54,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:18.7891,x:57.75,y:23.4,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:19.3211,x:43.05,y:22.4,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-1.6702,x:61.9,y:51.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:12.0993,x:54.45,y:19.35,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-59.9273,x:68.9,y:80.4,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-59.9273,x:72.05,y:108.65,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:14.4461,x:49,y:111.9,regY:1.4}},{t:this.ikNode_10,p:{rotation:14.4461,x:58.65,y:84.45,regX:5.3}},{t:this.ikNode_8,p:{rotation:18.3686,x:54,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:17.8599,x:57.75,y:23.35,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:18.6589,x:42.95,y:22.45,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-1.5591,x:62.05,y:51.55,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:12.3223,x:54.45,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-58.7759,x:68.95,y:80.35,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-58.7759,x:71.55,y:108.75,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:14.9756,x:48.5,y:111.85,regY:1.4}},{t:this.ikNode_10,p:{rotation:14.9756,x:58.3,y:84.5,regX:5.3}},{t:this.ikNode_8,p:{rotation:18.827,x:53.9,regX:8.3,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:16.9299,x:57.75,y:23.25,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:17.9959,x:43.05,y:22.55,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-1.448,x:62.2,y:51.55,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:12.5444,x:54.45,y:19.55,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-57.6246,x:69.05,y:80.3,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-57.6246,x:71.05,y:108.75,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:15.505,x:48,y:111.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:15.505,x:58.05,y:84.5,regX:5.3}},{t:this.ikNode_8,p:{rotation:19.2848,x:53.95,regX:8.3,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:15.9999,x:57.85,y:23.25,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:17.3323,x:43.1,y:22.65,regX:43.4,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-1.3378,x:62.35,y:51.5,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:12.7666,x:54.4,y:19.5,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-56.4741,x:69.2,y:80.3,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-56.4741,x:70.6,y:108.75,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:16.0345,x:47.45,y:111.7,regY:1.4}},{t:this.ikNode_10,p:{rotation:16.0345,x:57.8,y:84.55,regX:5.3}},{t:this.ikNode_8,p:{rotation:19.7439,x:53.85,regX:8.3,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:15.07,x:57.8,y:23.15,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:16.6697,x:43.05,y:22.5,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-1.2268,x:62.55,y:51.45,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:12.99,x:54.55,y:19.45,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-55.3224,x:69.2,y:80.4,regX:26.9}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-55.3224,x:70.1,y:108.7,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:16.5646,x:46.9,y:111.65,regY:1.4}},{t:this.ikNode_10,p:{rotation:16.5646,x:57.65,y:84.65,regX:5.4}},{t:this.ikNode_8,p:{rotation:20.2013,x:53.85,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:14.1401,x:57.9,y:23.1,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:16.0063,x:42.95,y:22.65,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-1.1166,x:62.7,y:51.45,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:13.2116,x:54.55,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-54.1718,x:69.4,y:80.2,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-54.1718,x:69.65,y:108.7,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:17.0945,x:46.35,y:111.6,regY:1.4}},{t:this.ikNode_10,p:{rotation:17.0945,x:57.25,y:84.65,regX:5.3}},{t:this.ikNode_8,p:{rotation:20.6605,x:53.8,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:13.2107,x:57.8,y:23.05,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:15.3436,x:43,y:22.75,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-1.0047,x:62.8,y:51.4,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:13.4345,x:54.6,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-53.0208,x:69.45,y:80.2,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-53.0208,x:69.2,y:108.65,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:17.624,x:45.85,y:111.5,regY:1.4}},{t:this.ikNode_10,p:{rotation:17.624,x:56.8,y:84.6,regX:5.2}},{t:this.ikNode_8,p:{rotation:21.119,x:53.9,regX:8.4,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:12.2809,x:57.75,y:23,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:14.6809,x:43.05,y:22.65,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-0.8936,x:62.95,y:51.35,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:13.6575,x:54.65,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-51.8697,x:69.55,y:80.1,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-51.8697,x:68.75,y:108.65,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:18.1541,x:45.3,y:111.45,regY:1.4}},{t:this.ikNode_10,p:{rotation:18.1541,x:56.65,y:84.65,regX:5.3}},{t:this.ikNode_8,p:{rotation:21.5772,x:53.75,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:11.3514,x:57.8,y:22.9,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:14.0176,x:43,y:22.85,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-0.7843,x:63.15,y:51.3,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:13.8798,x:54.7,y:19.55,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-50.7185,x:69.65,y:80.05,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-50.7185,x:68.2,y:108.5,regX:8.2,regY:-0.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:18.6829,x:44.8,y:111.4,regY:1.4}},{t:this.ikNode_10,p:{rotation:18.6829,x:56.3,y:84.6,regX:5.2}},{t:this.ikNode_8,p:{rotation:22.0358,x:53.7,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:10.421,x:57.75,y:22.85,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:13.3554,x:43.05,y:22.9,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-0.6732,x:63.3,y:51.2,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:14.1024,x:54.7,y:19.45,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-49.5682,x:69.75,y:80.1,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-49.5682,x:67.75,y:108.5,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:19.2135,x:44.3,y:111.15,regY:1.3}},{t:this.ikNode_10,p:{rotation:19.2135,x:56.1,y:84.7,regX:5.3}},{t:this.ikNode_8,p:{rotation:22.4942,x:53.7,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:9.4916,x:57.8,y:22.85,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:12.6922,x:43.05,y:22.8,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-0.5613,x:63.45,y:51.15,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:14.3242,x:54.65,y:19.55,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-48.4173,x:69.85,y:80.05,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-48.4173,x:67.3,y:108.4,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:19.743,x:43.75,y:111.15,regY:1.4}},{t:this.ikNode_10,p:{rotation:19.743,x:55.85,y:84.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:22.9527,x:53.65,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:8.5621,x:57.8,y:22.75,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:12.0291,x:43.05,y:22.85,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-0.4503,x:63.55,y:51.1,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:14.5473,x:54.8,y:19.6,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-47.2653,x:69.95,y:80,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-47.2653,x:66.8,y:108.35,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:20.2724,x:43.2,y:111.05,regY:1.4}},{t:this.ikNode_10,p:{rotation:20.2724,x:55.5,y:84.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:23.4113,x:53.65,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:7.6322,x:57.75,y:22.8,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:11.3665,x:43,y:23.05,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-0.3392,x:63.75,y:51.1,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:14.7695,x:54.8,y:19.55,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-46.1142,x:70.05,y:79.9,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-46.1142,x:66.4,y:108.2,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:20.8019,x:42.75,y:110.85,regY:1.3}},{t:this.ikNode_10,p:{rotation:20.8019,x:55.25,y:84.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:23.8694,x:53.6,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:6.7025,x:57.75,y:22.6,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:10.703,x:43,y:23.1,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:-0.2291,x:63.9,y:51.05,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:14.992,x:54.9,y:19.6,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-44.9629,x:70.15,y:79.85,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-44.9629,x:65.85,y:108.1,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:21.3322,x:42.2,y:110.85,regY:1.4}},{t:this.ikNode_10,p:{rotation:21.3322,x:55.1,y:84.8,regX:5.4}},{t:this.ikNode_8,p:{rotation:24.3269,x:53.6,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:5.773,x:57.8,y:22.65,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:10.0398,x:43.05,y:23.15,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-0.118,x:64.05,y:50.95,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:15.2149,x:54.9,y:19.55,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-43.8122,x:70.25,y:79.85,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-43.8122,x:65.4,y:107.9,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:21.8616,x:41.65,y:110.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:21.8616,x:54.7,y:84.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:24.7858,x:53.55,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:4.8431,x:57.8,y:22.55,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:9.3772,x:42.9,y:23.15,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:-0.007,x:64.15,y:50.9,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:15.4369,x:54.95,y:19.6,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-42.6612,x:70.35,y:79.8,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-42.6612,x:64.95,y:107.8,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:22.3911,x:41.15,y:110.5,regY:1.3}},{t:this.ikNode_10,p:{rotation:22.3911,x:54.45,y:84.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:25.2438,x:53.55,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:3.9128,x:57.75,y:22.5,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:8.7142,x:43,y:23.25,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0979,x:64.35,y:50.85,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:15.6592,x:54.95,y:19.6,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-41.5097,x:70.4,y:79.75,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-41.5097,x:64.55,y:107.7,regX:8.2,regY:0.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:21.8314,x:41.7,y:110.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:21.8314,x:54.7,y:84.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:24.6133,x:53.5,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:3.8155,x:57.75,y:22.5,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:8.4967,x:43,y:23.3,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0962,x:64.2,y:50.9,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:15.2683,x:54.95,y:19.45,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-40.4716,x:70.3,y:79.9,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-40.4716,x:63.8,y:107.65,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:21.2721,x:42.3,y:110.85,regY:1.4}},{t:this.ikNode_10,p:{rotation:21.2721,x:55.05,y:84.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:23.9821,x:53.45,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:3.7174,x:57.75,y:22.7,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:8.2783,x:43,y:23.35,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0936,x:64,y:50.95,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:14.8762,x:54.9,y:19.6,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-39.4345,x:70.05,y:79.9,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-39.4345,x:63.1,y:107.55,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:20.712,x:42.85,y:110.95,regY:1.4}},{t:this.ikNode_10,p:{rotation:20.712,x:55.35,y:84.7,regX:5.3}},{t:this.ikNode_8,p:{rotation:23.351,x:53.4,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:3.6193,x:57.8,y:22.6,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:8.0611,x:43,y:23.35,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0909,x:63.8,y:51.05,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:14.4847,x:54.9,y:19.65,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-38.3974,x:69.85,y:80.05,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-38.3974,x:62.45,y:107.45,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:20.1524,x:43.35,y:111.05,regY:1.4}},{t:this.ikNode_10,p:{rotation:20.1524,x:55.7,y:84.7,regX:5.3}},{t:this.ikNode_8,p:{rotation:22.7195,x:53.4,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:3.522,x:57.9,y:22.65,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:7.8431,x:43,y:23.35,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0883,x:63.65,y:51.1,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:14.0933,x:54.9,y:19.5,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-37.3599,x:69.6,y:80.05,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-37.3599,x:61.65,y:107.4,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:19.5926,x:43.95,y:111.15,regY:1.4}},{t:this.ikNode_10,p:{rotation:19.5926,x:55.95,y:84.7,regX:5.3}},{t:this.ikNode_8,p:{rotation:22.0888,x:53.35,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:3.424,x:57.8,y:22.8,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:7.6251,x:43.05,y:23.4,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0857,x:63.45,y:51.15,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:13.7025,x:54.85,y:19.6,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-36.3206,x:69.5,y:80.15,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-36.3206,x:61,y:107.3,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:19.0321,x:44.55,y:111.2,regY:1.4}},{t:this.ikNode_10,p:{rotation:19.0321,x:56.3,y:84.65,regX:5.3}},{t:this.ikNode_8,p:{rotation:21.4579,x:53.3,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:3.3259,x:57.9,y:22.75,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:7.4073,x:43.05,y:23.45,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0839,x:63.2,y:51.2,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:13.3104,x:54.85,y:19.6,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-35.284,x:69.3,y:80.15,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-35.284,x:60.35,y:107.2,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:18.4725,x:45.1,y:111.3,regY:1.4}},{t:this.ikNode_10,p:{rotation:18.4725,x:56.7,y:84.65,regX:5.4}},{t:this.ikNode_8,p:{rotation:20.8263,x:53.3,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:3.2278,x:57.8,y:22.9,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:7.1896,x:43,y:23.45,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0813,x:63.05,y:51.3,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:12.9191,x:54.7,y:19.55,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-34.2454,x:69.1,y:80.2,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-34.2454,x:59.7,y:107.15,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:17.913,x:45.65,y:111.4,regY:1.4}},{t:this.ikNode_10,p:{rotation:17.913,x:56.95,y:84.6,regX:5.3}},{t:this.ikNode_8,p:{rotation:20.1952,x:53.25,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:3.1306,x:57.8,y:22.8,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:6.9711,x:43.05,y:23.5,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0787,x:62.85,y:51.35,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:12.5274,x:54.7,y:19.55,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.2072,x:68.95,y:80.3,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-33.2072,x:59,y:107,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:17.3536,x:46.25,y:111.45,regY:1.4}},{t:this.ikNode_10,p:{rotation:17.3536,x:57.2,y:84.55,regX:5.3}},{t:this.ikNode_8,p:{rotation:19.5638,x:53.2,regX:8.3,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:3.0325,x:57.9,y:22.85,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:6.7536,x:43.05,y:23.55,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0761,x:62.65,y:51.35,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:12.1362,x:54.8,y:19.45,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-32.1702,x:68.75,y:80.35,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-32.1702,x:58.35,y:106.9,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:16.7939,x:46.85,y:111.5,regY:1.4}},{t:this.ikNode_10,p:{rotation:16.7939,x:57.5,y:84.5,regX:5.3}},{t:this.ikNode_8,p:{rotation:18.9332,x:53.15,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:2.9344,x:57.8,y:22.95,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:6.5353,x:43.05,y:23.6,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0734,x:62.45,y:51.4,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:11.7449,x:54.75,y:19.6,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-31.1316,x:68.55,y:80.45,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-31.1316,x:57.7,y:106.7,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:16.234,x:47.4,y:111.55,regY:1.4}},{t:this.ikNode_10,p:{rotation:16.234,x:57.85,y:84.45,regX:5.3}},{t:this.ikNode_8,p:{rotation:18.3022,x:53.15,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:2.8364,x:57.9,y:22.9,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:6.3181,x:43.05,y:23.5,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0699,x:62.3,y:51.45,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:11.3531,x:54.75,y:19.45,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-30.0939,x:68.35,y:80.45,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-30.0939,x:57,y:106.55,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:15.6739,x:47.95,y:111.65,regY:1.4}},{t:this.ikNode_10,p:{rotation:15.6739,x:58.2,y:84.4,regX:5.3}},{t:this.ikNode_8,p:{rotation:17.6708,x:53.1,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:2.7392,x:57.8,y:23.05,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:6.0999,x:43.05,y:23.65,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0682,x:62.15,y:51.5,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:10.9619,x:54.6,y:19.5,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.055,x:68.15,y:80.5,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-29.055,x:56.3,y:106.4,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:15.1143,x:48.55,y:111.65,regY:1.4}},{t:this.ikNode_10,p:{rotation:15.1143,x:58.45,y:84.35,regX:5.3}},{t:this.ikNode_8,p:{rotation:17.0397,x:53.2,regX:8.4,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:2.6412,x:57.75,y:22.95,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:5.882,x:42.95,y:23.7,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0656,x:61.95,y:51.55,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:10.5704,x:54.55,y:19.4,regX:7.4,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-28.0186,x:67.95,y:80.65,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-28.0186,x:55.8,y:106.25,regX:8.3,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:14.5545,x:49.1,y:111.7,regY:1.4}},{t:this.ikNode_10,p:{rotation:14.5545,x:58.9,y:84.3,regX:5.4}},{t:this.ikNode_8,p:{rotation:16.4088,x:53.05,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:2.5432,x:57.8,y:23.05,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:5.6641,x:43.1,y:23.6,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.063,x:61.75,y:51.6,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:10.1784,x:54.65,y:19.55,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.9811,x:67.8,y:80.65,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-26.9811,x:55,y:106.15,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:13.9943,x:49.75,y:111.6,regY:1.3}},{t:this.ikNode_10,p:{rotation:13.9943,x:59.1,y:84.2,regX:5.3}},{t:this.ikNode_8,p:{rotation:15.7774,x:53,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:2.4452,x:57.8,y:23.05,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:5.4461,x:43.05,y:23.65,regX:43.3,regY:5.7}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0612,x:61.55,y:51.65,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:9.7869,x:54.65,y:19.4,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.9426,x:67.7,y:80.65,regX:27.1}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-25.9426,x:54.35,y:105.95,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:13.4345,x:50.25,y:111.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:13.4345,x:59.35,y:84.15,regX:5.3}},{t:this.ikNode_8,p:{rotation:15.1468,x:52.95,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:2.3472,x:57.9,y:23.1,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:5.2284,x:43.05,y:23.8,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0586,x:61.35,y:51.7,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:9.3959,x:54.65,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.9053,x:67.45,y:80.7,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-24.9053,x:53.8,y:105.85,regX:8.2,regY:0.1}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.875,x:50.85,y:111.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.875,x:59.55,y:84.05,regX:5.2}},{t:this.ikNode_8,p:{rotation:14.5155,x:53.05,regX:8.4,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:2.2501,x:57.8,y:23.25,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:5.0107,x:43.1,y:23.85,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.056,x:61.2,y:51.75,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:9.0044,x:54.45,y:19.5,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.8672,x:67.25,y:80.85,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-23.8672,x:53.1,y:105.5,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:12.3153,x:51.4,y:111.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:12.3153,x:60.15,y:84,regX:5.4}},{t:this.ikNode_8,p:{rotation:13.8842,x:52.9,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:2.1521,x:57.75,y:23.15,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:4.7931,x:43.05,y:23.85,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0533,x:61,y:51.85,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:8.6126,x:54.55,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-22.829,x:67.1,y:80.9,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-22.829,x:52.45,y:105.3,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.7556,x:52.05,y:111.6,regY:1.3}},{t:this.ikNode_10,p:{rotation:11.7556,x:60.35,y:83.9,regX:5.3}},{t:this.ikNode_8,p:{rotation:13.2529,x:53,regX:8.4,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:2.0541,x:57.8,y:23.2,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:4.5747,x:43.1,y:23.9,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0507,x:60.8,y:51.9,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:8.221,x:54.55,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-21.7923,x:66.8,y:80.9,regX:26.9}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-21.7923,x:51.8,y:105.1,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:11.1954,x:52.6,y:111.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:11.1954,x:60.6,y:83.85,regX:5.3}},{t:this.ikNode_8,p:{rotation:12.6222,x:52.8,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:1.9561,x:57.75,y:23.2,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:4.3572,x:42.95,y:23.95,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0472,x:60.6,y:51.95,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:7.8299,x:54.55,y:19.35,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-20.754,x:66.5,y:81,regX:26.9}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-20.754,x:51.15,y:104.9,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:10.6352,x:53.2,y:111.8,regY:1.4}},{t:this.ikNode_10,p:{rotation:10.6352,x:60.9,y:83.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:11.9906,x:52.75,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:1.8582,x:57.9,y:23.25,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:4.1389,x:43.25,y:24,regX:43.4,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0446,x:60.4,y:52,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:7.4381,x:54.55,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.7158,x:66.45,y:81,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-19.7158,x:50.55,y:104.65,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:10.0762,x:53.75,y:111.75,regY:1.4}},{t:this.ikNode_10,p:{rotation:10.0762,x:61.05,y:83.6,regX:5.2}},{t:this.ikNode_8,p:{rotation:11.3591,x:52.75,regX:8.3,regY:3.9,y:53.2}},{t:this.ikNode_6,p:{rotation:1.7602,x:57.75,y:23.4,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:3.9215,x:43.1,y:24,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0428,x:60.2,y:52.05,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:7.0469,x:54.45,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-18.678,x:66.3,y:81,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-18.678,x:49.9,y:104.35,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:9.5164,x:54.3,y:111.7,regY:1.4}},{t:this.ikNode_10,p:{rotation:9.5164,x:61.5,y:83.55,regX:5.3}},{t:this.ikNode_8,p:{rotation:10.7287,x:52.7,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:1.6631,x:57.75,y:23.35,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:3.7033,x:43.15,y:24.05,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0411,x:60,y:52.1,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:6.655,x:54.45,y:19.35,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-17.6408,x:66.15,y:81.05,regX:27.1}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-17.6408,x:49.3,y:104.1,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:8.9567,x:54.9,y:111.65,regY:1.4}},{t:this.ikNode_10,p:{rotation:8.9567,x:61.95,y:83.45,regX:5.4}},{t:this.ikNode_8,p:{rotation:10.0976,x:52.7,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:1.5651,x:57.75,y:23.4,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:3.4853,x:43.1,y:24.1,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0385,x:59.85,y:52.1,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:6.2635,x:54.45,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-16.6024,x:65.9,y:81.1,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-16.6024,x:48.7,y:103.85,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:8.3968,x:55.45,y:111.65,regY:1.4}},{t:this.ikNode_10,p:{rotation:8.3968,x:62.1,y:83.35,regX:5.3}},{t:this.ikNode_8,p:{rotation:9.4659,x:52.8,regX:8.4,regY:3.8,y:53.15}},{t:this.ikNode_6,p:{rotation:1.4672,x:57.75,y:23.4,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:3.268,x:43.15,y:24.1,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0358,x:59.65,y:52.15,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:5.8722,x:54.3,y:19.5,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-15.5647,x:65.7,y:81.15,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-15.5647,x:48.1,y:103.6,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:7.8369,x:56,y:111.6,regY:1.4}},{t:this.ikNode_10,p:{rotation:7.8369,x:62.4,y:83.25,regX:5.3}},{t:this.ikNode_8,p:{rotation:8.8354,x:52.6,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:1.3692,x:57.85,y:23.45,regX:12.3,regY:11.5}},{t:this.ikNode_4,p:{rotation:3.05,x:43.15,y:24.15,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0332,x:59.45,y:52.2,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:5.4804,x:54.4,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.5274,x:65.65,y:81.1,regX:27.1}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-14.5274,x:47.55,y:103.25,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:7.2768,x:56.55,y:111.55,regY:1.4}},{t:this.ikNode_10,p:{rotation:7.2768,x:62.7,y:83.1,regX:5.3}},{t:this.ikNode_8,p:{rotation:8.2042,x:52.55,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:1.2713,x:57.75,y:23.45,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:2.8321,x:43.15,y:24.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0306,x:59.25,y:52.25,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:5.0888,x:54.35,y:19.35,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.4902,x:65.35,y:81.2,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-13.4902,x:46.9,y:102.95,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:6.7166,x:57.15,y:111.5,regY:1.4}},{t:this.ikNode_10,p:{rotation:6.7166,x:62.85,y:83,regX:5.2}},{t:this.ikNode_8,p:{rotation:7.5731,x:52.55,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:1.1733,x:57.7,y:23.5,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:2.6141,x:43.15,y:24.2,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.028,x:59.05,y:52.25,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:4.6975,x:54.25,y:19.5,regX:7.4,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-12.4511,x:65,y:81.2,regX:26.9}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-12.4511,x:46.35,y:102.7,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:6.1571,x:57.75,y:111.45,regY:1.4}},{t:this.ikNode_10,p:{rotation:6.1571,x:63.3,y:82.85,regX:5.3}},{t:this.ikNode_8,p:{rotation:6.9421,x:52.55,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:1.0754,x:57.75,y:23.55,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:2.3962,x:43.15,y:24.25,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0254,x:58.85,y:52.3,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:4.3064,x:54.35,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.4128,x:64.95,y:81.25,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-11.4128,x:45.75,y:102.4,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:5.5972,x:58.35,y:111.35,regY:1.4}},{t:this.ikNode_10,p:{rotation:5.5972,x:63.55,y:82.75,regX:5.3}},{t:this.ikNode_8,p:{rotation:6.311,x:52.5,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:0.9784,x:57.7,y:23.6,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:2.1783,x:43.15,y:24.3,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0219,x:58.65,y:52.3,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:3.9145,x:54.35,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.3755,x:64.75,y:81.3,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-10.3755,x:45.15,y:102.05,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:5.0379,x:58.95,y:111.3,regY:1.4}},{t:this.ikNode_10,p:{rotation:5.0379,x:63.9,y:82.65,regX:5.3}},{t:this.ikNode_8,p:{rotation:5.6798,x:52.4,regX:8.3,regY:3.9,y:53.2}},{t:this.ikNode_6,p:{rotation:0.8804,x:57.7,y:23.65,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:1.9605,x:43.05,y:24.35,regX:43.2,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0192,x:58.45,y:52.3,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:3.5228,x:54.3,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.338,x:64.5,y:81.3,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-9.338,x:44.65,y:101.7,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:4.4782,x:59.5,y:111.2,regY:1.4}},{t:this.ikNode_10,p:{rotation:4.4782,x:64.15,y:82.55,regX:5.3}},{t:this.ikNode_8,p:{rotation:5.0485,x:52.35,regX:8.3,regY:3.9,y:53.2}},{t:this.ikNode_6,p:{rotation:0.7825,x:57.7,y:23.65,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:1.7427,x:43.25,y:24.35,regX:43.4,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0184,x:58.3,y:52.35,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:3.1314,x:54.25,y:19.35,regX:7.5,regY:19.3}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.2993,x:64.15,y:81.35,regX:26.9}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-8.2993,x:44.05,y:101.4,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:3.9181,x:60.05,y:111.1,regY:1.4}},{t:this.ikNode_10,p:{rotation:3.9181,x:64.6,y:82.4,regX:5.4}},{t:this.ikNode_8,p:{rotation:4.4177,x:52.4,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:0.6846,x:57.7,y:23.7,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:1.5249,x:43.2,y:24.4,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0157,x:58.1,y:52.35,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:2.7401,x:54.2,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.2616,x:64.15,y:81.4,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-7.2616,x:43.5,y:101,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:3.3582,x:60.6,y:111.05,regY:1.4}},{t:this.ikNode_10,p:{rotation:3.3582,x:64.75,y:82.25,regX:5.3}},{t:this.ikNode_8,p:{rotation:3.7866,x:52.35,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:0.5866,x:57.7,y:23.8,regX:12.2,regY:11.6}},{t:this.ikNode_4,p:{rotation:1.3072,x:43.2,y:24.45,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0131,x:57.9,y:52.4,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:2.349,x:54.2,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.2252,x:63.95,y:81.4,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-6.2252,x:42.95,y:100.7,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:2.7988,x:61.2,y:110.95,regY:1.4}},{t:this.ikNode_10,p:{rotation:2.7988,x:65.05,y:82.1,regX:5.3}},{t:this.ikNode_8,p:{rotation:3.155,x:52.3,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:0.4887,x:57.65,y:23.75,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:1.0885,x:43.2,y:24.45,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0105,x:57.7,y:52.4,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.957,x:54.2,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.1866,x:63.75,y:81.45,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-5.1866,x:42.4,y:100.35,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:2.2387,x:61.75,y:110.8,regY:1.4}},{t:this.ikNode_10,p:{rotation:2.2387,x:65.3,y:82,regX:5.3}},{t:this.ikNode_8,p:{rotation:2.524,x:52.3,regX:8.3,regY:3.8,y:53.05}},{t:this.ikNode_6,p:{rotation:0.3908,x:57.65,y:23.8,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:0.8708,x:43.2,y:24.5,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0079,x:57.5,y:52.45,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.566,x:54.15,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.1488,x:63.7,y:81.45,regX:27.1}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-4.1488,x:41.9,y:99.95,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.6788,x:62.3,y:110.7,regY:1.4}},{t:this.ikNode_10,p:{rotation:1.6788,x:65.55,y:81.85,regX:5.3}},{t:this.ikNode_8,p:{rotation:1.8931,x:52.2,regX:8.3,regY:3.9,y:53.15}},{t:this.ikNode_6,p:{rotation:0.2929,x:57.65,y:23.8,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:0.6531,x:43.25,y:24.55,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0052,x:57.3,y:52.45,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:1.1742,x:54.15,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:1,scaleY:1,rotation:-3.1115,x:63.35,y:81.45,regX:27}},{t:this.ikNode_18,p:{scaleX:1,scaleY:1,rotation:-3.1115,x:41.35,y:99.55,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.1191,x:62.85,y:110.6,regY:1.4}},{t:this.ikNode_10,p:{rotation:1.1191,x:65.9,y:81.7,regX:5.3}},{t:this.ikNode_8,p:{rotation:1.2616,x:52.2,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:0.195,x:57.65,y:23.85,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:0.4354,x:43.25,y:24.6,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0.0026,x:57.1,y:52.5,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.7825,x:54.15,y:19.5,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:1,scaleY:1,rotation:-2.0735,x:63.15,y:81.4,regX:27}},{t:this.ikNode_18,p:{scaleX:1,scaleY:1,rotation:-2.0735,x:40.8,y:99.2,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:0.5595,x:63.45,y:110.45,regY:1.4}},{t:this.ikNode_10,p:{rotation:0.5595,x:66.15,y:81.55,regX:5.3}},{t:this.ikNode_8,p:{rotation:0.6304,x:52.15,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:0.097,x:57.65,y:23.85,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:0.2177,x:43.3,y:24.6,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:0.9999,scaleY:0.9999,rotation:0,x:56.9,y:52.55,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0.3908,x:54.1,y:19.45,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.0353,x:63.05,y:81.45,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:-1.0353,x:40.35,y:98.8,regX:8.2,regY:0}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:0,x:64.05,y:110.35,regY:1.4}},{t:this.ikNode_10,p:{rotation:0,x:66.5,y:81.4,regX:5.3}},{t:this.ikNode_8,p:{rotation:0,x:52.2,regX:8.3,regY:3.8,y:53.1}},{t:this.ikNode_6,p:{rotation:0,x:57.7,y:23.95,regX:12.2,regY:11.5}},{t:this.ikNode_4,p:{rotation:0,x:43.3,y:24.65,regX:43.3,regY:5.8}},{t:this.ikNode_14,p:{regX:12.5,scaleX:1,scaleY:1,rotation:0,x:56.75,y:52.6,regY:3.9}},{t:this.ikNode_1},{t:this.ikNode_2,p:{rotation:0,x:54.15,y:19.4,regX:7.5,regY:19.4}},{t:this.ikNode_16,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:62.8,y:81.55,regX:27}},{t:this.ikNode_18,p:{scaleX:0.9999,scaleY:0.9999,rotation:0,x:39.8,y:98.45,regX:8.2,regY:0}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-1.1,96.39999999999999,130.29999999999998);


// stage content:
(lib.作業11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 走鋼索男人
	this.instance = new lib.走鋼索男人();
	this.instance.setTransform(73.05,54.05,0.7837,0.7837,0,0,0,45,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(605));

	// 鋼索
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EhwegAiMDg9ABF");
	this.shape.setTransform(743.975,100.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(605));

	// 背景
	this.instance_1 = new lib.補間動畫1("synched",0);
	this.instance_1.setTransform(762.4,89.45);

	this.instance_2 = new lib.補間動畫2("synched",0);
	this.instance_2.setTransform(-44.55,89.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},604).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:-44.55},604).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-556.9,89,2081.9,90);
// library properties:
lib.properties = {
	id: '2285B5B32278FF4FAE9B58B389F68B74',
	width: 500,
	height: 178,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_5.png?1703160350989", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png?1703160350989", id:"CachedBmp_4"},
		{src:"images/作業11_atlas_1.png?1703160350717", id:"作業11_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2285B5B32278FF4FAE9B58B389F68B74'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;