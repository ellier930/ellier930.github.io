(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"作業08_atlas_1", frames: [[0,671,623,434],[0,1107,278,280],[807,671,153,408],[625,671,180,465],[807,1081,192,322],[314,1340,231,138],[280,1107,299,231],[0,1389,312,103],[547,1340,54,128],[0,0,1004,669]]}
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



(lib.CachedBmp_18 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.手握筆psd = function() {
	this.initialize(ss["作業08_atlas_1"]);
	this.gotoAndStop(9);
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


(lib.筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_14
	this.instance = new lib.手握筆psd();
	this.instance.setTransform(-375,-616);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.筆, new cjs.Rectangle(-375,-616,1004,669), null);


// stage content:
(lib.作業08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 筆12
	this.instance = new lib.筆();
	this.instance.setTransform(500.65,444,1,1,0,0,0,127,-281.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).wait(1).to({x:503.85,y:456},0).wait(1).to({x:515.85,y:465.6},0).wait(1).to({x:511.85,y:480},0).wait(1).to({x:507.85,y:495.2},0).wait(1).to({x:513.45,y:508},0).wait(1));

	// 遮色片12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_115 = new cjs.Graphics().p("AgzBZQgfgTgNgeQgLgbAFgcQAEgdATgWQAVgaAjgHQAigIAfAOQAeAOARAfQARAfgFAhQgFAhgaAZQgZAZgiAEIgMAAQgaAAgZgOg");
	var mask_graphics_116 = new cjs.Graphics().p("Ag5CeQghgCgagWQgbgWgIggQgIggAOggQANgfAcgRQAYgPAdAAQgBgLACgMQAFgdASgWQAWgaAigHQAigIAfAOQAfAOARAfQARAfgFAiQgFAhgaAYQgaAZghAEIgNAAQACAXgIAWQgMAegdATQgZAQgdAAIgHAAg");
	var mask_graphics_117 = new cjs.Graphics().p("AAFDYQgggKgTgaQgVgbABglQAAgLACgLQgdgDgXgUQgbgWgIggQgIgfAOggQANggAcgRQAYgPAdAAQgBgLACgMQAFgdASgWQAWgaAigHQAigIAfAOQAfAOARAfQARAfgFAiQgFAhgaAZQgaAZghAEIgNAAQACAPgEAOQALACALAEQAeALATAcQAUAcgBAgQAAAggVAbQgUAcgeAJQgQAFgPAAQgQAAgQgFg");
	var mask_graphics_118 = new cjs.Graphics().p("ABBEKQgggHgVgXQgVgWgFghIgBgJIgPgDQgggLgUgZQgUgcAAgkQAAgLACgLQgcgDgYgVQgagWgIgfQgIgfANghQANgfAcgSQAYgPAeABQgBgLACgMQAEgeATgVQAVgaAjgIQAigIAfAOQAeAOARAgQARAfgFAhQgFAhgaAZQgZAZgiAEIgMABQABAQgDAOQALACAKADQAeALAUAbQAQAYACAbQAgAFAaAaQAcAeABAnQABAfgSAbQgSAcgdAMQgSAHgUAAQgLAAgMgCg");
	var mask_graphics_119 = new cjs.Graphics().p("AgPFTQghgOgRgeQgRgdAFgkQAFgkAYgYQATgSAbgIIACgBQgKgSgEgWIgBgJIgPgEQgggKgUgaQgUgbAAgkQAAgLACgLQgcgDgYgUQgagWgIggQgIggANggQANggAcgRQAYgPAeAAQgBgLACgMQAEgdATgWQAVgaAjgHQAigIAfAOQAeAOARAfQARAfgFAiQgFAhgaAZQgZAZgiAEIgMAAQABAQgDAOQALACAKAEQAeALAUAcQAQAXACAbQAgAFAaAaQAcAeABAmQABAfgSAcQgSAbgdAMIgQAFQARAbAAAeQAAAigWAdQgWAcghAJQgMADgNAAQgUAAgUgIg");
	var mask_graphics_120 = new cjs.Graphics().p("AgLGMQgcgUgLgjQgLgjANggQADgJAFgHQgPgMgKgRQgRgeAFgkQAFgkAYgXQATgTAbgHIACgBQgKgSgEgXIgBgJIgPgDQgggLgUgYQgUgcAAgkQAAgMACgKQgcgEgYgUQgagWgIggQgIgfANghQANgfAcgSQAYgPAeABQgBgMACgLQAEgeATgVQAVgaAjgIQAigIAfAOQAeAOARAgQARAfgFAhQgFAhgaAZQgZAZgiAEIgMABQABAPgDAPQALABAKAEQAeALAUAcQAQAYACAbQAgAFAaAaQAcAeABAmQABAfgSAbQgSAcgdAMIgQAFQARAaAAAeQAAAdgPAZIAJAJQAaAbADAiQADAYgKAYQgJAXgSARQgaAXglACIgIAAQggAAgYgSg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(115).to({graphics:mask_graphics_115,x:316.5165,y:284.2409}).wait(1).to({graphics:mask_graphics_116,x:311.383,y:289.7441}).wait(1).to({graphics:mask_graphics_117,x:311.383,y:296.0295}).wait(1).to({graphics:mask_graphics_118,x:314.9268,y:300.7585}).wait(1).to({graphics:mask_graphics_119,x:314.9268,y:308.6401}).wait(1).to({graphics:mask_graphics_120,x:314.9268,y:315.2934}).wait(1));

	// lady12
	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(302.3,281.05,0.5,0.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).wait(6));

	// 筆11
	this.instance_2 = new lib.筆();
	this.instance_2.setTransform(360.7,413.95,1,1,0,0,0,127,-281.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(111).to({_off:false},0).wait(1).to({x:367.1,y:411.55},0).wait(1).to({x:360.7,y:409.15},0).wait(1).to({x:353.5,y:411.55},0).to({_off:true},1).wait(6));

	// 遮色片11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_111 = new cjs.Graphics().p("AglA5QgUgOgHgaQgHgZAMgWQAJgSASgKQAQgJASAAQAbABATATQASASABAbQACAagQATQgQAUgbAEIgLABQgUAAgQgLg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AhUBBQgVgOgHgaQgGgaALgWQAKgSASgKQAQgIASAAQAWABAQAMQAEgGAEgFQATgSAcAAQAXABAUAQQATAQAEAXQAEAXgNAWQgMAWgWAIQgWAIgYgIQgJgDgIgFIgDADQgOATgbAEIgNACQgTAAgQgLg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AhYB0QgVgOgHgaQgGgbALgWQAKgSASgJQAQgIASAAQAWABAQALQAEgFAFgFIACgDQgFgHgFgKQgKgVAGgZQAFgYARgPQASgPAaAAQAZAAASAQQAPAOAGAUQAHAYgKAZQgHARgMAKQANANADASQAEAYgNAWQgMAWgWAIQgWAIgYgIQgJgDgIgFIgDADQgOATgbAEIgNACQgTAAgQgLg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AhYB0QgVgOgHgaQgGgbALgWQAIgOANgJQgKgMgCgRQgDgTAIgSQAIgSAQgLQASgMAYABQAOABAMAGQAFgJAIgHQASgPAaAAQAZAAASAQQAPAOAGAUQAHAYgKAZQgHARgMAKQANANADASQAEAYgNAWQgMAWgWAIQgWAIgYgIQgJgDgIgFIgDADQgOATgbAEIgNACQgTAAgQgLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(111).to({graphics:mask_1_graphics_111,x:165.3141,y:266.0797}).wait(1).to({graphics:mask_1_graphics_112,x:170.0561,y:265.3047}).wait(1).to({graphics:mask_1_graphics_113,x:170.4726,y:260.2047}).wait(1).to({graphics:mask_1_graphics_114,x:170.4726,y:260.2047}).wait(7));

	// lady11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(111).to({_off:false},0).wait(10));

	// 筆10
	this.instance_3 = new lib.筆();
	this.instance_3.setTransform(424.6,425.9,1,1,0,0,0,127,-281.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(107).to({_off:false},0).wait(1).to({x:438.2,y:429.1},0).wait(1).to({x:452.6,y:426.7},0).wait(1).to({x:462.2,y:420.3},0).to({_off:true},1).wait(10));

	// 遮色片10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_107 = new cjs.Graphics().p("AgPBmQgggFgYgYQgYgYgGggQgFgfAPgeQAPgfAdgPQAcgQAhAFQAjAEAXAXQAYAXAGAjQAGAigQAdQgOAdgfAPQgYAMgXAAIgPgBg");
	var mask_2_graphics_108 = new cjs.Graphics().p("AArB8QgngHgVgdQgGgHgEgIQgZAKgagEQgggFgZgYQgYgYgFgfQgFggAPgfQAPgfAcgPQAdgPAiAFQAiAEAWAXQAMALAIAOQAJgDALgCQAngFAfATQAcASAMAgQANAggIAgQgMAqgmAVQgWAMgaAAQgLAAgLgCg");
	var mask_2_graphics_109 = new cjs.Graphics().p("ACCCOQgjgDgZgVQgNgLgJgPIgKAHQggARglgHQgngIgWgcQgGgHgEgIQgZAJgagEQgggFgZgYQgYgYgFgfQgFggAPgeQAPgfAcgPQAdgQAiAFQAiAFAXAWQAMALAHAPQAKgEALgBQAmgGAfAUQAUAMAMAVIAKgGQAegSAgAEQAgADAbAXQAaAWAHAfQAIAggOAgQgNAfgcASQgYAPgeAAIgIAAg");
	var mask_2_graphics_110 = new cjs.Graphics().p("ABKCOQgjgDgZgVQgNgLgIgPIgKAHQggARgmgHQgngIgWgcQgGgHgEgIQgZAJgagEQgggFgZgYQgYgYgFgfQgFggAPgeQAPgfAcgPQAdgQAiAFQAiAFAXAWQAMALAIAPQAJgEALgBQAngGAfAUQATAMAMAVIAKgGQAegSAgAEIAOACQAKgRASgOQAfgXAkACQAkACAcAbQAdAaAEAkQADAagKAXQgQApgoAQQgfANgegHQgOAYgXAPQgYAPgeAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(107).to({graphics:mask_2_graphics_107,x:223.5962,y:270.85}).wait(1).to({graphics:mask_2_graphics_108,x:229.9055,y:273.1765}).wait(1).to({graphics:mask_2_graphics_109,x:237.4464,y:274.7296}).wait(1).to({graphics:mask_2_graphics_110,x:243.0235,y:274.7296}).wait(11));

	// lady10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhhAjQgWgWgpggIgsglQgJgJABgGIADgCIgCAEIAbgFQAdgBASAPIAIgBQAYACA4AQQA8ASAPACQAYAEArgEIA8gFIACACIAQgBQAUAAATAGIABACQAEADgHAJIgWAUIgkAmQgdAYggAAQiSAAgogog");
	this.shape_1.setTransform(243.3033,274.5184);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(107).to({_off:false},0).wait(14));

	// 筆09
	this.instance_4 = new lib.筆();
	this.instance_4.setTransform(426.9,417.1,1,1,0,0,0,127,-281.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(103).to({_off:false},0).wait(1).to({x:438.9,y:413.9},0).wait(1).to({x:451.7,y:418.7},0).wait(1).to({x:460.5,y:429.9},0).to({_off:true},1).wait(14));

	// 遮色片09 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_103 = new cjs.Graphics().p("AglBgQgigNgSgiQgTgjAIgiQAHgjAfgYQAegYAjABQAlABAdAaQAcAaAFAkQAFAjgTAfQgSAfglANQgSAGgQAAQgSAAgSgHg");
	var mask_3_graphics_104 = new cjs.Graphics().p("AhkBwQgigOgSgiQgTgiAIgiQAHgkAfgYQAegYAkABQAWABAUAKIAHgIQAbgeAmgDQAlgDAhAZQAhAZAGAlQAHAhgRAhQgOAcgeAPQgdAPgfgEQgRgCgOgHQgSAYgeAKQgSAGgRAAQgSAAgSgGg");
	var mask_3_graphics_105 = new cjs.Graphics().p("AimB8QgigOgSgiQgTgiAIgjQAHgjAfgYQAegYAkABQAWABATAKIAIgIQAcgeAmgDQAfgDAdASQAQgVAZgLQAggNAkALQAlALAUAdQAUAdgEAlQgDAlgYAaQgYAYgkAFQgkAGgdgRIgDgCQgNARgUAKQgdAPgegEQgRgCgOgHQgSAYgfAKQgSAGgSAAQgSAAgRgGg");
	var mask_3_graphics_106 = new cjs.Graphics().p("ACUCKQgfgLgSgaQgNgSgEgWQgfACgagPIgCgBQgNAQgTALQgeAPgfgEQgQgDgOgHQgSAYggALQgkAMgigNQgigNgTgiQgSgjAHgiQAIgjAegYQAfgYAkABQAWAAATAKIAHgIQAcgeAmgDQAhgDAcATQAQgWAYgKQAhgOAkALQAkALAUAdQANASADAUIAKAAQAaABAXAOQAYAOANAWQAMAUABAZQACAYgJAWQgJAWgTARQgSAQgXAGQgNADgMAAQgSAAgTgHg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(103).to({graphics:mask_3_graphics_103,x:225.4608,y:267.1544}).wait(1).to({graphics:mask_3_graphics_104,x:231.7689,y:265.6153}).wait(1).to({graphics:mask_3_graphics_105,x:238.3929,y:264.4344}).wait(1).to({graphics:mask_3_graphics_106,x:243.8092,y:265.8922}).wait(15));

	// lady09
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("ACsA+IgRABQgvgwgNAAQglAFgVAAQgLgBgQgFQgPgFgLAAQgOAAg3ALIg0AKQgSgQgdABIgbAGQABgGAHgCQAxgVAmgUQBKgnAkAAQAFAAATAIQAUAIAJAAQADgBAXgHQASgHARAIQAZAKAgAkQAlApAJAnQgUgGgTAAg");
	this.shape_2.setTransform(243.3,265.5);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(103).to({_off:false},0).wait(18));

	// 筆08
	this.instance_5 = new lib.筆();
	this.instance_5.setTransform(476.35,510.95,1,1,0,0,0,127,-281.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(96).to({_off:false},0).wait(1).to({x:454.75,y:523.1},0).wait(1).to({x:429.1,y:535.25},0).wait(1).to({x:403.45,y:544.7},0).wait(1).to({x:383.2,y:550.1},0).wait(1).to({x:360.25,y:554.15},0).wait(1).to({x:338.65},0).to({_off:true},1).wait(18));

	// 遮色片08 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_96 = new cjs.Graphics().p("AhNCCQgmgXgTgmQgagyAQg7QARg8AxgeQAwgeA8ANQA9AMAhAuQAiAugIA9QgIA9grAlQgrAkg2AAIgDAAQgoAAgkgWg");
	var mask_4_graphics_97 = new cjs.Graphics().p("AiqDGQgigNgZgdQgZgdgJgkQgIgkAJglQAJgkAYgcQAkgoAxgKQAxgIArAUQAKAFAKAGIAFgXQAQg8AwgeQAxgeA9ANQA8AMAiAuQAhAugIA+QgHA8gsAlQgqAkg3AAQgqABgmgXIgDgCQgCAVgIAVQgQAmgeAYQgfAYgoAGQgMACgMAAQgcAAgagKg");
	var mask_4_graphics_98 = new cjs.Graphics().p("AkjD+QgmgOgagiQgaghgHgoQgFgeAGgeQAGgeARgaQARgYAZgRQAagSAegFQAfgGAgAIQAgAHAZAUIAEADIAEgVQAJglAYgcQAjgoAygKQAvgIAsAUQAKAFAJAGIAFgXQARg8AxgeQAwgeA9ANQA9AMAhAuQAiAugIA+QgIA9grAkQgrAkg2AAQgqABgmgXIgDgCQgCAVgJAVQgQAmgfAYQgeAYgpAGQgnAGglgOQgVgIgSgPQgCAXgKAXQgPAngfAYQgeAZgpAHQgNACgNAAQgaAAgZgJg");
	var mask_4_graphics_99 = new cjs.Graphics().p("Al+E8QgugHgigdQgXgUgOgeQgNgcgBggQgBgfALgdQAMgeAWgWQAfggAugKQAugJApAQQAVAIARANQAAgNADgMQAHgdAQgaQARgZAagRQAagSAdgFQAfgGAgAIQAgAHAaAUIADADIAEgVQAJglAXgcQAkgoAxgKQAxgIArAUQAKAFAKAGIAFgXQAQg8AxgeQAxgeA9ANQA8AMAiAuQAhAugIA+QgHA9gsAlQgqAkg3AAQgqABgmgXIgDgCQgCAVgIAUQgQAmgfAYQgfAYgoAGQgpAGglgOQgVgJgSgOQgCAXgJAXQgQAngdAYQgfAZgoAHQgpAHgkgOQgXgJgSgPQgDAkgUAgQgYAogoATQgeAOgiAAQgLAAgMgBg");
	var mask_4_graphics_100 = new cjs.Graphics().p("AoVFWQgvgYgXg0QgWg0APgzQAOgyAvggQAvggA1AFQAaACAXAMQAMgeAVgWQAfgfAugJQAugKAqAQQAUAIASANQAAgMADgNQAGgeARgZQARgaAZgRQAagRAegGQAfgGAfAIQAgAIAZATIAEADIAEgUQAJglAYgcQAjgoAygKQAwgJAsAVQAKAFAJAGIAFgYQARg7AxgeQAwgeA9AMQA9AMAhAvQAiAugIA9QgIA+grAlQgrAjg2AAQgqABgmgXIgDgBQgCAVgJAVQgQAkgfAYQgeAZgpAGQgoAGglgPQgWgIgRgOQgCAXgKAXQgPAmgfAZQgeAZgpAGQgnAHglgOQgWgIgTgPQgCAkgUAgQgZAogoATQgoATgugHQgXgDgTgIQgIATgOARQggAqg3ANQgTAEgSAAQgjAAgfgQg");
	var mask_4_graphics_101 = new cjs.Graphics().p("Ap3GHQgfgLgYgWQgXgXgMgeQgNgfABggQACg7AugsQAugsA6gBQAwAAAnAdIAAgBQAPgyAvggQAvggA0AFQAaACAYALQALgcAWgWQAfggAugJQAugKApAQQAVAIARAOQABgNACgNQAHgeAQgZQARgaAZgRQAagRAdgGQAfgGAgAIQAgAIAaATIAEADIADgUQAJglAYgcQAkgoAxgKQAxgJArAVQALAEAJAHIAFgYQAQg7AxgeQAxgeA9AMQA8AMAiAvQAhAugIA9QgHA+gsAlQgqAjg3AAQgqABgmgXIgCgCQgDAWgIAVQgQAlgfAYQgfAYgoAGQgpAGglgPQgVgHgSgOQgCAWgJAXQgQAmgeAZQgfAZgoAGQgpAHgkgOQgXgIgSgPQgDAjgTAhQgYAogoATQgoATgvgHQgWgDgUgJQgIAUgNARQggAqg4ANQg3AMgvgYIgSgLQgKAegXAbQgqAvg6AFIgMABQgaAAgagJg");
	var mask_4_graphics_102 = new cjs.Graphics().p("ArUGMQgsgKgfgeQgfgegKgsQgLgsAOgoQAOgpAjgcQAjgcArgGQArgFApAUQAbAOATAVIAHgHQAugsA6AAQAwAAAnAdIAAgBQAPgzAvggQAvggA0AFQAaADAXALQAMgcAWgWQAfggAugKQAugJAoAQQAVAIARAOQABgNACgNQAHgeAQgaQARgZAagRQAagSAdgFQAfgGAgAIQAgAHAaAUIADADIAEgVQAJglAYgcQAkgoAxgKQAxgIArAUQALAFAJAGIAFgXQAQg8AxgeQAxgeA9ANQA8AMAiAuQAhAugIA+QgHA9gsAlQgqAkg3AAQgqABgmgXIgDgCQgCAWgIAUQgQAmgfAYQgfAXgoAGQgpAGglgOQgVgHgSgPQgCAXgJAWQgQAngeAYQgfAZgoAHQgpAHgkgOQgXgIgSgPQgDAjgUAgQgYAogoATQgnATgvgGQgWgDgUgJQgIATgNASQggAqg4AMQg3ANgvgYIgTgLQgJAegXAaQgqAwg6AFQggACgggLQgfgLgYgWIgGgGQgZAbgjANQgYAJgaAAQgRAAgRgEg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(96).to({graphics:mask_4_graphics_96,x:299.5318,y:354.6183}).wait(1).to({graphics:mask_4_graphics_97,x:287.8889,y:360.229}).wait(1).to({graphics:mask_4_graphics_98,x:275.5135,y:365.7328}).wait(1).to({graphics:mask_4_graphics_99,x:263.1981,y:371.149}).wait(1).to({graphics:mask_4_graphics_100,x:252.9271,y:375.2552}).wait(1).to({graphics:mask_4_graphics_101,x:241.2734,y:379.3893}).wait(1).to({graphics:mask_4_graphics_102,x:230.0771,y:379.4042}).wait(19));

	// lady08
	this.instance_6 = new lib.CachedBmp_11();
	this.instance_6.setTransform(153.35,351.75,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(96).to({_off:false},0).wait(25));

	// 筆07
	this.instance_7 = new lib.筆();
	this.instance_7.setTransform(466.95,459.95,1,1,0,0,0,127,-281.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(86).to({_off:false},0).wait(1).to({x:471,y:485.6},0).wait(1).to({x:489.9,y:497.75},0).wait(1).to({x:512.85},0).wait(1).to({x:533.1,y:493.7},0).wait(1).to({x:556.05,y:492.35},0).wait(1).to({x:577.65,y:499.1},0).wait(1).to({x:595.2,y:515.3},0).wait(1).to({x:607.35,y:538.25},0).wait(1).to({x:616.8,y:561.2},0).to({_off:true},1).wait(25));

	// 遮色片07 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_86 = new cjs.Graphics().p("AhhB2QgngggLg0QgMgzAVgtQAUguAwgZQAvgYAwAIQAxAIAkAnQAlAnAFAyQADAkgPAjQgOAkgdAYQgpAig4AAQg5AAgogig");
	var mask_5_graphics_87 = new cjs.Graphics().p("AhIESQgzgTgdgzQgcgzALg2QALg1AvgkQASgMATgIIgCgCQgngggLg0QgMg0AVgtQAUguAwgZQAvgYAwAIQAxAIAkAnQAlAnAFAyQADAlgPAjQgOAkgdAYQgUAQgYAIIALAKQAqApAFA2QAEAugWAoQgaAwg3AVQgdALgaAAQgaAAgYgJg");
	var mask_5_graphics_88 = new cjs.Graphics().p("AAXGVQglgEgggXQgggYgRgiQgXgxAPg5QAJgiAUgYIgRgFQg0gTgcgzQgdgzALg1QAMg1AugkQASgOATgIIgCgBQgmgggMg0QgMg0AVgtQAVguAvgZQAvgYAwAIQAxAIAlAnQAkAnAFAyQAEAlgPAjQgPAkgdAYQgUAQgYAJIAMAKQAqApAEA2QAEAtgVAoQgIAOgLAMQAwALAfAjQAlAoABA7QABA7gjApQgYAeglAPQgbAKgcAAIgUgBg");
	var mask_5_graphics_89 = new cjs.Graphics().p("ABfGkQglgQgXgfQgJgNgHgOQgRANgUAJQglAPgmgFQgmgFgggXQghgXgQgjQgYgxAQg5QAJghATgZIgRgFQgzgSgdg0QgcgzALg0QALg2AvgjQASgOATgIIgCgCQgngggLgzQgMg0AVguQAUgtAwgZQAvgZAxAIQAxAJAkAmQAkAnAFAyQADAlgPAkQgOAkgcAXQgUARgYAIIALALQAqAoAFA3QAEAtgWAnQgIAPgKAMQAuAKAgAjQAPARAJAVQAMgJAPgHQApgWAtAFQAsAFAkAeQAkAeANArQAIAcgCAeQgDAegOAaQgRAigiAXQgiAWgmADIgNABQggAAgegOg");
	var mask_5_graphics_90 = new cjs.Graphics().p("AgMGkQglgQgXgfQgJgNgHgOQgRANgVAJQglAPgmgFQgmgFgggXQghgXgQgjQgYgxAQg5QAJghAUgZIgSgFQgzgSgdg0QgcgzALg0QALg2AvgjQASgOATgIIgCgCQgngggLgzQgMg0AVguQAUgtAwgZQAvgZAxAIQAxAJAkAmQAlAnAFAyQADAlgPAkQgOAkgdAXQgUARgYAIIALALQAqAoAFA3QAEAtgWAnQgIAPgKAMQAvAKAgAjQAPARAKAVQAMgJAOgHQAogWAtAFQAnAFAhAYQAKgPANgNQAjghAtgHQAugHAsAVQAsAVAXAoQAXApgFAxQgEAwgeAkQgVAZgfAOQgfAPghAAQgiAAgggPQgMgGgLgIQgRAZgbATQgiAWgmADIgNABQggAAgdgOg");
	var mask_5_graphics_91 = new cjs.Graphics().p("Ah0GkQglgQgXgfQgJgNgHgOQgRANgVAJQglAPgmgFQgmgFgggXQghgXgQgjQgYgxAQg5QAJghATgZIgRgFQgzgSgdg0QgcgzALg0QALg2AvgjQARgOAUgIIgCgCQgngggLgzQgMg0AVguQAUgtAwgZQAvgZAxAIQAxAJAkAmQAlAnAFAyQADAlgPAkQgOAkgdAXQgUARgYAIIALALQAqAoAFA3QAEAtgWAnQgIAPgKAMQAvAKAgAjQAPARAJAVQAMgJAPgHQApgWAtAFQAmAFAhAYQAKgPANgNQAjghAtgHQAugHAsAVIASAKIAJgMQAigoAvgLQAvgLAvAUQAwAUAYAqQAVAjAAArQgBArgVAjQgVAjgmAUQgmAUgpgCQgegBgcgNIgRgKIgJAMQgVAZgfAOQgfAPghAAQgiAAgggPQgMgGgLgIQgRAZgbATQghAWgmADIgNABQggAAgegOg");
	var mask_5_graphics_92 = new cjs.Graphics().p("AjoGkQglgQgXgfQgJgNgHgOQgRANgVAJQglAPgmgFQgmgFgggXQghgXgQgjQgYgxAQg5QAJghAUgZIgSgFQgzgSgdg0QgcgzALg0QALg2AvgjQASgOATgIIgCgCQgngggLgzQgMg0AVguQAUgtAwgZQAvgZAxAIQAxAJAkAmQAlAnAFAyQADAlgPAkQgOAkgdAXQgUARgYAIIALALQAqAoAFA3QAEAtgWAnQgHAPgLAMQAvAKAgAjQAQARAJAVQAMgJAOgHQApgWAtAFQAnAFAhAYQAKgPANgNQAjghAsgHQAugHAsAVIASAKIAJgMQAigoAvgLQAvgLAvAUQAsASAYAlIALgKQApgfA3ABQA2ABAoAgQAqAiAKA6QAKA5gbAuQgQAcgbATQgaATgfAGQgzALgxgZQglgTgWggQgOANgTAKQgmAUgpgCQgegBgcgNIgRgKIgJAMQgVAZgfAOQgfAPghAAQgiAAgfgPQgMgGgLgIQgQAZgcATQgiAWgmADIgNABQggAAgegOg");
	var mask_5_graphics_93 = new cjs.Graphics().p("AIyG8Qg2gKgigmQgRgUgKgZQgQAHgRAEQgyAKgxgYQgmgTgVggQgPANgSAKQgmAUgpgCQgegCgcgNIgSgJIgJALQgVAZgeAPQgeAOghAAQgiAAgggPQgMgGgLgIQgRAagbASQgiAXgmADQgnADglgQQgkgRgXgfQgKgMgGgPQgRAOgWAJQglAOgmgFQgmgEgggXQgggYgRgiQgXgxAPg5QAKgiATgYIgRgFQg0gTgcgzQgdgyALg2QAMg1AugkQASgOATgHIgCgCQgmgggMg0QgMg0AVgtQAVguAvgZQAvgYAxAIQAxAIAlAnQAkAnAFAyQAEAlgPAjQgPAkgdAYQgUARgYAIIAMAKQAqApAEA2QAEAugVAnQgIAOgLANQAwAKAfAjQAQARAJAVQAMgKAOgHQAqgVAsAFQAoAEAhAYQAJgOAOgNQAjghAtgHQAtgIAsAVIASAKIAJgMQAhgnAvgMQAvgLAwAUQArATAYAkIALgJQApggA3ABQA3ABAoAhQAeAZAOAlQAbgNAfgCQA0gCAsAgQAtAhANAyQAOAxgWAzQgVAyguAZQggARgkAAQgPAAgQgDg");
	var mask_5_graphics_94 = new cjs.Graphics().p("AJwIkQgzgRgcgpQgcgpACg2QABggAMgbQgZADgbgFQg2gKgigmQgSgUgJgZQgQAHgRAEQgyAKgxgYQgmgTgWggQgOANgSAKQgmAUgpgCQgegCgcgNIgRgJIgJALQgVAZgeAPQgfAOghAAQgiAAgggPQgNgGgLgIQgQAagbASQgiAXgmADQgnADglgQQgkgRgXgfQgKgMgGgPQgSAOgVAJQglAOgmgFQgmgEgggXQgggYgRgiQgXgxAPg5QAJgiAUgYIgRgFQg0gSgcgzQgdgzALg2QAMg1AugkQASgNATgIIgCgCQgmgggMg0QgMg0AVgtQAVguAvgZQAvgYAxAIQAxAIAlAnQAkAnAFAyQAEAlgPAjQgPAkgdAYQgUARgYAIIAMAKQAqApAEA2QAEAugVAoQgIAPgLAMQAwAKAfAiQAQARAJAVQAMgJAOgIQAqgVAsAFQAnAEAhAYQAKgOAOgNQAjggAtgHQAtgIAtAVIARAKIAKgMQAhgnAugMQAvgLAwAUQArATAYAkIALgJQApggA3ABQA3ABAoAhQAeAYAOAlQAbgNAfgCQA0gCAsAgQAtAhANAyQAOAxgWAzIAAABQAPgDAQAAQAhACAeAQQAeARAVAbQAXAdAHAmQAHAlgJAkQgKAkgaAcQgbAcgiAMQgYAIgYAAQgYAAgagJg");
	var mask_5_graphics_95 = new cjs.Graphics().p("AKKKHQgvgbgUg3QgTg4AUgyIAGgOIgVgGQgzgRgcgpQgcgpACg2QABggAMgbQgZADgbgFQg2gKgigmQgRgUgKgZQgQAHgRAEQgyAKgxgYQgmgTgVggQgPANgSAKQgmAUgpgCQgdgCgcgNIgSgJIgJALQgVAZgeAPQgfAOghAAQgiAAgggPQgNgGgKgIQgRAagbASQgiAXgmADQgnADglgQQgkgRgXgfQgKgMgGgPQgRAOgWAJQglAOgmgFQgmgEgggXQgggYgRgiQgXgxAPg4QAJgiAUgYIgRgFQg0gTgcgzQgdgzALg2QAMg1AugkQASgOATgHIgCgCQgmgggMg0QgMg0AVgtQAVguAvgZQAvgYAxAIQAxAIAlAnQAkAnAFAyQAEAlgPAjQgPAkgdAYQgUARgYAIIAMAKQAqApAEA2QAEAugVAoQgIAOgLANQAwAKAfAjQAQARAJAVQAMgKAOgHQAqgVAsAFQAnAEAiAYQAJgOAOgNQAjghAtgHQAtgIAtAVIASAKIAJgMQAhgnAvgMQAugLAwAUQArATAYAkIALgJQApggA3ABQA3ABAoAhQAeAZAOAlQAbgNAfgCQA0gCAsAgQAtAhANAxQAOAxgWAzIAAABQAPgDAQAAQAhACAeAQQAeARAVAbQAXAdAHAmQAHAlgJAkQgEAPgHANIAHACQA1AMAjAvQAjAvgFA3QgEAugcAkQgiArg5ALQgRADgQAAQgnAAghgTg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(86).to({graphics:mask_5_graphics_86,x:279.1149,y:293.0015}).wait(1).to({graphics:mask_5_graphics_87,x:277.0299,y:306.1028}).wait(1).to({graphics:mask_5_graphics_88,x:278.9749,y:318.4406}).wait(1).to({graphics:mask_5_graphics_89,x:290.7252,y:321.1822}).wait(1).to({graphics:mask_5_graphics_90,x:301.5165,y:321.1822}).wait(1).to({graphics:mask_5_graphics_91,x:311.9468,y:321.1822}).wait(1).to({graphics:mask_5_graphics_92,x:323.5052,y:321.1822}).wait(1).to({graphics:mask_5_graphics_93,x:333.8572,y:322.5215}).wait(1).to({graphics:mask_5_graphics_94,x:342.0873,y:333.5079}).wait(1).to({graphics:mask_5_graphics_95,x:347.5728,y:344.4233}).wait(26));

	// lady07
	this.instance_8 = new lib.CachedBmp_12();
	this.instance_8.setTransform(270.45,282.15,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(86).to({_off:false},0).wait(35));

	// 筆06
	this.instance_9 = new lib.筆();
	this.instance_9.setTransform(481.35,425.45,1,1,0,0,0,127,-281.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(78).to({_off:false},0).wait(1).to({x:466.5,y:445.7},0).wait(1).to({x:446.25,y:463.25},0).wait(1).to({x:420.6,y:461.9},0).wait(1).to({x:401.7,y:449.75},0).wait(1).to({x:385.5,y:433.55},0).wait(1).to({x:376.05,y:416},0).wait(1).to({x:369.3,y:397.1},0).to({_off:true},1).wait(35));

	// 遮色片06 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_78 = new cjs.Graphics().p("AgFCYQgpgCgkgXQgkgYgSglQgYgxAPg4QAQg5AugfQAugeA5AIQA7AIAkApQAfAjAFAzQAFAxgYApQgVAkgmAVQgjATglAAIgGAAg");
	var mask_6_graphics_79 = new cjs.Graphics().p("AiPDnQgtghgNgyQgOgyAXgzQAXgyAugYQAVgKAWgEIgBgCQgYgxAPg5QAQg5AugfQAtgeA6AIQA7AIAkApQAfAjAFAzQAFAygYApQgVAjgmAVQgWANgYAEQAPAfAAAmQgBA4ggAoQgUAZgeAOQgcAPggACIgHABQgwAAgqgfg");
	var mask_6_graphics_80 = new cjs.Graphics().p("Ah+FzQgygBgqgiQgqgjgLgxQgLgyAXgxQAXgwAugXQAggQAkABQgHgOgEgOQgNgxAXgzQAWgzAvgYQAUgKAXgEIgCgCQgYgxAQg5QAQg5AsgfQAugeA7AIQA6AIAkApQAgAjAFAzQAEAygYApQgUAkgmAVQgXAMgYAFQAPAeAAAmQAAA4ghAoQgUAZgdAOQgdAPggACIgHAAQALAYACAdQAFAxgYApQgTAkglAUQgkAUgnAAIgEAAg");
	var mask_6_graphics_81 = new cjs.Graphics().p("AkFGpQgwgDgkgbQgagUgPgeQgQgegCggQgCggAMggQAMgfAXgXQAbgbAngLQAmgLAmAJQApAJAgAgQgBgiARgiQAXgwAtgXQAggQAjABQgHgMgCgPQgOgyAWgzQAXgzAugYQAVgKAWgEIgBgCQgYgxAPg5QAQg5AugfQAugeA6AIQA7AIAkApQAfAjAFAzQAFAygYApQgVAkgmAVQgXANgYAEQAQAfAAAmQgBA3ggAoQgUAZgeAOQgdAPggACIgHABQALAXADAdQAEAxgXApQgUAkgmAUQglAVgpgBQgygBgqgiIgLgKQAAAigPAiQgVArgnAXQgkAVgqAAIgJgBg");
	var mask_6_graphics_82 = new cjs.Graphics().p("AiRGpQgwgDgkgbQgagUgQgeIAAgBQgUAQgZAJQgpAQgpgJQgpgIgggdQgggegMgoQgOgyAVgzQAWgzAugZQAugYA3ALQA2ALAiAoQAKAMAIAOQAYgUAfgJQAngLAlAJQAqAJAfAgQAAgiAQgiQAWgwAugXQAggQAkABQgHgMgEgPQgNgyAXgzQAWgzAvgYQAUgKAXgEIgCgCQgYgxAQg5QAQg5AtgfQAugeA7AIQA6AIAkApQAgAjAFAzQAEAygYApQgUAkgmAVQgXANgYAEQAPAfAAAmQAAA3ghAoQgUAZgdAOQgdAPggACIgHABQALAXACAdQAFAxgYApQgUAkglAUQgmAVgpgBQgygBgqgiIgLgKQAAAigQAiQgTArgoAXQgjAVgqAAIgJgBg");
	var mask_6_graphics_83 = new cjs.Graphics().p("AgxGpQgwgDgkgbQgagUgPgeIgBgBQgTAQgaAJQgpAQgpgJQgpgIgggdQgggegLgoQgGgUAAgUIgSADQg5AJgzgkQg0gkgMg5QgMg4Ahg2QAhg0A5gPQA4gPA3AeQA3AfASA2QAHAWAAAXQAhgIAkAHQA3ALAhAoQALAMAHAOQAYgUAggJQAmgLAmAJQAoAJAgAgQAAgiAQgiQAXgwAtgXQAggQAkABQgGgMgEgPQgOgyAXgzQAXgzAugYQAVgKAWgEIgBgCQgYgxAPg5QAQg5AugfQAugeA6AIQA7AIAkApQAfAjAFAzQAFAygYApQgVAkgmAVQgXANgYAEQAQAfAAAmQgBA3ggAoQgUAZgeAOQgdAPggACIgHABQALAXADAdQAEAxgXApQgUAkgmAUQglAVgpgBQgzgBgqgiIgLgKQABAigQAiQgVArgnAXQgjAVgqAAIgJgBg");
	var mask_6_graphics_84 = new cjs.Graphics().p("AgBGpQgwgDgkgbQgagUgPgeIgBgBQgTAQgaAJQgpAQgpgJQgpgIgggdQgggegLgoQgGgUAAgUIgSADQg5AJgzgkQg0gkgMg5QgFgaAEgaQgsgRgbgpQgdgrACgxQADgyAigoQAigoAwgLQAxgLAwAWQAwAWAXArQAUAlgCAtIgCAPIASAIQA3AfASA2QAHAWAAAXQAhgIAkAHQA3ALAhAoQALAMAHAOQAYgUAggJQAlgLAmAJQApAJAgAgQAAgiAQgiQAXgwAtgXQAggQAkABQgGgMgEgPQgOgyAXgzQAXgzAugYQAVgKAWgEIgBgCQgYgxAPg5QAQg5AugfQAugeA6AIQA7AIAkApQAfAjAFAzQAFAygYApQgVAkgmAVQgXANgYAEQAQAfAAAmQgBA3ggAoQgUAZgeAOQgdAPggACIgHABQALAXADAdQAEAxgXApQgUAkgmAUQglAVgpgBQgzgBgqgiIgLgKQABAigQAiQgVArgnAXQgjAVgrAAIgIgBg");
	var mask_6_graphics_85 = new cjs.Graphics().p("AAnGqQgvgDgkgbQgagUgPgeIgBgBQgTAQgaAJQgpAQgpgJQgpgIgggdQgggegLgoQgGgUAAgVIgSAEQg5AJgzgkQg0gkgMg5QgFgaAEgaQgsgRgbgpQgdgrACgxQACgXAIgVIgJgDQgigSgVgeQgWgfgFgmQgFgmANgjQARgsAqgcQApgcAwABQAqABAlAYQAlAZARAmQASAmgFAsQgCASgGARIADABQAwAWAXArQAUAlgCAtIgCAPIASAIQA3AfASA2QAHAWAAAXQAhgJAkAIQA3ALAhAoQALAMAHAOQAYgUAfgJQAmgLAmAJQApAJAgAgQAAgiAQgiQAXgwAtgXQAggQAkABQgGgNgEgOQgOgyAXgzQAXgzAugYQAVgKAWgEIgBgCQgYgxAPg5QAQg5AugfQAugeA6AIQA7AIAkApQAfAjAFAzQAFAygYApQgVAkgmAVQgXAMgXAFQAPAfAAAmQgBA3ggAoQgUAZgeAOQgdAPggACIgHAAQALAYADAdQAEAxgXApQgUAkgmAUQglAVgpgBQgzgBgqgiIgLgKQABAigQAiQgVArgnAXQgjAUgqAAIgKAAg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_6_graphics_78,x:294.1314,y:258.9256}).wait(1).to({graphics:mask_6_graphics_79,x:288.6109,y:269.9008}).wait(1).to({graphics:mask_6_graphics_80,x:281.7602,y:280.8442}).wait(1).to({graphics:mask_6_graphics_81,x:268.7462,y:286.3041}).wait(1).to({graphics:mask_6_graphics_82,x:257.1685,y:286.3041}).wait(1).to({graphics:mask_6_graphics_83,x:247.5255,y:286.3041}).wait(1).to({graphics:mask_6_graphics_84,x:242.7256,y:286.3041}).wait(1).to({graphics:mask_6_graphics_85,x:238.6161,y:286.2355}).wait(36));

	// lady06
	this.instance_10 = new lib.CachedBmp_13();
	this.instance_10.setTransform(179.55,246.75,0.5,0.5);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(78).to({_off:false},0).wait(43));

	// 筆05
	this.instance_11 = new lib.筆();
	this.instance_11.setTransform(375.4,444.9,1,1,0,0,0,127,-281.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(69).to({_off:false},0).wait(1).to({x:378.4,y:470.9},0).wait(1).to({x:379.4,y:494.9},0).wait(1).to({x:375.4,y:521.9},0).wait(1).to({x:358.4,y:537.9},0).wait(1).to({x:338.4,y:546.9},0).wait(1).to({x:316.4,y:555.9},0).wait(1).to({x:298.4,y:565.9},0).wait(1).to({x:287.4,y:586.9},0).to({_off:true},1).wait(43));

	// 遮色片05 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_69 = new cjs.Graphics().p("AgGCZQgqgCgigVQgigWgTgkQgUglACgnQABgpAXgkQAWgkAkgTQAkgTAqACQAqACAiAWQAiAWAUAmQATAmgCAoQgDAogXAjQgXAjgjASQggARglAAIgHgBg");
	var mask_7_graphics_70 = new cjs.Graphics().p("AAIEcQgogCgigVQgigWgTglQgUglABgoQACgpAXgkQAOgWAUgRIgSgJQgigVgTglQgUglACgnQABgpAXgkQAWgkAkgTQAkgTArACQApACAiAWQAiAWAUAmQATAmgCAoQgDAogXAkQgOAVgTAQQAKAEAJAFQAiAXATAmQAUAlgDApQgCAogXAjQgXAigkASQggARglAAIgIAAg");
	var mask_7_graphics_71 = new cjs.Graphics().p("AAYGZQgpgCghgVQgigWgTglQgUgkABgoQACgpAWgkQAMgSAPgOIgKgGQgigWgTglQgUglABgoQACgoAXgkQAOgWAUgRIgSgJQgigWgTglQgUglACgnQABgpAXgkQAWgkAkgTQAkgTArACQApACAiAWQAiAWAUAmQATAmgCAoQgDAogXAkQgOAVgTAQQAKAEAJAGQAiAXATAmQAUAlgDAoQgCAogXAjQgMARgOANIALAHQAiAVATAmQAUAmgDAoQgCAogXAjQgWAjgkASQggARglAAIgIAAg");
	var mask_7_graphics_72 = new cjs.Graphics().p("AgQIaQgqgCgigVQgigWgTgkQgUglACgoQABgpAXgkQAWgjAkgUIAMgFQgUgTgOgaQgUglABgoQACgoAWgkQAMgTAPgOIgKgGQgigVgTglQgUglABgoQACgoAXgkQAOgXAUgQIgSgKQgigWgTgkQgUglACgoQABgpAXgkQAWgkAkgTQAkgTArACQApACAiAWQAiAWAUAmQATAmgCApQgDAogXAjQgOAWgTAPQAKAFAJAGQAiAWATAmQAUAmgDAoQgCAogXAjQgMARgOAOIALAGQAiAVATAmQAUAlgDAoQgCAogXAjQgWAjgkATIgLAFQAWAUAPAbQATAmgCApQgDAogXAjQgXAjgjASQghARgjAAIgIgBg");
	var mask_7_graphics_73 = new cjs.Graphics().p("AguKNQgqgBghgWQgigVgTglQgUglABgoQABgoAXgkQAUggAfgSQgKgMgIgPQgTglABgoQABgpAXgkQAXgjAkgUIAMgFQgVgTgOgaQgTglABgoQABgnAXgkQALgTAQgOIgLgGQghgWgUglQgTglABgoQABgoAXgkQAPgXAUgQIgSgKQgigWgUgkQgTglABgoQABgpAXgkQAXgkAkgTQAkgTAqACQAqACAiAWQAiAWATAmQAUAmgDApQgCAogXAjQgPAWgTAPQAKAFAKAGQAiAWATAmQATAmgCAoQgDAogXAjQgLARgPAOIALAGQAiAWAUAmQATAlgCAnQgCAogXAjQgXAjgjATIgLAFQAWAUAOAbQAUAmgDApQgCAogXAjQgUAegeASQALANAIAQQATAmgCAoQgDAogWAjQgXAjgkASQgfARglAAIgIgBg");
	var mask_7_graphics_74 = new cjs.Graphics().p("AiNLLQgqgBgigWQghgVgUglQgTglABgoQABgpAXgkQAWgkAkgTQAkgTArACQAQABAPAEQAFgdARgbQAUggAfgSQgKgMgIgPQgTglABgoQABgpAXgkQAXgjAjgUIAMgFQgVgTgOgaQgSgkABgoQABgoAWgkQAMgTAPgOIgLgGQgggWgUglQgTglABgoQABgoAXgkQAPgXATgQIgRgKQgigWgUgkQgTglABgoQABgpAXgkQAXgkAjgTQAkgTAqACQArACAiAWQAiAWATAmQAUAmgDApQgCAogXAjQgOAWgUAPQAKAFAKAGQAiAWATAmQATAmgCAoQgDAogXAjQgLARgPAOIALAGQAiAWAUAmQATAlgCAoQgCAogXAiQgXAjgjATIgLAFQAWAUAOAbQAUAmgDApQgCAogXAjQgUAegeASQALANAIAQQATAmgCAoQgDAogWAjQgXAjgkASQgjASgqgCQgQAAgPgEQgFAfgRAcQgXAjgkASQggARglAAIgIgBg");
	var mask_7_graphics_75 = new cjs.Graphics().p("Aj2L9QgqgCghgWQgigWgTgkQgUglACgoQACgpAWgjQAXgkAkgTQAkgSAqACQAcACAZAKQAGgVAMgTQAXgkAkgTQAkgTAqACQAQABAPAEQAFgeARgaQAUggAfgTQgLgMgHgOQgUglACgoQABgpAXgkQAWgkAkgTIAMgGQgUgRgOgaQgUglABgoQACgoAWgkQAMgTAPgOIgKgGQgigWgTglQgUglABgoQACgoAXgkQAOgXAUgQIgSgKQgigWgTgkQgUglACgoQABgpAXgkQAWgkAkgTQAkgTArACQAqACAiAWQAiAWAUAmQATAmgCApQgDAogXAjQgOAWgTAPQAKAFAJAGQAiAWATAmQAUAmgDAoQgCAogXAjQgMARgOANIALAHQAiAWATAmQAUAlgDAoQgCAogXAjQgWAigkATIgLAFQAWATAPAcQATAmgCApQgDAogXAjQgUAegdASQAKANAIAQQAUAmgDAoQgCAogXAjQgXAjgjASQgkASgpgCQgRAAgPgEQgFAfgSAcQgXAjgjASQgkASgpgCQgdgBgZgLQgGAWgNAUQgXAjgkASQggAQglAAIgIAAg");
	var mask_7_graphics_76 = new cjs.Graphics().p("AlVMpQgqgCgigWQghgVgUglQgTglABgoQABgpAXgkQAWgkAkgSQAlgTAqACQAXABAUAGQAFgMAHgLQAXgkAkgTQAkgSAqACQAcACAZAKQAGgVAMgTQAXgkAkgTQAjgTAqACQAQABAQAEQAFgeARgaQAUggAfgTQgLgMgHgOQgUglACgoQABgpAXgkQAWgjAkgTIAMgGQgVgSgNgaQgUglABgoQACgoAWgkQAMgTAPgOIgKgGQgigWgTglQgUglABgoQACgoAXgkQAOgXAUgQIgSgKQgigWgTgkQgUglACgoQABgpAXgkQAWgkAkgTQAkgTArACQAqACAiAWQAiAWAUAmQATAmgCApQgDAogXAjQgOAWgTAPQAKAFAJAGQAiAWATAmQAUAmgDAoQgCAogXAjQgMARgOANIALAHQAiAWATAmQAUAlgDAoQgCAogXAjQgWAjgkATIgLAFQAWASAPAcQATAmgCApQgDAogXAjQgUAegdASQAKANAIAQQAUAmgDAoQgCAogXAjQgXAjgjASQgkASgpgCQgRAAgPgEQgFAfgSAcQgXAjgjASQgkASgqgCQgdgBgZgLQgFAWgNAUQgXAjgkASQgjASgqgCQgWgBgUgHQgFAOgIAMQgXAjgkASQggARglAAIgIAAg");
	var mask_7_graphics_77 = new cjs.Graphics().p("Am/NtQgtgGgggcQghgcgNgrQgOgrALgqQALgqAhgfQAhgfAqgIQAcgGAbAFQADgmAVghQAXgkAkgSQAkgTArACQAWABAUAGQAFgMAIgLQAWgkAkgTQAkgSAqACQAdABAXALQAGgVANgTQAWgkAkgTQAkgTArACQAQABAPAEQAFgeARgaQAUggAfgTQgKgMgIgOQgTglABgoQABgoAXgkQAXgkAkgTIAMgGQgVgSgOgaQgTglABgoQABgoAXgkQALgTAQgOIgLgGQghgWgUglQgTglABgoQABgoAXgkQAPgXAUgQIgSgKQgigWgUgkQgTglABgoQABgpAXgkQAXgkAkgTQAkgTAqACQArACAiAWQAiAWATAmQAUAmgDApQgCAogXAjQgPAVgTAQQAKAEAKAHQAiAWATAmQATAmgCAoQgDAogXAjQgLARgPANIALAHQAiAWAUAmQATAlgCAoQgCAogXAjQgXAjgjATIgLAFQAWATAOAcQAUAlgDApQgCAogXAjQgUAegeASQALANAIAQQATAmgCAoQgDAogWAjQgXAjgkASQgjASgqgCQgQgBgPgDQgFAfgSAcQgXAjgkASQgjASgqgCQgegBgZgLQgGAWgNAUQgXAjgjASQgjASgqgCQgWgBgTgHQgGANgIANQgXAjgjASQgkATgqgCIgTgCQgCApgZAjQgZAlgoARQgcAMgeAAQgNAAgNgCg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_7_graphics_69,x:181.7088,y:276.9505}).wait(1).to({graphics:mask_7_graphics_70,x:183.2338,y:290.0002}).wait(1).to({graphics:mask_7_graphics_71,x:184.7338,y:302.5002}).wait(1).to({graphics:mask_7_graphics_72,x:184.7338,y:315.4505}).wait(1).to({graphics:mask_7_graphics_73,x:183.7868,y:326.9505}).wait(1).to({graphics:mask_7_graphics_74,x:174.2618,y:333.1505}).wait(1).to({graphics:mask_7_graphics_75,x:163.8338,y:338.0755}).wait(1).to({graphics:mask_7_graphics_76,x:154.2368,y:342.4752}).wait(1).to({graphics:mask_7_graphics_77,x:145.2923,y:349.4926}).wait(44));

	// lady05
	this.instance_12 = new lib.CachedBmp_14();
	this.instance_12.setTransform(96.75,268.65,0.5,0.5);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(69).to({_off:false},0).wait(52));

	// 筆04
	this.instance_13 = new lib.筆();
	this.instance_13.setTransform(361.4,319.05,1,1,0,0,0,127,-281.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(53).to({_off:false},0).wait(1).to({x:339.8},0).wait(1).to({x:319.1,y:328.05},0).wait(1).to({x:303.8,y:342.45},0).wait(1).to({x:295.7,y:364.05},0).wait(1).to({x:300.2,y:386.55},0).wait(1).to({x:314.6,y:404.55},0).wait(1).to({x:328.1,y:419.85},0).wait(1).to({x:317.3,y:431.55},0).wait(1).to({x:309.2,y:444.15},0).wait(1).to({x:319.1,y:463.95},0).wait(1).to({x:337.1,y:477.45},0).wait(1).to({x:328.1,y:495.45},0).wait(1).to({x:334.4,y:517.95},0).wait(1).to({x:349.7,y:531.45},0).wait(1).to({x:362.3,y:547.65},0).to({_off:true},1).wait(52));

	// 遮色片04 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_53 = new cjs.Graphics().p("Ag0CPQgtgQgcgqQgcgpABgvQABgvAfgpQAegoAtgOQAtgPAvAQQAwAQAcAmQAeAoAAAyQABA2gkAsQgeAkgwANQgWAGgTAAQgbAAgYgKg");
	var mask_8_graphics_54 = new cjs.Graphics().p("Ah3C3QgygEglgfQgtgmgGhAQgHg/AlguQAXgdAkgQQAjgPAmADQAjADAfATQAGgMAJgMQAdgoAtgOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA2gkAsQgeAkgwANQgxANgsgRQgNgEgMgIQgUAogjAWQgjAWgrAAIgOgBg");
	var mask_8_graphics_55 = new cjs.Graphics().p("AjyC/QgxgIglgmQgkgngGgxQgFgyAbgsQAcguAugSQAugTAzAPQAkAKAaAXQAYgdAjgQQAkgPAkADQAkADAeASQAHgLAIgMQAegoAugOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA2gkAsQgeAkgxANQgxANgsgRQgNgFgMgHQgTAogkAWQgpAZgygEQgzgEglgfIgEgEQgWAcgiAQQggAOggAAQgMAAgMgCg");
	var mask_8_graphics_56 = new cjs.Graphics().p("AlrDgQgwgMgggpQghgpgCgyQgBgrAXglQAWgnAmgUQAsgXA0AJQAcAEAXANIAJgRQAbguAvgSQAugTAzAPQAkAKAaAXQAWgdAkgQQAjgPAmADQAjADAfATQAGgMAJgMQAegoAtgOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA3gkArQgeAkgwANQgxANgsgRQgOgFgLgHQgUAogkAWQgpAZgzgEQgygEglgfIgFgDQgVAbghAQQgsAUgtgIQgbgEgWgNIgIAPQgZArgxAUQgfANgeAAQgSAAgSgFg");
	var mask_8_graphics_57 = new cjs.Graphics().p("AnAE2QgtgYgUgsQgVgrAKgyQAJgzAjghQAYgVAegLIAIgDQgKgYgBgZQgBgrAXgmQAWgnAmgUQAsgXA0AJQAcAEAXANIAJgRQAbguAvgSQAugTAzAPQAjAJAaAYQAXgeAkgPQAjgPAmADQAjACAfATQAGgMAJgLQAegoAtgOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA3gkAsQgeAkgwANQgxANgsgRQgNgFgMgHQgUAogkAVQgpAZgzgEQgygEglgfIgFgDQgVAbgiAQQgrAUgtgIQgagEgXgOIgIAQQgZArgxAUIgPAGIAFASQAIAggGAgQgIAwglAjQglAjgwAGIgUABQglAAgkgTg");
	var mask_8_graphics_58 = new cjs.Graphics().p("Am1G4Qg5gKgigpQgigpAAg6QAAg5AjgpQAYgeAkgNQgHgKgFgKQgUgsAJgyQAKgxAjghQAXgWAfgLIAHgCQgJgYgBgaQgBgrAWgnQAXgmAmgUQAsgXA0AIQAcAFAWAMIAJgRQAcgtAugTQAugSAyAOQAlAKAZAXQAYgdAjgPQAkgQAlADQAkADAeATQAHgMAIgLQAegoAugPQAtgOAwAQQAwAPAcAmQAeAoAAAzQABA3gkArQgeAlgxANQgxANgsgRQgNgFgMgHQgTAngkAXQgpAZgzgEQgzgEglgfIgEgEQgWAbgiAQQgqAUgtgHQgbgFgXgNIgIAQQgZArgxATIgPAFIAGASQAIAhgGAgQgJAvglAjQgWAVgZALQAKAPAHASQASAygUA3QgUA2guAbQgiATgnAAQgOAAgQgDg");
	var mask_8_graphics_59 = new cjs.Graphics().p("Al2IPQgxgZgVgvQgUgwAOg1IAGgTQg0gLgggnQgigpAAg5QAAg6AjgpQAYgdAkgNQgHgKgFgLQgUgqAJgyQAKgzAjghQAXgVAfgLIAHgCQgJgYgBgbQgBgrAWgmQAXgnAmgUQAsgXA0AJQAcAEAWANIAJgRQAcguAugSQAugTAyAPQAlAKAZAXQAYgdAjgQQAkgPAlADQAkADAeATQAHgMAIgMQAegoAugOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA3gkAsQgeAkgxANQgxANgsgRQgNgFgMgHQgTAogkAWQgpAZgzgEQgzgEglgfIgEgDQgWAbgiAQQgqAUgtgIQgbgEgXgNIgIAPQgZArgxAUIgPAGIAGASQAIAggGAgQgJAvglAjQgWAUgZALQAKAPAHATQASAygUA2IgCAFQAlAIAdAYQAaAWAOAhQAPAhgBAiQgCA0gkAqQgkAqgzAJQgOADgNAAQgkAAgkgTg");
	var mask_8_graphics_60 = new cjs.Graphics().p("AjBJxQg+gHgmgrQgmgrAAg+IAAgGQgWgFgVgLQgxgagVgvQgUgvAOg1IAGgTQg0gMgggmQgigpAAg6QAAg5AjgpQAYgcAkgOQgHgJgFgLQgUgsAJgyQAKgyAjghQAXgWAfgLIAHgCQgJgYgBgaQgBgrAWgnQAXgmAmgUQAsgXA0AIQAcAFAWAMIAJgRQAcgtAugTQAugSAyAOQAlAKAZAYQAYgeAjgPQAkgQAlADQAkADAeATQAHgMAIgLQAegoAugPQAtgOAwAQQAwAPAcAmQAeAoAAAzQABA3gkArQgeAlgxANQgxANgsgRQgNgFgMgHQgTAngkAXQgpAZgzgEQgzgEglgfIgEgEQgWAbgiAQQgqAUgtgHQgbgFgXgNIgIAQQgZArgxAUIgPAFIAGASQAIAhgGAgQgJAvglAjQgWAUgZALQAKAPAHASQASAygUA3IgCAFQAlAHAdAYQAaAXAOAhQAOAeAAAgIAOADQAkALAbAaQAaAZANAjQAMAkgEAkQgDAggPAdQgQAdgZAUQgnAegzAAIgSgBg");
	var mask_8_graphics_61 = new cjs.Graphics().p("AhTK3QgygHgiggQgngkgHg4IgBgNQgwgLgfgjQgmgrAAg/IAAgGQgWgFgVgLQgxgZgVgvQgUgwAOg1IAGgTQg0gMgggmQgigpAAg5QAAg5AjgpQAYgdAkgNQgHgKgFgLQgUgrAJgyQAKgzAjghQAXgVAfgLIAHgDQgJgYgBgaQgBgrAWgmQAXgnAmgUQAsgXA0AJQAcAEAWANIAJgRQAcguAugSQAugTAyAPQAlAKAZAXQAYgeAjgPQAkgPAlADQAkADAeASQAHgMAIgLQAegoAugOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA3gkAsQgeAkgxANQgxANgsgRQgNgFgMgHQgTAogkAWQgpAZgzgEQgzgEglgfIgEgEQgWAcgiAQQgqAUgtgIQgbgEgXgOIgIAQQgZArgxAUIgPAGIAGASQAIAggGAgQgJAwglAjQgWAUgZALQAKAPAHATQASAxgUA2IgCAFQAlAHAdAZQAaAWAOAhQAOAeAAAgIAOAEQAkALAbAZQAaAZANAkQAJAZAAAbQApAKAgAiQAiAlAHAvQAGAugXAsQgXAtgqAVQgfAQgjAAQgMAAgMgBg");
	var mask_8_graphics_62 = new cjs.Graphics().p("AjtLdQgqgIghggQghgggKgqQgMgyAXgxQARglAegXQgigpAAg8IAAgGQgWgFgVgLQgxgZgVgvQgUgwAOg1IAGgTQg0gLgggnQgigpAAg4QAAg6AjgpQAYgdAkgNQgHgKgFgLQgUgrAJgyQAKgzAjghQAXgVAfgLIAHgDQgJgYgBgaQgBgrAWgmQAXgnAmgUQAsgXA0AJQAcAEAWANIAJgRQAcguAugSQAugTAyAPQAlAKAZAXQAYgdAjgQQAkgPAlADQAkADAeASQAHgLAIgMQAegoAugOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA3gkAsQgeAkgxANQgxANgsgRQgNgFgMgHQgTAogkAWQgpAZgzgEQgzgEglgfIgEgEQgWAcgiAQQgqAUgtgIQgbgEgXgOIgIAQQgZArgxAUIgPAGIAGASQAIAggGAgQgJAwglAjQgWAUgZALQAKAPAHATQASAygUA1IgCAFQAlAHAdAZQAaAWAOAhQAOAeAAAgIAOAEQAkALAbAZQAaAZANAkQAJAZAAAbQApALAgAhQAiAlAHAvQAGAugXAsQgXAtgqAVQgkATgqgDQgGAKgHAJQgaAjgqAQQgcAKgcAAQgOAAgPgDg");
	var mask_8_graphics_63 = new cjs.Graphics().p("AksM/Qg1gXgZgwQgRgkACgpQABgpAWghQAQgaAZgRQgTgYgHgeQgMgyAXgyQARglAegWQgigqAAg7IAAgHQgWgEgVgLQgxgagVgvQgUgvAOg1IAGgTQg0gMggglQgigpAAg6QAAg5AjgpQAYgeAkgNQgHgJgFgLQgUgsAJgyQAKgyAjghQAXgWAfgLIAHgCQgJgYgBgaQgBgrAWgnQAXgmAmgUQAsgXA0AIQAcAFAWAMIAJgRQAcgtAugTQAugSAyAOQAlAKAZAXQAYgdAjgPQAkgQAlADQAkADAeATQAHgMAIgLQAegoAugPQAtgOAwAQQAwAPAcAmQAeAoAAAzQABA3gkArQgeAlgxANQgxANgsgRQgNgFgMgHQgTAngkAXQgpAZgzgEQgzgEglgfIgEgEQgWAbgiAQQgqAUgtgHQgbgFgXgNIgIAQQgZArgxAUIgPAFIAGASQAIAhgGAgQgJAvglAjQgWAVgZALQAKAPAHASQASAygUA3IgCAEQAlAIAdAYQAaAWAOAhQAOAeAAAgIAOADQAkALAbAaQAaAZANAjQAJAaAAAaQApALAgAiQAiAkAHAvQAGAvgXAsQgXAsgqAWQgkATgqgEQgGAKgHAKQgOATgUAOQAYAfAFAmQAHA1gfAxQgfAxgzAQQgWAHgVAAQgfAAgfgNg");
	var mask_8_graphics_64 = new cjs.Graphics().p("AivOcQg1gWgZgwQgRgkACgpQAAgPADgOQgRgEgSgHQg1gXgZgwQgRgkACgpQABgpAWghQAQgaAZgRQgTgYgHgeQgMgyAXgyQARgkAegXQgigqAAg7IAAgGQgWgFgVgLQgxgagVgvQgUgvAOg0IAGgTQg0gMgggmQgigpAAg6QAAg5AjgpQAYgdAkgOQgHgJgFgLQgUgsAJgyQAKgyAjghQAXgWAfgLIAHgCQgJgYgBgaQgBgrAWgnQAXgmAmgUQAsgXA0AIQAcAFAWAMIAJgRQAcgtAugTQAugSAyAOQAlAKAZAYQAYgeAjgPQAkgQAlADQAkADAeATQAHgMAIgLQAegoAugPQAtgOAwAQQAwAPAcAmQAeAoAAAzQABA3gkArQgeAlgxANQgxANgsgRQgNgFgMgHQgTAngkAXQgpAZgzgEQgzgEglgfIgEgEQgWAbgiAQQgqAUgtgHQgbgEgXgOIgIAQQgZArgxAUIgPAFIAGASQAIAhgGAgQgJAvglAjQgWAVgZALQAKAPAHASQASAygUA3IgCAFQAlAHAdAYQAaAXAOAhQAOAeAAAfIAOADQAkALAbAaQAaAZANAjQAJAaAAAaQApALAgAiQAiAkAHAvQAGAvgXAsQgXAsgqAWQgkATgqgDQgGAKgHAJQgOATgUAOQAYAfAFAmQAEAdgIAcQArAHAkAgQAqAnAHA1QAHA1gfAxQgeAxgzAQQgWAHgVAAQgfAAgfgOg");
	var mask_8_graphics_65 = new cjs.Graphics().p("AADPwQghgDgcgQQgdgRgUgbQgTgcgHggIgCgVQgUgDgUgIQg1gXgZgwQgRgkACgpQAAgPADgOQgRgDgSgIQg1gWgZgwQgRgkACgpQABgpAWgiQAQgZAZgRQgTgZgHgeQgMgyAXgxQARglAegWQgigqAAg8IAAgGQgWgEgVgMQgxgZgVguQgUgwAOg1IAGgTQg0gLgggnQgigpAAg5QAAg6AjgpQAYgdAkgNQgHgKgFgLQgUgrAJgyQAKgzAjghQAXgVAfgLIAHgCQgJgYgBgbQgBgrAWgmQAXgnAmgUQAsgXA0AJQAcAEAWANIAJgRQAcguAugSQAugTAyAPQAlAKAZAXQAYgdAjgQQAkgPAlADQAkADAeATQAHgMAIgMQAegoAugOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA3gkAsQgeAkgxANQgxANgsgRQgNgFgMgHQgTAogkAWQgpAZgzgEQgzgEglgfIgEgDQgWAbgiAQQgqAUgtgIQgbgEgXgNIgIAPQgZArgxAUIgPAGIAGASQAIAggGAgQgJAwglAjQgWAVgZAKQAKAQAHASQASAygUA2IgCAFQAlAIAdAYQAaAWAOAhQAOAfAAAfIAOAEQAkALAbAZQAaAZANAjQAJAaAAAaQApALAgAhQAiAlAHAvQAGAugXAsQgXAtgqAVQgkATgqgDQgGAKgHAJQgOAUgUANQAYAfAFAnQAEAdgIAcQArAGAkAgQAqAnAHA1IABAMQAcAFAcAQQA3AfARA4QARA4gdA4QgdA5g3ATQgYAJgaAAIgPgBg");
	var mask_8_graphics_66 = new cjs.Graphics().p("AiqRXQgrgUgYgnQgYgmACgwQACgwAbglQAbgkAtgQQAXgIAWgBQgOgYgGgbIgCgVQgUgDgUgIQg1gXgZgwQgRgkACgpQAAgPADgOQgRgDgSgIQg1gWgZgwQgRgkACgpQABgpAWgiQAQgZAZgRQgTgZgHgeQgMgyAXgxQARglAegWQgigqAAg7IAAgGQgWgEgVgMQgxgZgVgvQgUgwAOg1IAGgTQg0gLgggnQgigpAAg5QAAg6AjgpQAYgdAkgNQgHgKgFgLQgUgrAJgyQAKgzAjghQAXgVAfgLIAHgCQgJgYgBgbQgBgrAWgmQAXgnAmgUQAsgXA0AJQAcAEAWANIAJgRQAcguAugSQAugTAyAPQAlAKAZAXQAYgdAjgQQAkgPAlADQAkADAeATQAHgMAIgMQAegoAugOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA3gkAsQgeAkgxANQgxANgsgRQgNgEgMgIQgTAogkAWQgpAZgzgEQgzgEglgfIgEgDQgWAbgiAQQgqAUgtgIQgbgEgXgNIgIAPQgZArgxAUIgPAGIAGASQAIAggGAgQgJAwglAjQgWAVgZAKQAKAQAHASQASAygUA2IgCAFQAlAIAdAYQAaAWAOAhQAOAfAAAfIAOAEQAkALAbAZQAaAZANAkQAJAaAAAaQApALAgAgQAiAlAHAvQAGAugXAsQgXAtgqAVQgkATgqgDQgGAKgHAJQgOAUgUANQAYAfAFAnQAEAdgIAcQArAGAkAgQAqAnAHA1IABAMQAcAFAcAQQA3AfARA4QARA4gdA4QgdA5g3ATQgWAIgYABQANAVAGAZQAHAhgHAgQgJAtgiAhQgjAhgsAIQgNACgMAAQggAAgggOg");
	var mask_8_graphics_67 = new cjs.Graphics().p("AATSfQgqgJgggfQghgggKgpIgCgGQgjABgjgPQgrgUgYgnQgYgmACgwQACgwAbglQAbgkAtgQQAXgIAWgBQgOgYgGgbIgCgVQgUgDgUgIQg1gXgZgwQgRgkACgpQAAgPADgOQgRgDgSgIQg1gWgZgwQgRgkACgpQABgpAWgiQAQgZAZgRQgTgZgHgeQgMgyAXgxQARglAegWQgigpAAg8IAAgGQgWgEgVgMQgxgZgVgvQgUgwAOg1IAGgTQg0gLgggnQgigpAAg5QAAg6AjgpQAYgdAkgNQgHgKgFgLQgUgrAJgyQAKgzAjghQAXgVAfgLIAHgCQgJgYgBgbQgBgrAWgmQAXgnAmgUQAsgXA0AJQAcAFAWAMIAJgRQAcguAugSQAugTAyAPQAlAKAZAXQAYgdAjgQQAkgPAlADQAkADAeATQAHgMAIgMQAegoAugOQAtgPAwAQQAwAQAcAmQAeAoAAAyQABA3gkAsQgeAkgxANQgxANgsgRQgNgEgMgIQgTAogkAWQgpAZgzgEQgzgEglgfIgEgDQgWAbgiAQQgqAUgtgIQgbgEgXgNIgIAPQgZArgxAUIgPAGIAGASQAIAggGAgQgJAwglAjQgWAVgZAKQAKAQAHASQASAygUA2IgCAFQAlAIAdAYQAaAWAOAhQAOAfAAAfIAOAEQAkALAbAZQAaAZANAkQAJAaAAAaQApALAgAhQAiAlAHAuQAGAugXAsQgXAtgqAVQgkATgqgDQgGAKgHAJQgOAUgUANQAYAgAFAmQAEAdgIAcQArAGAkAgQAqAnAHA1IABAMQAcAFAcAQQA3AfARA4QARA4gdA4QgdA5g3ATQgWAIgYABQANAVAGAZIAAADQATAAATADQA2ALAhAoQAhAnACA3QABA3gfApQgaAigqAQQgcALgbAAQgPAAgOgDg");
	var mask_8_graphics_68 = new cjs.Graphics().p("ACaTzQg0gGgkggQglghgKgzQgEgXABgVQgogJgfgfQghgfgKgqIgCgGQgjACgjgQQgrgUgYgmQgYgnACgwQACgwAbgkQAbglAtgQQAXgIAWgBQgOgYgGgbIgCgUQgUgDgUgJQg1gWgZgwQgRgkACgpQAAgPADgOQgRgEgSgHQg1gXgZgwQgRgkACgpQABgpAWghQAQgaAZgRQgTgYgHgeQgMgyAXgxQARglAegWQgigqAAg7IAAgGQgWgFgVgLQgxgagVgvQgUgvAOg1IAGgTQg0gMgggmQgigpAAg6QAAg5AjgpQAYgdAkgOQgHgJgFgLQgUgsAJgyQAKgyAjghQAXgWAfgLIAHgCQgJgYgBgaQgBgrAWgnQAXgmAmgUQAsgXA0AIQAcAFAWAMIAJgRQAcgtAugTQAugSAyAOQAlAKAZAYQAYgeAjgPQAkgQAlADQAkADAeATQAHgMAIgLQAegoAugPQAtgOAwAQQAwAPAcAmQAeAoAAAzQABA3gkArQgeAlgxANQgxANgsgRQgNgFgMgHQgTAngkAXQgpAZgzgEQgzgEglgfIgEgEQgWAbgiAQQgqAUgtgHQgbgFgXgNIgIAQQgZArgxAUIgPAFIAGASQAIAhgGAgQgJAvglAjQgWAVgZALQAKAPAHASQASAygUA3IgCAFQAlAHAdAYQAaAXAOAhQAOAeAAAgIAOADQAkALAbAaQAaAZANAjQAJAaAAAaQApALAgAiQAiAkAHAvQAGAvgXArQgXAsgqAWQgkATgqgDQgGAKgHAJQgOATgUAOQAYAfAFAmQAEAdgIAcQArAHAkAgQAqAnAHA1IABAMQAcAEAcAQQA3AgARA3QARA4gdA5QgdA4g3AUQgWAIgYAAQANAVAGAZIAAAEQATgBATAEQA2ALAhAnQAhAoACA3IgBASQAjAHAeAZQAoAgAMAwQAMAvgUAxQgUAwgqAZQgjAVgpAAIgRgBg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(53).to({graphics:mask_8_graphics_53,x:184.7975,y:160.912}).wait(1).to({graphics:mask_8_graphics_54,x:174.1772,y:164.0079}).wait(1).to({graphics:mask_8_graphics_55,x:162.9373,y:164.9326}).wait(1).to({graphics:mask_8_graphics_56,x:152.1992,y:168.5171}).wait(1).to({graphics:mask_8_graphics_57,x:147.2759,y:178.5485}).wait(1).to({graphics:mask_8_graphics_58,x:143.826,y:189.8923}).wait(1).to({graphics:mask_8_graphics_59,x:143.826,y:200.2192}).wait(1).to({graphics:mask_8_graphics_60,x:143.826,y:208.1742}).wait(1).to({graphics:mask_8_graphics_61,x:143.826,y:215.2413}).wait(1).to({graphics:mask_8_graphics_62,x:143.826,y:219.2278}).wait(1).to({graphics:mask_8_graphics_63,x:143.826,y:229.9878}).wait(1).to({graphics:mask_8_graphics_64,x:143.826,y:239.3628}).wait(1).to({graphics:mask_8_graphics_65,x:143.826,y:246.5125}).wait(1).to({graphics:mask_8_graphics_66,x:143.826,y:258.1095}).wait(1).to({graphics:mask_8_graphics_67,x:143.826,y:264.2028}).wait(1).to({graphics:mask_8_graphics_68,x:143.826,y:272.372}).wait(53));

	// lady04
	this.instance_14 = new lib.CachedBmp_15();
	this.instance_14.setTransform(99.25,158.25,0.5,0.5);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(53).to({_off:false},0).wait(68));

	// 筆03
	this.instance_15 = new lib.筆();
	this.instance_15.setTransform(391.8,322.75,1,1,0,0,0,127,-281.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(41).to({_off:false},0).wait(1).to({x:384.6,y:343.45},0).wait(1).to({x:372,y:358.75},0).wait(1).to({x:350.4,y:367.75},0).wait(1).to({x:328.8,y:377.65},0).wait(1).to({x:327.9,y:398.35},0).wait(1).to({x:341.4,y:413.65},0).wait(1).to({x:355.8,y:428.05},0).wait(1).to({x:354,y:446.95},0).wait(1).to({x:350.4,y:468.55},0).wait(1).to({x:355.8,y:489.25},0).wait(1).to({x:354,y:512.65},0).to({_off:true},1).wait(68));

	// 遮色片03 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_41 = new cjs.Graphics().p("AgPCYQg0gGgkghQgkghgKgzQgKgyAWgsQATgpApgYQAogYAsACQAxADAoAhQAoAgAMAwQAMAugUAxQgUAwgqAZQgjAVgqAAIgQgBg");
	var mask_9_graphics_42 = new cjs.Graphics().p("AgQEIQgzgBgngdQgugjgKg+QgLg9AggwQAQgYAWgPQgZgdgIgqQgKgzAWgsQATgoApgYQAogYAsACQAxACAoAhQAoAhAMAvQAMAwgUAwQgRAqgiAXQAVAYAJAeQAOAugQAwQgRAxgoAbQgmAbgwAAIgDAAg");
	var mask_9_graphics_43 = new cjs.Graphics().p("AhrFgQg0gYgXgwQgXgxAOg3QAPg4AsgfIAQgKQgKgUgEgZQgLg8AggwQAPgXAXgRQgZgdgIgqQgKgzAWgsQATgoApgYQAngYAtACQAxACAoAhQAoAhAMAvQAMAwgUAwQgRAqgiAYQAUAYAKAeQAOAtgQAwQgRAxgoAbIgPAKQAPAaADAeQAFA1ghAvQghAwgyAOQgUAFgTAAQghAAgggPg");
	var mask_9_graphics_44 = new cjs.Graphics().p("AjWGdQgsgZgTgsQgUgsAKgxQALgyAjggQAjghAygGQAcgDAaAFQACgLADgMQAOg4AsgfIAQgKQgKgTgEgZQgKg9AggwQAPgXAWgRQgYgdgIgqQgKgzAUgsQATgoApgYQApgYAsACQAxACApAhQAoAhAMAvQAMAwgUAwQgSAqgiAYQAVAYAJAeQAPAugRAwQgRAwgnAbIgPAKQAOAaADAeQAFA1ggAvQghAwg0AOQglALgmgKIgDATQgLAuglAiQgmAhgvAFIgQABQgnAAglgVg");
	var mask_9_graphics_45 = new cjs.Graphics().p("AlRG2QgvgdgSgwQgMghAEgkQAEglATgdQAbgsA0gSQA0gSAwARQAdALAWAUQANgeAXgWQAjghAygGQAdgDAZAFQABgLADgMQAPg4AsgeIAQgKQgKgUgEgZQgLg9AggwQAQgXAWgRQgYgdgJgqQgKgzAWgsQATgoApgYQAogYAtACQAxACAoAhQAoAhAMAvQAMAwgUAwQgRAqgiAYQAVAYAJAeQAOAugQAwQgRAwgoAbIgOAKQAOAaADAeQAFA1ghAvQghAwgzAOQgmALgmgKIgDATQgKAugmAiQgmAhgvAFQgvAFgsgZQgNgIgMgJQgLAYgVAVQgmAngzAHIgSABQgpAAgngXg");
	var mask_9_graphics_46 = new cjs.Graphics().p("AmxH9QgtgjgLg9QgLg+AggwQAfgwA9gPQAYgGAWABIABgUQAEgkATgeQAcgrA0gSQAzgSAxARQAcAKAWAUQANgeAYgWQAjggAxgGQAcgEAaAGQABgMAEgMQAOg2AsgfIAQgKQgKgVgEgYQgKg+AggwQAPgXAXgQQgZgegIgpQgKgzAVgsQATgpApgYQApgYAsACQAxADApAhQAoAgAMAwQAMAvgUAxQgSApgiAYQAVAYAJAeQAPAugRAxQgRAwgnAcIgPAJQAOAaADAdQAFA2ggAvQghAvg0AOQgmALglgKIgDATQgLAvgmAhQgmAigvAFQgwAFgrgaQgNgIgLgJQgMAYgUAWQgnAngyAGQgQACgOgBQAAAOgCAOQgIAsgcAgQgmArg+AGIgTABQgzAAgmgdg");
	var mask_9_graphics_47 = new cjs.Graphics().p("AmCJgQgcgVgQggQgQgggBgjQgBggAMgfIAGgPIgDgDQgtgigLg+QgLg9AggxQAfgwA9gPQAYgFAWABIABgUQAEglATgdQAcgsA0gRQAzgSAxARQAcAKAWAUQANgdAYgWQAjghAxgGQAcgDAaAFQABgLAEgMQAOg4AsgfIAQgKQgKgUgEgZQgKg9AggwQAPgXAXgRQgZgdgIgqQgKgzAVgsQATgoApgYQApgYAsACQAxACApAhQAoAhAMAvQAMAwgUAwQgSAqgiAYQAVAYAJAeQAPAugRAwQgRAxgnAbIgPAKQAOAaADAeQAFA1ggAuQghAwg0AOQgmAKglgJIgDATQgLAugmAiQgmAhgvAFQgwAFgrgZQgNgIgLgJQgMAYgUAVQgnAngyAHQgQACgOgBQAAANgCAPQgEAXgKAUQAQAMANAQQAUAZAJAfQAJAggEAgQgEAfgPAbQgPAcgYATQgoAgg2AAQg2AAgogfg");
	var mask_9_graphics_48 = new cjs.Graphics().p("AjNKrQgqgbgTgyQgGgRgDgSIgRABQg2AAgogfQgcgVgQggQgQgggBgjQgBggAMgfIAGgPIgDgDQgtgigLg+QgLg9AggxQAfgwA9gPQAYgFAWABIABgUQAEglATgcQAcgsA0gSQAzgSAxARQAcAKAWAVQANgfAYgVQAjghAxgGQAcgDAaAFQABgLAEgMQAOg4AsgfIAQgKQgKgUgEgZQgKg9AggwQAPgYAXgQQgZgdgIgqQgKgzAVgsQATgoApgYQApgYAsACQAxACApAhQAoAhAMAvQAMAwgUAwQgSAqgiAYQAVAYAJAeQAPAugRAwQgRAxgnAbIgPAKQAOAZADAfQAFA1ggAvQghAvg0AOQgmAKglgJIgDATQgLAugmAiQgmAhgvAFQgwAFgrgZQgNgIgLgJQgMAYgUAVQgnAngyAHQgQACgOgBQAAANgCAPQgEAXgKAUQAQAMANAQQAUAZAJAfQAEAPABAQQALgCALABQAvABAnAeQAnAeAOAtQAPAsgPAvQgOAwgkAdQglAdgyACIgHAAQgtAAglgXg");
	var mask_9_graphics_49 = new cjs.Graphics().p("AgZMRQg5gHglgnQgkgmgEg4IAAgXQgZgFgVgOQgqgbgTgyQgGgSgDgRIgRABQg2AAgogfQgcgVgQggQgQgggBgjQgBggAMgfIAGgQIgDgCQgtgigLg+QgLg9AggxQAfgwA9gOQAYgGAWABIABgTQAEglATgdQAcgsA0gSQAzgSAxARQAcAKAWAUQANgeAYgVQAjghAxgGQAcgEAaAGQABgLAEgMQAOg4AsgfIAQgKQgKgUgEgZQgKg9AggwQAPgYAXgQQgZgdgIgqQgKgzAVgsQATgoApgYQApgYAsACQAxACApAhQAoAhAMAvQAMAwgUAwQgSAqgiAYQAVAXAJAfQAPAugRAwQgRAxgnAbIgPAJQAOAaADAfQAFA1ggAvQghAwg0AOQgmAKglgKIgDAUQgLAtgmAiQgmAhgvAFQgwAFgrgZQgNgIgLgJQgMAYgUAVQgnAngyAHQgQACgOgCQAAAOgCAPQgEAXgKAUQAQAMANAQQAUAZAJAfQAEAPABAQQALgCALABQAvABAnAeQAnAeAOAtQAKAdgDAfQAQAEARAJQAzAaAVAxQAVAxgRA3QgRA3gtAdQgkAXgrAAIgVgBg");
	var mask_9_graphics_50 = new cjs.Graphics().p("Ag/N5QgzgBgngdQgugjgLg9QgKg+AfgwQATgdAdgRQgPgdgDgkIAAgWQgZgGgVgOQgqgbgTgyQgGgRgDgSIgRABQg2AAgogfQgcgVgQggQgQgggBgjQgBggAMgfIAGgPIgDgDQgtgigLg+QgLg9AggwQAfgwA9gPQAYgFAWABIABgUQAEglATgdQAcgsA0gSQAzgSAxARQAcAKAWAVQANgeAYgWQAjghAxgGQAcgDAaAFQABgLAEgMQAOg4AsgfIAQgKQgKgUgEgZQgKg9AggwQAPgXAXgRQgZgdgIgqQgKgzAVgsQATgoApgYQApgYAsACQAxACApAhQAoAhAMAvQAMAwgUAwQgSAqgiAYQAVAYAJAeQAPAugRAwQgRAxgnAbIgPAKQAOAaADAeQAFA1ggAvQghAwg0AOQgmAKglgJIgDATQgLAugmAiQgmAhgvAFQgwAFgrgZQgNgIgLgJQgMAYgUAVQgnAmgyAHQgQACgOgBQAAANgCAPQgEAXgKAUQAQAMANAQQAUAZAJAfQAEAPABAQQALgCALABQAvABAnAeQAnAeAOAtQAKAdgDAfQAQAEARAJQAzAaAVAxQAVAxgRA3QgRA3gtAdIgDACQAHAOAFAPQAPAugRAxQgQAxgoAbQgmAbgyAAIgBAAg");
	var mask_9_graphics_51 = new cjs.Graphics().p("AgjPfQg2gDgngjQgmgigJg2QgJg2AZgtIAFgKQgtgjgLg9QgKg9AfgxQATgcAdgSQgPgcgDglIAAgWQgZgGgVgNQgqgbgTgyQgGgSgDgRIgRABQg2AAgogfQgcgVgQggQgQgggBgjQgBghAMgfIAGgPIgDgCQgtgjgLg8QgLg+AggwQAfgwA9gPQAYgGAWABIABgUQAEgkATgeQAcgrA0gSQAzgSAxARQAcAKAWAUQANgeAYgWQAjggAxgGQAcgEAaAGQABgMAEgMQAOg3AsgfIAQgKQgKgVgEgYQgKg+AggwQAPgXAXgQQgZgegIgpQgKgzAVgsQATgpApgYQApgYAsACQAxADApAhQAoAgAMAwQAMAvgUAxQgSApgiAZQAVAXAJAeQAPAugRAxQgRAwgnAcIgPAJQAOAaADAeQAFA2ggAvQghAvg0AOQgmALglgKIgDATQgLAvgmAhQgmAigvAFQgwAFgrgaQgNgHgLgKQgMAZgUAVQgnAngyAGQgQACgOgBQAAAOgCAOQgEAXgKATQAQAMANAQQAUAZAJAgQAEAPABAPQALgBALAAQAvACAnAeQAnAeAOAsQAKAegDAeQAQAFARAIQAzAbAVAxQAVAxgRA3QgRA2gtAdIgDADQAHANAFAQQAPAugRAwQgGATgKAQIALAIQAbAZANAhQASAvgQA1QgQA0gqAeQglAaguAAIgNgBg");
	var mask_9_graphics_52 = new cjs.Graphics().p("AhIRQQgwgNghgpQghgpgBgxQgBgrAWgnQAPgZAWgSQglghgJg2QgJg2AZgtIAFgJQgtgjgLg9QgKg+AfgwQATgdAdgSQgPgcgDgkIAAgXQgZgFgVgOQgqgbgTgyQgGgRgDgSIgRABQg2AAgogfQgcgVgQggQgQgggBgjQgBgfAMgfIAGgQIgDgCQgtgigLg+QgLg9AggxQAfgwA9gPQAYgGAWABIABgTQAEglATgdQAcgsA0gSQAzgSAxARQAcAKAWAUQANgeAYgVQAjghAxgGQAcgDAaAFQABgLAEgMQAOg4AsgfIAQgKQgKgUgEgZQgKg9AggwQAPgYAXgQQgZgdgIgqQgKgzAVgsQATgoApgYQApgYAsACQAxACApAhQAoAhAMAvQAMAwgUAwQgSAqgiAYQAVAYAJAeQAPAugRAwQgRAxgnAbIgPAJQAOAaADAfQAFA1ggAvQghAwg0AOQgmAKglgKIgDAUQgLAugmAiQgmAhgvAFQgwAFgrgZQgNgIgLgJQgMAYgUAVQgnAngyAHQgQACgOgCQAAAOgCAPQgEAXgKAUQAQAMANAQQAUAZAJAfQAEAPABAPQALgBALABQAvAAAnAeQAnAeAOAtQAKAdgDAfQAQAEARAJQAzAaAVAxQAVAxgRA3QgRA3gtAdIgDACQAHAOAFAPQAPAugRAxQgGASgKAQIALAJQAbAYANAhQASAwgQA0QgOAwgkAcIAHAHQAiAjAGA1QAGA0gZArQgZArgxAUQgdAMgeAAQgSAAgSgEg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_9_graphics_41,x:200.9163,y:153.759}).wait(1).to({graphics:mask_9_graphics_42,x:199.6203,y:164.919}).wait(1).to({graphics:mask_9_graphics_43,x:196.4447,y:175.2154}).wait(1).to({graphics:mask_9_graphics_44,x:187.0805,y:181.9083}).wait(1).to({graphics:mask_9_graphics_45,x:175.0015,y:184.6027}).wait(1).to({graphics:mask_9_graphics_46,x:166.8938,y:192.2932}).wait(1).to({graphics:mask_9_graphics_47,x:166.8938,y:202.4173}).wait(1).to({graphics:mask_9_graphics_48,x:166.8938,y:209.1247}).wait(1).to({graphics:mask_9_graphics_49,x:166.8938,y:217.1344}).wait(1).to({graphics:mask_9_graphics_50,x:166.8938,y:227.4178}).wait(1).to({graphics:mask_9_graphics_51,x:166.8938,y:237.6662}).wait(1).to({graphics:mask_9_graphics_52,x:166.8938,y:249.3291}).wait(69));

	// lady03
	this.instance_16 = new lib.CachedBmp_16();
	this.instance_16.setTransform(128,146.85,0.5,0.5);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(41).to({_off:false},0).wait(80));

	// 筆02
	this.instance_17 = new lib.筆();
	this.instance_17.setTransform(459.4,336.5,1,1,0,0,0,127,-281.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(26).to({_off:false},0).wait(1).to({x:478.3,y:347.3},0).wait(1).to({x:496.3,y:359.9},0).wait(1).to({x:513.4,y:355.4},0).wait(1).to({x:518.8,y:333.8},0).wait(1).to({x:521.5,y:312.2},0).wait(1).to({y:291.5},0).wait(1).to({x:515.2,y:269},0).wait(1).to({x:499.9,y:254.6},0).wait(1).to({x:481.9,y:245.6},0).wait(1).to({x:462.1,y:235.7},0).wait(1).to({x:440.5,y:234.8},0).wait(1).to({x:419.8,y:242.9},0).wait(1).to({x:400.9,y:253.7},0).wait(1).to({x:387.4,y:269.9},0).to({_off:true},1).wait(80));

	// 遮色片02 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_26 = new cjs.Graphics().p("AhICGQgvgZgVg1QgVg2ARgxQAJgaASgWQASgWAXgOQAugbA4AJQA4AKAjAoQAjApAAA5QABA4ghAqQgiApg4ALQgRADgPAAQglAAghgSg");
	var mask_10_graphics_27 = new cjs.Graphics().p("ABGDWQgzgHgjghQgjgigJgzIAAgCQg4AKgugZQgvgagVg0QgVg1ARgzQAJgaASgWQASgWAXgOQAugbA5AKQA4AJAiApQAcAgAGAqQAUgEAVACQAxAEAnAiQAnAiAKAvQAKAwgVAvQgVAvgrAYQghATgnAAIgWgBg");
	var mask_10_graphics_28 = new cjs.Graphics().p("ACkEUQgzgFgkggQglgggKgyIgBgGQgXADgYgDQg0gGgjgiQgkgigIgzIAAgBQg4AKgvgaQgugYgVg1QgVg2ARgyQAIgaASgWQASgWAYgOQAugbA4AJQA5AKAiAoQAcAgAGArQAVgEATABQAxAEAnAjQAnAiAKAwIACAHQATgEATABQAxAEAnAgQAnAhALAwQAMAvgVAvQgUAwgpAYQgjAVgpAAIgRgBg");
	var mask_10_graphics_29 = new cjs.Graphics().p("AEEFbQgygFgjgfQgkgggLgzQgDgOgBgOQgbAIgfgDQgzgFgjggQglgggKgyIgBgHQgXAEgZgDQg0gGgjgiQgkgigIgyIAAgCQg4ALgvgaQgugZgVg1QgVg2ARgyQAIgaASgWQASgWAYgOQAugbA4AJQA5AKAiAoQAcAgAGArQAUgEAVABQAxAEAmAjQAnAiAKAwIACAGQATgDATABQAxAEAnAhQAnAhALAvQAEAPAAAQQAggKAgAEQAxAHAlAkQAlAlAIAwQAHAvgWAsQgWAtgpAWQghASgmAAIgTgBg");
	var mask_10_graphics_30 = new cjs.Graphics().p("ADHFbQgxgFgjgfQglgggLgzQgDgOAAgOQgbAIgfgDQgzgFgkggQgkgggLgyIgBgHQgXAEgZgDQgzgGgkgiQgjgigJgyIAAgCQg3ALgvgaQgvgZgVg1QgVg2ARgyQAJgaASgWQASgWAXgOQAugbA5AJQA4AKAjAoQAcAgAGArQAUgEAVABQAxAEAnAjQAnAiAKAwIABAGQASgDAUABQAwAEAnAhQAoAhALAvQAEAPAAAQIAPgEQgDgPAAgRQAAg1AfgoQAcgkAsgPQAtgPAsALQAuANAgAoQAhAoACAvQACAwgcArQgcAqgtASQgMAEgNADIABAIQAHAvgVAsQgWAtgpAWQghASgnAAIgTgBg");
	var mask_10_graphics_31 = new cjs.Graphics().p("ACzFgQgxgFgjgfQglgggLgzQgDgOAAgOQgcAIgdgDQg0gFgkggQgkgggLgyIgBgHQgXAEgZgDQgzgGgkgiQgjgigJgyIAAgCQg4ALgugaQgvgZgVg1QgVg2ARgyQAJgaASgWQASgWAXgOQAugbA5AJQA4AKAjAoQAbAgAHArQAUgFAVACQAxAEAnAjQAnAiAKAwIABAGQATgDATABQAwAEAnAhQAoAhALAvQAEAPAAAQIAPgEQgDgPAAgRQAAg1AfgoQAQgVAWgOQgfgpACg2QACg3AignQAXgbAhgPQAigOAjACQAzADApAlQApAkAJAzQAJAygaAxQgUAjgfAVQAcAlACAsQACAwgcArQgcAqgtASQgNAEgMADIABAIQAHAvgVAsQgWAtgpAWQgiASgmAAIgTgBg");
	var mask_10_graphics_32 = new cjs.Graphics().p("ACnHJQgxgFgjgfQglgggLgzQgDgOgBgNQgbAHgdgDQg0gFgkggQgkgggLgyIgBgGQgXADgZgDQgzgGgkgiQgjgigJgzIAAgBQg4AKgugaQgvgZgVg0QgVg2ARgyQAJgaASgWQASgWAXgOQAugbA5AJQA4AKAjAoQAbAgAGArQAVgEAVABQAxAEAnAjQAnAiAKAvIABAHQATgEAUABQAvAEAnAhQAoAhALAwQADAPABAQIAPgEQgDgPAAgRQAAg2AfgoQAQgVAVgMQgegpACg3QACg3AignQAJgMAMgJQgHgKgGgLQgZgwAJgyQAHgjAWgdQAWgeAggQQAvgXA3ANQA3ANAgAqQAeAoAAA2QgBA2ggAoQgLANgNALQAYAdAGAlQAJAygaAxQgUAjgfAUQAcAlACAtQACAwgcArQgcAqgtASQgNAEgMADIABAIQAHAvgVAsQgWAtgpAWQgiASgmAAIgTgBg");
	var mask_10_graphics_33 = new cjs.Graphics().p("ACnI2QgxgFgjgfQglgggLgzQgDgOgBgNQgbAHgdgDQg0gFgkggQgkgggLgyIgBgGQgXAEgZgEQgzgGgkgiQgjgigJgzIAAgBQg4AKgugaQgvgZgVg1QgVg2ARgxQAJgaASgWQASgWAXgOQAugbA5AJQA4AKAjAoQAbAgAGArQAVgEAVABQAxAEAnAiQAnAiAKAwIABAHQATgEAUABQAvAEAnAhQAoAhALAwQADAPABAQIAPgEQgDgPAAgRQAAg2AfgoQAQgVAVgNQgegpACg3QACg2AignQAJgMAMgJQgHgKgGgLQgZgwAJgyQAHgjAWgdIAGgIQgQgOgNgSQgcgqACgvQABgwAegoQAegoAugPQAtgOAwAQQAwAPAcAmQAeAoAAAzQABA3gkArIgDADQANALALANQAeAoAAA2QgBA2ggAoQgLANgNALQAYAdAGAlQAJAxgaAxQgUAkgfAUQAcAlACAtQACAwgcArQgcAqgtASQgNAFgMACIABAIQAHAvgVAsQgWAtgpAWQgiASgmAAIgTgBg");
	var mask_10_graphics_34 = new cjs.Graphics().p("ACnKZQgxgGgjgfQglgggLgzQgDgOgBgNQgbAIgdgDQg0gFgkggQgkgggLgyIgBgHQgXAEgZgDQgzgHgkghQgjgigJgzIAAgCQg4AKgugZQgvgagVg1QgVg1ARgzQAJgaASgWQASgWAXgNQAugbA5AKQA4AJAjAoQAbAgAGAqQAVgEAVACQAxAEAnAiQAnAiAKAwIABAHQATgEAUACQAvADAnAiQAoAhALAvQADAPABAQIAPgEQgDgPAAgQQAAg3AfgoQAQgUAVgOQgegpACg3QACg3AignQAJgLAMgIQgHgLgGgLQgZgwAJgxQAHgjAWgeIAGgIQgQgNgNgTQgcgpACgwQAAgcALgZQgjgPgXgcQgdgkgDgwQgEgxAXgoQAZgsAzgVQA0gUAxAPQAxAPAfAtQAgAtgDAzQgCAZgKAXQAmAQAYAgQAeAoAAAyQABA3gkAsIgDACQANALALAOQAeAoAAA2QgBA2ggAnQgLANgNAKQAYAdAGAlQAJAzgaAwQgUAkgfAUQAcAmACAsQACAxgcAqQgcArgtARQgNAFgMACIABAJQAHAugVAtQgWAsgpAXQgiASgmAAIgTgBg");
	var mask_10_graphics_35 = new cjs.Graphics().p("ACnLJQgxgFgjgfQglgggLgzQgDgOgBgOQgbAIgdgDQg0gFgkggQgkgggLgyIgBgHQgXAEgZgDQgzgGgkgiQgjgigJgzIAAgCQg4ALgugaQgvgZgVg1QgVg2ARgyQAJgaASgWQASgWAXgOQAugbA5AJQA4AKAjAoQAbAgAGArQAVgEAVABQAxAEAnAjQAnAiAKAwIABAGQATgDAUABQAvAEAnAhQAoAhALAwQADAPABAQIAPgEQgDgPAAgRQAAg2AfgoQAQgVAVgOQgegoACg3QACg3AignQAJgMAMgJQgHgKgGgLQgZgvAJgyQAHgjAWgdIAGgIQgQgOgNgSQgcgqACgvQAAgcALgZQgjgPgXgdQgRgUgIgZQgdAGgfgGQg5gKghgpQgjgpABg6QAAg5AigpQAigpA4gKQA5gJAuAbQAwAbATA0IABACQAngJAnALQAxAPAfAtQAgAtgDA0QgCAZgKAWQAmAQAYAgQAeAoAAAzQABA3gkArIgDADQANAKALAOQAeAoAAA2QgBA1ggAoQgLANgNALQAYAdAGAlQAJAygaAxQgUAjgfAVQAcAlACAtQACAwgcArQgcAqgtASQgNAEgMADIABAIQAHAvgVAsQgWAtgpAWQgiASgmAAIgTgBg");
	var mask_10_graphics_36 = new cjs.Graphics().p("ACnMKQgxgFgjgfQglgggLgzQgDgOgBgOQgbAIgdgDQg0gFgkggQgkgggLgyIgBgHQgXAEgZgDQgzgGgkgiQgjgigJgzIAAgCQg4ALgugaQgvgZgVg1QgVg2ARgyQAJgaASgWQASgWAXgOQAugbA5AJQA4AKAjAoQAbAgAGArQAVgEAVABQAxAEAnAjQAnAiAKAwIABAGQATgDAUABQAvAEAnAhQAoAhALAwQADAPABAQIAPgEQgDgPAAgRQAAg2AfgoQAQgVAVgOQgegpACg2QACg3AignQAJgMAMgJQgHgKgGgLQgZgwAJgxQAHgjAWgdIAGgIQgQgOgNgSQgcgqACgvQAAgcALgZQgjgPgXgdQgRgUgIgZQgdAGgfgGQg5gKghgpQgdgigEgtQghAIgkgHQgxgLgggjQgggjgHgxQgGgyAXgqQAYgtAygWQAygVAyANQAuAMAfAmQAdAkAFArIAKgCQA5gJAuAbQAwAbATA0IABACQAngJAnALQAxAPAfAtQAgAtgDA0QgCAZgKAWQAmAQAYAgQAeAoAAAzQABA3gkArIgDADQANAKALAOQAeAoAAA1QgBA2ggAoQgLANgNALQAYAdAGAlQAJAygaAxQgUAjgfAVQAcAlACAtQACAwgcArQgcAqgtASQgNAEgMADIABAIQAHAvgVAsQgWAtgpAWQgiASgmAAIgTgBg");
	var mask_10_graphics_37 = new cjs.Graphics().p("ACnMpQgxgFgjgfQglgggLgzQgDgOgBgOQgbAIgdgDQg0gFgkggQgkgggLgyIgBgHQgXAEgZgDQgzgGgkgiQgjgigJgzIAAgCQg4ALgugaQgvgZgVg1QgVg2ARgyQAJgaASgWQASgWAXgOQAugbA5AJQA4AKAjAoQAbAgAGArQAVgEAVABQAxAEAnAjQAnAiAKAwIABAGQATgDAUABQAvAEAnAhQAoAhALAwQADAPABAQIAPgEQgDgPAAgRQAAg2AfgoQAQgVAVgOQgegpACg2QACg3AignQAJgMAMgJQgHgKgGgLQgZgwAJgyQAHgiAWgdIAGgIQgQgOgNgSQgcgqACgvQAAgcALgZQgjgPgXgdQgRgUgIgZQgdAGgfgGQg5gKghgpQgdgigEgtQghAIgkgHQgxgLgggjQgOgOgIgRQgsAXgugGQgugFglghQglgigKgtQgLgwAVgwQAUgvArgZQArgYA0AGQA0AHAjAiQARARAMAVIAKgFQAygVAyANQAuAMAfAmQAdAkAFArIAKgCQA5gJAuAbQAwAbATA0IABACQAngJAnALQAxAPAfAtQAgAtgDA0QgCAZgKAWQAmAQAYAgQAeAoAAAzQABA3gkArIgDADQANAKALAOQAeAoAAA1QgBA2ggAoQgLANgNALQAYAdAGAlQAJAygaAxQgUAjgfAVQAcAlACAtQACAwgcArQgcAqgtASQgNAEgMADIABAIQAHAvgVAsQgWAtgpAWQgiASgmAAIgTgBg");
	var mask_10_graphics_38 = new cjs.Graphics().p("ADzMpQgygFgjgfQgkgggLgzQgDgOgBgOQgbAIgfgDQgygFgkggQglgggKgyIgCgHQgXAEgYgDQg0gGgjgiQgkgigIgzIgBgCQg3ALgvgaQgugZgVg1QgVg2ARgyQAIgaASgWQASgWAYgOQAugbA4AJQA5AKAiAoQAcAgAGArQAUgEAVABQAxAEAnAjQAmAiAKAwIABAGQATgDAUABQAxAEAnAhQAnAhALAwQAEAPAAAQIAQgEQgDgPAAgRQAAg2AfgoQAPgVAWgOQgegpACg2QACg3AhgnQAKgMALgJQgHgKgGgLQgZgwAKgyQAGgiAWgdIAGgIQgQgOgMgSQgcgqABgvQABgcAKgZQgigPgXgdQgRgUgIgZQgdAGgggGQg5gKgigpQgcgigFgtQggAIgkgHQgxgLgggjQgNgOgJgRQgrAXgugGQgvgFgkghIgGgGQgaAggmANQgyASg1gTQg1gTgbgtQgbguAIg4QAJg3AngkQAWgTAdgLQAcgKAeABQA1ADAqAmIAFAEQARgUAYgOQArgYAzAGQA0AHAjAiQASARALAVIALgFQAygVAwANQAuAMAgAmQAeAkAFArIAKgCQA5gJAuAbQAwAbATA0IAAACQAogJAmALQAxAPAgAtQAfAtgDA0QgCAZgJAWQAlAQAYAgQAeAoAAAzQABA3gkArIgCADQANAKAKAOQAfAogBA1QgBA2gfAoQgLANgNALQAXAdAHAlQAIAygaAxQgUAjgfAVQAcAlACAtQADAwgcArQgcAqguASQgMAEgNADIACAIQAHAvgWAsQgWAtgpAWQghASgnAAIgSgBg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AFaMpQgygFgjgfQgkgggLgzQgDgOgBgOQgbAIgfgDQgzgFgkggQglgggKgyIgBgHQgWAEgZgDQg0gGgjgiQgkgigIgzIAAgCQg4ALgvgaQgugZgVg1QgVg2ARgyQAIgaASgWQASgWAYgOQAugbA4AJQA5AKAiAoQAcAgAGArQAUgEAUABQAxAEAnAjQAnAiAKAwIACAGQATgDATABQAxAEAnAhQAnAhALAwQAEAPAAAQIAQgEQgDgPAAgRQAAg2AfgoQAQgVAVgOQgegpACg2QACg3AhgnQAKgMAMgJQgIgKgGgLQgZgwAKgyQAGgiAWgdIAGgIQgPgOgNgSQgcgqABgvQABgcALgZQgjgPgXgdQgRgUgIgZQgdAGgggGQg5gKgigpQgcgigFgtQghAIgkgHQgxgLgfgjQgNgOgJgRQgrAXgugGQgvgFgkghIgGgGQgaAggmANQgyASg1gTIgDgBQgPAsgjAaQgZATgeAIQgfAHgfgEQgegEgbgOQgbgPgTgXQgagegGgqQgHgpAPglQAOgmAggaQAggbAngHQAtgJArASQANgjAcgaQAWgTAdgLQAcgKAeABQA1ADAqAmIAFAEQARgUAYgOQArgYAzAGQA0AHAjAiQARARALAVIALgFQAygVAxANQAuAMAgAmQAeAkAFArIAKgCQA5gJAuAbQAwAbATA0IABACQAngJAmALQAxAPAgAtQAfAtgDA0QgBAZgKAWQAmAQAXAgQAeAoAAAzQABA3gkArIgCADQANAKAKAOQAfAogBA1QgBA2gfAoQgLANgNALQAXAdAHAlQAIAygaAxQgTAjgfAVQAbAlACAtQADAwgcArQgcAqguASQgMAEgNADIACAIQAHAvgWAsQgWAtgpAWQghASgmAAIgTgBg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AGyMpQgxgFgjgfQglgggLgzQgDgOAAgOQgcAIgegDQg0gFgkggQgkgggLgyIgBgHQgXAEgZgDQgzgGgjgiQgjgigJgzIAAgCQg4ALgugaQgvgZgVg1QgVg2ARgyQAJgaASgWQASgWAXgOQAugbA5AJQA4AKAiAoQAcAgAGArQAUgEAVABQAxAEAnAjQAnAiAKAwIABAGQATgDAUABQAwAEAnAhQAoAhALAwQAEAPAAAQIAPgEQgDgPAAgRQAAg2AfgoQAQgVAWgOQgfgpACg2QACg3AignQAKgMALgJQgHgKgGgLQgZgwAJgyQAHgiAWgdIAGgIQgQgOgNgSQgcgqACgvQAAgcALgZQgigPgYgdQgQgUgJgZQgcAGgggGQg5gKgigpQgdgigEgtQghAIgkgHQgxgLgggjQgNgOgJgRQgqAXgvgGQgugFglghIgFgGQgaAggnANQgxASg1gTIgDgBQgPAsgkAaQgYATgfAIQgeAHgfgEIgNgCIgGAVQgRA3guAcQgtAdg5gIQg6gIgjgoQgkgogCg6QgCg6AigqQAhgqA5gLQAegGAbAEQADgOAFgOQAOgmAggaQAggbAogHQAsgJAsASQANgjAcgaQAWgTAcgLQAdgKAdABQA1ADAqAmIAGAEQAQgUAYgOQArgYA0AGQAzAHAjAiQASARALAVIAKgFQAygVAyANQAuAMAgAmQAdAkAGArIAJgCQA5gJAuAbQAwAbATA0IABACQAogJAmALQAxAPAfAtQAgAtgDA0QgCAZgJAWQAlAQAYAgQAeAoAAAzQABA3gkArIgCADQAMAKALAOQAeAoAAA1QgBA2ggAoQgKANgOALQAYAdAGAlQAJAygaAxQgUAjgfAVQAcAlACAtQACAwgcArQgcAqgtASQgNAEgMADIABAIQAHAvgVAsQgWAtgpAWQgiASgmAAIgTgBg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(26).to({graphics:mask_10_graphics_26,x:256.1712,y:174.3399}).wait(1).to({graphics:mask_10_graphics_27,x:265.167,y:180.5956}).wait(1).to({graphics:mask_10_graphics_28,x:274.1014,y:186.818}).wait(1).to({graphics:mask_10_graphics_29,x:283.9057,y:193.9304}).wait(1).to({graphics:mask_10_graphics_30,x:289.955,y:193.9304}).wait(1).to({graphics:mask_10_graphics_31,x:291.9744,y:193.4415}).wait(1).to({graphics:mask_10_graphics_32,x:293.1951,y:182.9193}).wait(1).to({graphics:mask_10_graphics_33,x:293.1951,y:172.0093}).wait(1).to({graphics:mask_10_graphics_34,x:293.1951,y:162.1993}).wait(1).to({graphics:mask_10_graphics_35,x:293.1951,y:157.3304}).wait(1).to({graphics:mask_10_graphics_36,x:293.1951,y:150.8341}).wait(1).to({graphics:mask_10_graphics_37,x:293.1951,y:147.7359}).wait(1).to({graphics:mask_10_graphics_38,x:285.6486,y:147.7359}).wait(1).to({graphics:mask_10_graphics_39,x:275.3248,y:147.7359}).wait(1).to({graphics:mask_10_graphics_40,x:266.4698,y:147.7359}).wait(81));

	// lady02
	this.instance_18 = new lib.CachedBmp_17();
	this.instance_18.setTransform(195.3,77.3,0.5,0.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(26).to({_off:false},0).wait(95));

	// 筆01
	this.instance_19 = new lib.筆();
	this.instance_19.setTransform(278.7,350.5,1,1,0,0,0,127,-281.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({x:268.8,y:325.3},0).wait(1).to({x:266.1,y:304.6},0).wait(1).to({x:268.8,y:280.3},0).wait(1).to({x:282.3,y:260.5},0).wait(1).to({x:302.1,y:248.8},0).wait(1).to({x:325.5,y:244.3},0).wait(1).to({x:348,y:251.05},0).wait(1).to({x:368.95,y:263.05},0).wait(1).to({x:383.65,y:277.75},0).wait(1).to({x:401.85,y:300.85},0).wait(1).to({x:416.55,y:322.55},0).wait(1).to({x:434.05,y:346.35},0).wait(1).to({x:448.75,y:367.35},0).wait(1).to({x:464.15,y:389.75},0).wait(1).to({x:479.55,y:405.85},0).wait(1).to({x:498.45,y:422.65},0).wait(1).to({x:515.95,y:438.75},0).wait(1).to({x:535.55,y:451.35},0).wait(1).to({x:555.85,y:456.25},0).wait(1).to({x:571.25,y:445.05},0).wait(1).to({x:567.75,y:424.75},0).wait(1).to({x:557.25,y:407.25},0).wait(1).to({x:544.65,y:391.85},0).wait(1).to({x:532.05,y:375.75},0).wait(1).to({x:517.35,y:359.65},0).to({_off:true},1).wait(95));

	// 遮色片01 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AgCCbQgmAAgjgVQgjgUgVghQgUghgDgoQgCgnARgjQAMgaAWgVQAVgUAbgLQAxgTA2AQQA2ARAdAsQAeArgFA4QgFA4gkAmQgWAXgfANQgdAMgfAAIgCAAg");
	var mask_11_graphics_1 = new cjs.Graphics().p("ABGEOQgmgBgigUQgjgUgVghQgUghgDgoQgCgoARgkIAGgLQgiADgfgMQglgNgbgfQgbgfgIgnQgHgnANgoQANgnAegaQAkggAygFQAzgFApAXQAgATAUAgQAVAhADAkQADAlgOAkIgJASQAdgCAfAJQA2AQAdArQAeAsgFA4QgFA4gkAnQgWAXgfANQgdAMgfAAIgDAAg");
	var mask_11_graphics_2 = new cjs.Graphics().p("ABdF3QgngBgjgUQgigUgUghQgVghgCgoQgCgoAQgkIAGgLQghADgfgMQgmgNgbggQgbgfgHgnQgIgmANgoQAGgRAJgPQgLgGgJgJQgkgigJgzQgJgzAVgtQAUgoApgXQApgYAsACQAxADAoAhQAoAiALAvQAMAwgVAwQgFALgFAKQAaASATAcQAUAhAEAkQADAkgPAkIgJASQAdgDAfAKQA2AQAeAsQAdAsgEA4QgFA4glAnQgWAXgeANQgeAMgfAAIgCAAg");
	var mask_11_graphics_3 = new cjs.Graphics().p("ABlHxQgmAAgjgVQgigUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgfQgbgggIgnQgHgnANgnQAGgSAJgOQgLgHgJgJQgkgggKg0QgJgzAWgsQAOgcAYgUQgZgPgSgYQgegqACg4QADg4AjgnQAjgnA4gJQA3gJAtAaQAsAbAVA0QAUA0gQAyQgKAfgWAYIgNAOIAOAMQAoAhAMAwQALAwgUAwQgFALgGAJQAbASASAcQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdAsQAeArgFA5QgFA4gkAmQgWAXgfANQgdAMgfAAIgDAAg");
	var mask_11_graphics_4 = new cjs.Graphics().p("ABlJjQgmAAgjgVQgigUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgfQgbgggIgnQgHgnANgnQAGgSAJgOQgLgHgJgJQgkghgKg0QgJgyAWgsQAOgcAYgUQgZgPgSgYQgegqACg4QADg4AjgnQAZgbAjgNQgSgbgGgjQgHg0AXgsQAVgmAogWQAngWAsACQAwADAoAiQApAiALAwQALAwgWAwQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgNAOIAOAMQAoAhAMAwQALAvgUAwQgFALgGAJQAbASASAdQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdAsQAeArgFA5QgFA4gkAmQgWAXgfANQgdAMgfAAIgDAAg");
	var mask_11_graphics_5 = new cjs.Graphics().p("ABiK+QgmAAgjgVQgigUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgfQgbgggIgnQgHgnANgnQAGgSAIgOQgKgHgJgJQgkghgKg0QgJgzAWgsQAOgcAXgTQgYgPgSgYQgegqACg4QADg4AjgnQAZgbAigNQgRgbgGgjQgHg0AXgsQAVgmAogWQAhgTAjgBIAAgDQgJg1AegyQAdgyAzgSQAfgKAhADQAhADAcAQQAmAVAVAoQAVAogCArQgDArgaAkQgaAlgoAQQgaAKgbABQAIAtgUAtQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAPAMQAoAgAMAwQALAwgUAwQgFALgGAJQAbASASAdQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdAsQAeArgFA5QgFA4gkAmQgWAXgfANQgdAMgfAAIgDAAg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AgRLlQgngBgjgUQgjgUgUghQgVghgCgoQgCgoAQgkIAGgMQghADgfgLQgmgNgbggQgbgfgHgnQgIgnANgoQAGgRAJgPQgKgHgKgIQgkgigJgzQgJgzAVgtQAOgcAYgUQgZgOgRgXQgfgqADg4QADg4AjgnQAYgcAjgMQgSgcgFgjQgIg0AYgrQAUgnAogWQAhgSAkgCIgBgCQgJg2AegyQAegyA0gRQAegLAhADQAhAEAcAQIAOAJQAFgPAIgOQAcgxAygTQAvgSA0AQQA0AQAdAqQAdAqgEA2QgDA2giAmQghAmg2AKQg1AJgtgXIgSgLQgHAXgPAVQgaAkgoAQQgZALgbAAQAIAugTAtQgWAwgrAYQgJAFgKAEQAIAOAGAPQAUA1gQAxQgKAfgWAYIgOAOIAQALQAoAiALAvQAMAwgVAwQgFALgFAKQAbASASAcQAUAhAEAkQADAlgPAkIgJARQAdgCAeAKQA2AQAeAsQAdAsgEA4QgFA4glAnQgWAXgeANQgeAMgeAAIgCAAg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AiFLlQgmgBgjgUQgjgUgVghQgUghgDgoQgCgoARgkIAGgMQgiADgfgLQglgNgbggQgbgfgIgnQgHgnANgoQAGgRAJgPQgLgHgJgIQgkgigKgzQgJgzAWgtQAOgcAYgUQgZgOgSgXQgegqACg4QADg4AjgnQAZgcAjgMQgSgcgGgjQgHg0AXgrQAVgnAogWQAhgSAjgCIAAgCQgJg2AegyQAegyAzgRQAfgLAhADQAhAEAcAQIAPAJQAFgPAIgOQAbgxAxgTQAwgSA0AQQAyAQAdAoQAWgUAfgLQAwgRAuANQAuAOAgAoQAfApACAwQABAwgdAqQgdArgtAQQguAQgxgOQgxgPgegmIgDgFQgfAdgtAIQg2AJgtgXIgRgLQgHAXgPAVQgZAkgoAQQgaALgbAAQAJAugVAtQgVAwgrAYQgKAFgKAEQAJAOAGAPQAUA1gQAxQgKAfgWAYIgOAOIAPALQAoAiAMAvQALAwgUAwQgFALgGAKQAbASASAcQAVAhADAkQADAlgOAkIgJARQAdgCAfAKQA2AQAdAsQAdAsgFA4QgFA4gjAnQgWAXgfANQgdAMgfAAIgDAAg");
	var mask_11_graphics_8 = new cjs.Graphics().p("Aj5LlQgmgBgjgUQgjgUgVghQgUghgDgoQgCgoARgkIAGgMQgiADgfgLQglgNgbggQgbgfgIgnQgHgnANgoQAGgRAIgPQgKgHgJgIQgkgigKgzQgJgzAWgtQAOgcAXgUQgYgOgSgXQgegqACg4QADg4AjgnQAZgcAigMQgRgcgGgjQgHg0AXgrQAVgnAogWQAhgSAjgCIAAgCQgJg2AegyQAegyAzgRQAfgLAhADQAhAEAcAQIAPAJQAFgPAIgOQAcgxAxgTQAwgSAzAQQAyAQAdAoQAWgUAfgLQAwgRAuANQAuAOAgAoQALAPAHAPQARgMATgIQAigNAlADQAlAEAfATQAfAUATAgQATAgADAkQACAkgOAjQgPAigcAYQgeAagpAHQgpAIgmgNQgmgOgbgfQgQgSgJgUQgSANgVAIQguAQgxgOQgxgPgegmIgDgFQgfAdgtAIQg1AJgtgXIgRgLQgHAXgPAVQgaAkgoAQQgaALgbAAQAIAugUAtQgVAwgrAYQgKAFgKAEQAJAOAGAPQAUA1gQAxQgKAfgWAYIgPAOIAQALQAoAiAMAvQALAwgUAwQgFALgGAKQAbASASAcQAVAhADAkQADAlgOAkIgJARQAdgCAfAKQA2AQAdAsQAeAsgFA4QgFA4gkAnQgWAXgfANQgdAMgfAAIgDAAg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AlLLlQgngBgjgUQgjgUgUghQgVghgCgoQgCgoAQgkIAHgMQgiADgfgLQgmgNgbggQgbgfgHgnQgIgnANgoQAGgRAJgPQgKgHgKgIQgkgigJgzQgJgzAVgtQAOgcAYgUQgZgOgRgXQgfgqADg4QADg4AjgnQAYgcAjgMQgSgcgFgjQgIg0AYgrQAUgnAogWQAhgSAkgCIgBgCQgJg2AegyQAegyA0gRQAegLAiADQAhAEAcAQIAOAJQAFgPAIgOQAcgxAygTQAvgSA0AQQAxAQAdAoQAWgUAfgLQAwgRAvANQAuAOAfAoQAMAPAHAPQARgMATgIQAhgNAmADQAlAEAfATQAeAUAUAgQARAcAEAfIAOAAQAnABAiATQAhATAVAhQAWAiACAmQACAigMAgQgNAhgYAXQgYAXghALQggAMgigEQghgDgegRQgegSgTgbQgWghgEglQggADgegKQgmgOgbgfQgPgSgJgUQgSANgWAIQgtAQgxgOQgygPgdgmIgEgFQgeAdgtAIQg1AJgtgXIgRgLQgIAXgPAVQgaAkgoAQQgZALgbAAQAIAugUAtQgWAwgrAYQgJAFgKAEQAIAOAGAPQAUA1gQAxQgKAfgWAYIgOAOIAQALQAoAiALAvQAMAwgVAwQgEALgGAKQAbASASAcQAUAhAEAkQADAlgPAkIgIARQAdgCAeAKQA2AQAeAsQAdAsgEA4QgFA4glAnQgWAXgeANQgdAMggAAIgCAAg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AmrLlQgngBgjgUQgjgUgUghQgVghgCgoQgCgoAQgkIAGgMQghADgfgLQgmgNgbggQgbgfgHgnQgIgnANgoQAGgRAJgPQgKgHgKgIQgkgigJgzQgJgzAVgtQAOgcAYgUQgZgOgRgXQgfgqADg4QADg4AjgnQAYgcAjgMQgSgcgFgjQgIg0AYgrQAUgnAogWQAhgSAkgCIgBgCQgJg2AegyQAegyA0gRQAegLAiADQAhAEAcAQIAOAJQAFgPAIgOQAcgxAygTQAvgSA0AQQAyAQAdAoQAWgUAfgLQAvgRAvANQAuAOAfAoQALAPAIAPQAQgMAUgIQAhgNAmADQAlAEAfATQAeAUAUAgQAQAcAEAfIAPAAQAnABAiATQAhATAVAhQAWAiACAmQACAigMAgIgEAIIABAAQAhgMAlAFQAkAEAeAUQAdATATAgQATAgACAjQACAYgFAWQgJAngdAfQgcAegmANQgnALgogIQgpgJgegaQgegbgNgoQgOgoAIgnQAEgSAHgQIgBAAQggAMgigEQghgDgegRQgegSgTgbQgWghgEglQggADgegKQgmgOgbgfQgPgSgKgUQgRANgWAIQgtAQgxgOQgxgPgdgmIgEgFQgfAdgtAIQg1AJgtgXIgSgLQgHAXgPAVQgaAkgoAQQgZALgcAAQAJAugUAtQgWAwgrAYQgJAFgKAEQAIAOAGAPQAUA1gQAxQgKAfgWAYIgOAOIAQALQAoAiALAvQAMAwgVAwQgFALgFAKQAbASASAcQAUAhAEAkQADAlgPAkIgJARQAdgCAfAKQA2AQAeAsQAdAsgEA4QgFA4glAnQgWAXgeANQgeAMgfAAIgCAAg");
	var mask_11_graphics_11 = new cjs.Graphics().p("An6LlQgmgBgjgUQgjgUgVghQgUghgDgoQgCgoARgkIAGgMQgiADgfgLQglgNgbggQgbgfgIgnQgHgnANgoQAGgRAIgPQgKgHgJgIQgkgigKgzQgJgzAWgtQAOgcAXgUQgYgOgSgXQgegqACg4QADg4AjgnQAZgcAigMQgRgcgGgjQgHg0AXgrQAVgnAogWQAhgSAjgCIAAgCQgJg2AegyQAegyAzgRQAfgLAhADQAhAEAcAQIAPAJQAFgPAIgOQAcgxAxgTQAwgSA0AQQAyAQAdAoQAWgUAfgLQAwgRAtANQAuAOAgAoQALAPAHAPQARgMATgIQAigNAlADQAlAEAfATQAfAUATAgQARAcAEAfIAOAAQAoABAhATQAiATAVAhQAVAiACAmQADAigNAgIgDAIIAAAAQAigMAkAFQAlAEAdAUQAeATATAgQASAgADAjQABAYgFAWQgDAPgHAPQAQgCAQACQAgADAbAPQAbAOATAZQAUAZAIAcQAMApgMArQgMArgfAdQgfAdgrAJQgsAJgogOQgogPgbgjQgcgjgFgqIgBgXQAAgMADgQQADgRAHgPQgYACgZgFQgpgJgegaQgegbgNgoQgNgoAIgnQADgSAIgQIgBAAQghAMghgEQghgDgegRQgegSgTgbQgWghgFglQgfADgegKQgmgOgbgfQgQgSgJgUQgSANgVAIQgtAQgxgOQgxgPgegmIgDgFQgfAdgtAIQg2AJgtgXIgRgLQgHAXgPAVQgaAkgoAQQgaALgbAAQAIAugUAtQgVAwgrAYQgKAFgKAEQAJAOAGAPQAUA1gQAxQgKAfgWAYIgPAOIAQALQAoAiAMAvQALAwgUAwQgFALgGAKQAbASASAcQAVAhADAkQADAlgOAkIgJARQAdgCAfAKQA2AQAdAsQAeAsgFA4QgFA4gkAnQgWAXgfANQgdAMgfAAIgDAAg");
	var mask_11_graphics_12 = new cjs.Graphics().p("ApMLlQgngBgjgUQgjgUgUghQgVghgCgoQgCgoAQgkIAGgMQghADgfgLQgmgNgbggQgbgfgHgnQgIgnANgoQAGgRAJgPQgKgHgKgIQgkgigJgzQgJgzAVgtQAOgcAYgUQgZgOgRgXQgfgqADg4QADg4AjgnQAYgcAjgMQgSgcgFgjQgIg0AYgrQAUgnAogWQAhgSAkgCIgBgCQgJg2AegyQAegyA0gRQAegLAiADQAhAEAcAQIAOAJQAFgPAIgOQAcgxAygTQAvgSA0AQQAyAQAdAoQAWgUAfgLQAwgRAvANQAuAOAeAoQALAPAIAPQAQgMAUgIQAhgNAmADQAlAEAfATQAeAUAUAgQAQAcAEAfIAPAAQAnABAiATQAhATAVAhQAWAiACAmQACAigMAgIgEAIIABAAQAhgMAlAFQAkAEAeAUQAdATATAgQATAgACAjQACAYgFAWQgEAPgHAPQAQgCARACQAfADAbAPQAbAOAUAZQAUAZAIAcQALApgLArQgJAegRAXQAvgOAwARQAmAOAcAiQAbAhAHApQAGAogQAoQgQApggAZQggAZgrAGQgrAFgmgQQgmgQgZgjQgagigEgpQgBgKABgMQAAgOADgNQAHgiAVgcIgLADQgsAJgngOQgogPgcgjQgbgjgFgqIgBgXQAAgMACgQQADgRAIgPQgZACgYgFQgpgJgegaQgegbgNgoQgOgoAIgnQAEgSAHgQIgBAAQggAMgigEQghgDgegRQgegSgTgbQgWghgEglQggADgegKQgmgOgbgfQgOgSgKgUQgRANgWAIQgtAQgxgOQgygPgdgmIgEgFQgfAdgtAIQg1AJgtgXIgSgLQgHAXgPAVQgaAkgoAQQgZALgcAAQAJAugUAtQgWAwgrAYQgJAFgKAEQAIAOAGAPQAUA1gQAxQgKAfgWAYIgOAOIAQALQAoAiALAvQAMAwgVAwQgFALgFAKQAbASASAcQAUAhAEAkQADAlgPAkIgJARQAdgCAfAKQA2AQAeAsQAdAsgEA4QgFA4glAnQgWAXgeANQgeAMgfAAIgCAAg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AqULlQgmgBgjgUQgjgUgVghQgUghgDgoQgCgoARgkIAGgMQghADgggLQglgNgbggQgbgfgIgnQgHgnANgoQAGgRAJgPQgLgHgJgIQgkgigKgzQgJgzAWgtQAOgcAYgUQgZgOgSgXQgegqACg4QADg4AjgnQAZgcAjgMQgSgcgGgjQgHg0AXgrQAVgnAogWQAhgSAjgCIAAgCQgJg2AegyQAegyAzgRQAfgLAhADQAhAEAcAQIAPAJQAFgPAIgOQAcgxAxgTQAwgSA0AQQAyAQAdAoQAWgUAfgLQAwgRAuANQAuAOAgAoQALAPAIAPQAQgMATgIQAhgNAlADQAlAEAfATQAfAUATAgQARAcAEAfIAOAAQAoABAhATQAiATAVAhQAVAiACAmQADAigNAgIgDAIIAAAAQAigMAkAFQAlAEAdAUQAeATATAgQASAgADAjQABAYgFAWQgDAPgHAPQAQgCAQACQAgADAbAPQAbAOATAZQAUAZAIAcQAMApgMArQgIAegRAXQAvgOAvARQAnAOAbAiQAbAhAHApQAHAogQAoIgCAEQAfAAAfANQAtATAYAmQAUAfAEAnQADAngOAiQgNAhgcAYQgbAZgjAJQgiAJgkgHQgkgHgcgWQgjgbgPgrQgQgrAJgqQAEgPAGgNQghABgdgNQgmgQgagjQgZgigEgpQgCgKABgMQAAgOADgNQAIgiAVgcIgLADQgsAJgogOQgogPgbgjQgcgjgFgqIgBgXQAAgMADgQQADgRAHgPQgYACgZgFQgpgJgegaQgegbgNgoQgNgoAIgnQAEgSAHgQIgBAAQghAMghgEQghgDgegRQgegSgTgbQgWghgEglQggADgdgKQgmgOgbgfQgPgSgKgUQgSANgVAIQguAQgxgOQgxgPgegmIgDgFQgfAdgtAIQg2AJgtgXIgRgLQgHAXgPAVQgaAkgoAQQgZALgcAAQAJAugVAtQgVAwgrAYQgKAFgKAEQAJAOAGAPQAUA1gQAxQgKAfgWAYIgOAOIAPALQAoAiAMAvQALAwgUAwQgFALgGAKQAbASASAcQAVAhADAkQADAlgOAkIgJARQAdgCAfAKQA2AQAdAsQAeAsgFA4QgFA4gkAnQgWAXgfANQgdAMgfAAIgDAAg");
	var mask_11_graphics_14 = new cjs.Graphics().p("ANwMbQghgRgWggQgWghgEgmIgBgVQAAgOADgPQADgPAGgOQgdAGgegGQglgHgcgWQgigbgQgrQgQgrAKgqQADgPAGgNQggABgegNQgmgQgZgjQgagigEgpQgBgKABgMQAAgOADgNQAHgiAVgcIgLADQgsAJgngOQgogPgcgjQgbgjgFgqIgBgWQAAgMACgQQADgRAIgQQgZACgYgFQgpgJgegaQgegbgNgoQgOgoAIgnQAEgSAHgQIgBAAQggAMgigEQghgDgegRQgegSgSgbQgWghgEglQggADgegKQgmgOgbgfQgPgSgKgUQgRANgWAIQgtAQgxgOQgygPgdgmIgEgFQgfAdgtAIQg1AJgtgXIgSgLQgHAXgPAVQgaAkgoAQQgZALgcAAQAJAugUAtQgWAwgrAYQgJAGgKADQAIAOAGAPQAUA1gQAxQgKAfgWAZIgOAOIAQALQAoAiALAuQAMAwgVAwQgFALgFAKQAbASASAcQAUAhAEAkQADAlgPAkIgJARQAdgCAfAKQA2AQAeAsQAdAsgEA4QgFA4glAnQgWAXgeANQgfAMggAAQgngBgjgUQgjgUgUghQgVghgCgoQgCgoAQgkIAGgMQghADgfgLQgmgNgbggQgbgfgHgnQgIgnANgoQAGgRAJgPQgKgHgKgIQgkgigJgzQgJgzAVgtQAOgbAYgUQgZgOgRgYQgfgqADg4QADg4AjgnQAYgcAjgMQgSgcgFgjQgIg0AYgrQAUgnAogWQAhgSAkgCIgBgCQgJg2AegyQAegyA0gRQAegLAiADQAhAEAcAQIAOAJQAFgPAIgOQAcgxAygTQAvgSA0AQQAyAQAdAoQAWgUAfgLQAwgRAvANQAuAOAfAoQALAPAIAPQAQgMAUgIQAhgNAmADQAkAEAfATQAeAUAUAgQAQAcAEAfIAPAAQAnABAiATQAhATAVAhQAWAiACAmQACAigMAgIgEAIIABAAQAhgMAlAFQAkAEAeAUQAdATATAgQATAgACAjQACAYgFAWQgEAPgHAPQAQgCARACQAfADAbAPQAbAOAUAZQAUAZAIAdQALApgLAqQgJAegRAXQAvgNAwAQQAmAOAcAiQAbAhAHApQAGAogQAoIgCAEQAfAAAgANQAsATAYAmQAVAfADAnQAEAngOAiIgCADQAigGAiAJQAlAJAcAZQAbAYAOAkQAOAjgEAkQgEAmgWAgQgVAhgiASQghASgnAAQgnAAgigSg");
	var mask_11_graphics_15 = new cjs.Graphics().p("AP2OCQgtgDgkgZQgcgUgQgdQgTgigBgmIABgWQghgCgcgPQgigRgWghQgWgggEgmIAAgWQAAgOADgOQADgQAGgNQgdAFgfgGQgkgHgcgWQgjgagPgrQgQgrAJgrQADgOAGgNQggAAgdgMQgmgQgagjQgZgjgEgpQgCgJABgMQAAgOADgOQAIgiAVgbIgLADQgsAJgogPQgogOgbgiQgcgjgFgrIgBgWQAAgNADgQQADgRAHgQQgYADgZgFQgpgJgegbQgegbgNgoQgNgnAIgoQADgSAIgQIgBABQghALghgDQghgDgdgSQgegRgTgcQgWghgFgkQgfACgegKQgmgNgbggQgQgSgJgUQgSAOgVAIQguAQgxgPQgxgOgegmIgDgFQgfAcgtAIQg2AKgtgYIgRgKQgHAWgPAVQgaAlgoAQQgaAKgbABQAIAtgUAtQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgPAOIAQAMQAoAhAMAwQALAwgUAvQgFALgGAJQAbASASAdQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdAsQAeArgFA5QgFA4gkAmQgWAXgfANQgeANghgBQgmAAgjgVQgjgUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgfQgbgggIgnQgHgnANgnQAGgSAIgOQgKgHgJgJQgkghgKg0QgJgyAWgsQAOgcAXgUQgYgPgSgYQgegqACg4QADg4AjgnQAZgbAigNQgRgbgGgjQgHg0AXgsQAVgmAogWQAhgTAjgBIAAgDQgJg1AegyQAegyAzgSQAfgKAhADQAhADAcAQIAPAJQAFgOAIgOQAcgyAxgTQAwgSA0ARQAyAPAdAoQAWgUAfgLQAwgRAuAOQAuANAgApQALAOAHAQQARgNATgHQAigOAlAEQAlAEAfATQAeATATAgQARAcAEAgIAOAAQAoABAhASQAiATAVAiQAVAiACAmQADAhgNAhIgDAIIAAAAQAigMAkAEQAlAFAdATQAeAUATAfQASAgADAjQABAZgFAVQgDAQgHAOQAQgCAQACQAgAEAbAOQAbAPATAZQAUAYAIAeQAMApgMArQgIAdgSAXQAvgNAwARQAnANAbAhQAbAiAHAoQAHApgQAoIgCAEQAfAAAfANQAsATAZAmQAUAfAEAnQADAmgOAjIgBADQAhgHAjAJQAlAKAbAYQAcAZANAjQAOAjgEAlIAAABQAZABAXAKQAoAQAbAmQAaAlADArQACArgWAoQgWAogmAWQgiASgoAAIgKAAg");
	var mask_11_graphics_16 = new cjs.Graphics().p("ARQPfQgmAAgigTQgjgTgVggQgegtAGg4IACgPIgWAAQgtgDgkgZQgcgVgQgcQgTgigBgmIABgWQghgDgcgPQgigRgWggQgWghgEgmIAAgVQAAgOADgPQADgPAGgOQgdAGgfgGQgkgHgcgWQgjgbgPgrQgQgrAJgqQADgOAGgOQggABgdgNQgmgQgagjQgZgigEgpQgCgKABgMQAAgOADgNQAIghAVgbIgLACQgsAJgogOQgogPgbgjQgcgjgFgqIgBgXQAAgMADgQQADgRAHgQQgYADgZgGQgpgJgegaQgegbgNgoQgNgoAIgnQADgSAIgQIgBAAQggAMghgEQghgDgegRQgegSgTgbQgWghgFgkQgfACgegKQgmgOgbgfQgQgSgJgUQgSAOgVAHQguAQgxgOQgxgPgegmIgDgEQgfAcgtAIQg2AJgtgXIgRgLQgHAXgPAVQgaAkgoAQQgaALgbABQAIAtgUAtQgVAwgrAYQgKAGgKADQAJAOAGAPQAUA1gQAxQgKAfgWAZIgPAOIAQALQAoAiAMAvQALAwgUAwQgFALgGAKQAbASASAbQAVAhADAkQADAlgOAkIgJASQAdgCAfAJQA2AQAdAsQAeAsgFA4QgFA4gkAnQgWAXgfANQgeAMghAAQgmgBgjgUQgjgUgVghQgUghgDgoQgCgoARgkIAGgLQgiADgfgMQglgNgbggQgbgfgIgnQgHgnANgoQAGgRAIgPQgKgGgJgJQgkghgKgzQgJgzAWgtQAOgbAXgUQgYgPgSgYQgegqACg4QADg4AjgnQAZgbAigNQgRgbgGgkQgHg0AXgrQAVgnAogWQAhgSAjgBIAAgDQgJg2AegyQAegyAzgRQAfgLAhADQAhAEAcAQIAPAJQAFgOAIgPQAcgxAxgTQAwgSA0AQQAyAQAdAoQAWgUAfgLQAwgRAuANQAuAOAgAoQALAPAHAPQARgMATgIQAigNAlADQAlAEAfATQAfAUATAgQARAcAEAgIAOgBQAnABAhATQAiATAVAhQAVAiACAmQADAigNAgIgDAJIAAgBQAigMAkAFQAlAEAdAUQAeATATAgQASAgADAjQABAYgFAWQgDAQgHAOQAQgCAQACQAgADAbAPQAbAOATAZQAUAZAIAdQAMApgMArQgIAegSAXQAvgNAwAQQAnAOAbAiQAbAhAHAoQAHAogQAoIgCAEQAfAAAfANQAsATAZAmQAUAfAEAnQADAngOAiIgBADQAhgGAjAJQAlAJAbAZQAcAYANAkQAOAjgEAkIAAACQAZABAXAJQAoARAbAlQAaAlADAsQABAVgFAUQAggDAdAJQAhALAaAYQAZAYANAgQAOAjgFAoQgFAngVAfQgWAfgiASQgiARglAAIgCAAg");
	var mask_11_graphics_17 = new cjs.Graphics().p("ARvQlQglgQgYgeQgeglgDgvIAAgVIAAgDQgNACgNAAQgmAAgigTQgjgTgVggQgegtAGg4IACgPIgWAAQgtgDgkgZQgcgVgQgcQgTgigBgmIABgWQghgDgcgPQgigRgWggQgWghgEgmIAAgVQAAgOADgPQADgPAGgOQgdAGgfgGQgkgHgcgWQgjgbgPgrQgQgrAJgqQADgPAGgNQggABgdgNQgmgQgagjQgZgigEgoQgCgKABgMQAAgOADgNQAHgiAWgbIgLACQgsAJgogOQgogPgbgjQgcgjgFgqIgBgXQAAgMADgQQADgRAHgQQgYACgZgFQgpgJgdgaQgegbgNgoQgNgoAIgnQADgSAIgQIgBAAQghAMghgEQghgDgegRQgegSgTgbQgXghgEgkQggACgdgKQgmgOgbgfQgQgSgJgUQgSANgVAIQguAQgxgOQgxgPgegmIgDgEQgfAcgtAIQg2AJgtgXIgRgLQgHAXgPAVQgaAkgoAQQgaALgbABQAIAtgUAtQgVAwgrAYQgKAGgKADQAIAOAHAPQAUA1gQAxQgKAfgWAZIgPAOIAQALQAoAiAMAvQALAwgUAwQgFALgGAKQAbASASAcQAVAhADAjQADAlgOAkIgJASQAdgDAfAKQA2AQAdAsQAeAsgFA4QgFA4gkAnQgWAXgfANQgeAMghAAQgmgBgjgUQgjgUgVghQgUghgDgoQgCgoARgkIAGgLQgiADgfgMQglgNgbggQgbgfgIgnQgHgnANgnQAFgRAJgPQgKgGgJgJQgkgigKgzQgJgzAWgtQANgcAYgTQgZgPgRgYQgegqACg4QADg4AjgnQAZgcAigMQgSgcgFgjQgHg0AXgrQAVgnAogWQAggSAkgBIAAgDQgJg2AegyQAegyAzgRQAfgLAhADQAhAEAcAQIAPAJQAEgOAJgPQAcgxAxgTQAwgSA0AQQAyAQAdAoQAWgUAfgLQAwgRAuANQAuAOAgAoQALAPAHAPQARgMATgIQAigNAlADQAlAEAfATQAfAUATAgQARAcAEAgIAOgBQAoABAhATQAiATAUAhQAVAiACAmQADAigNAgIgDAJIAAgBQAigMAkAFQAlAEAdAUQAeATATAgQASAgADAjQABAYgFAWQgEAQgGAOQAPgCARACQAgADAbAPQAbAOATAZQAUAZAIAdQAMApgMArQgIAegSAXQAvgNAwAQQAnAOAbAiQAbAhAHApQAHAogQAnIgCAEQAfAAAfANQAsATAZAmQAUAfAEAnQADAngOAiIgBADQAhgGAjAJQAlAJAbAZQAcAYANAkQAOAjgEAkIAAACQAYABAYAJQAoARAbAlQAaAlADAsQABAVgFAUQAggDAdAJQAhALAaAYQAZAYANAgQAMAggDAkQAQgDARABQAmACAiAVQAjAVATAhQATAiABAoQACAogSAiQgRAjghAWQgiAXgmAEIgQABQgfAAgdgNg");
	var mask_11_graphics_18 = new cjs.Graphics().p("ATRR3QgpgOgcgkQgcgjgFgsIgBgVIgJABQgmAEglgPQglgQgYgeQgeglgDgvIAAgWIAAgCQgNACgOAAQgmgBgigSQgigTgVggQgeguAFg4IADgPIgWAAQgugDgjgZQgdgUgQgdQgSgigCgmIACgWQghgCgdgPQghgRgWghQgWgggEgmIgBgWQAAgOADgOQADgPAGgOQgdAGgegHQglgHgcgWQgigagQgrQgQgrAKgrQADgOAGgNQggAAgegMQgmgQgZgiQgagjgEgpQgBgJABgMQAAgOADgOQAHghAWgcIgMADQgsAJgngPQgogOgcgjQgagjgFgrIgBgWQAAgNACgQQADgRAHgPQgXACgZgFQgpgJgegbQgegbgNgoQgOgnAIgoQAEgRAIgRIgCABQggALgigDQghgDgegSQgegRgTgcQgWgggEglQggADgegLQgmgNgbggQgPgRgJgUQgSANgWAIQgtAQgxgPQgygOgdgmIgEgFQgfAcgtAIQg1AKgtgYIgRgKQgIAXgPAUQgaAlgoAQQgZALgbAAQAIAtgUAtQgWAwgrAZQgJAFgKAEQAIANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAQAMQAoAhALAwQAMAwgVAwQgEALgGAKQAbASASAcQAUAgAEAlQADAlgPAiIgIASQAcgCAfAJQA2ARAeAsQAdArgEA5QgFA4glAmQgWAXgeANQgfANgggBQgnAAgjgVQgjgUgUghQgVghgCgoQgCgoAQgjIAHgMQgiADgfgLQgmgOgbgfQgbgggHgmQgIgnANgnQAGgRAJgPQgKgHgKgJQgkghgJg0QgJgzAVgsQAOgcAYgUQgZgPgRgYQgfgqADg4QADg4AjgnQAYgbAjgNQgSgbgFgjQgIg0AYgsQAUgmAogWQAhgSAkgCIgBgDQgJg1AegyQAegyA0gSQAegKAiADQAhADAcAQIAOAKQAFgPAIgOQAcgyAygTQAvgSA0ARQAyAPAdApQAWgUAfgMQAwgRAvAOQAuANAfApQAMAOAHAQQAQgNAUgHQAhgOAmAEQAlAEAfATQAeATAUAgQAQAdAFAfIAOAAQAnABAiASQAhATAVAiQAWAiACAmQACAhgMAhIgDAIIAAAAQAhgMAkAEQAkAFAeATQAdAUATAfQATAgACAjQACAZgFAVQgEAQgHAPQAQgCARABQAfAEAbAOQAbAPAUAZQAUAYAIAeQALApgLArQgJAegRAXQAvgOAwARQAmAOAcAhQAbAiAHAoQAGApgQAoIgBAEQAfAAAfANQAsATAYAlQAVAfADAnQAEAmgOAjIgBADQAhgGAiAIQAlAKAcAYQAbAZAOAjQAOAjgEAlIAAABQAYACAXAJQAoAQAbAmQAbAlACArQABAVgEAUQAggDAdAKQAgAKAaAZQAaAYAMAgQANAggDAkQAQgDAQABQAnACAiAVQAiAUAUAiQATAhABAoIAAAJQAVgEAVADQArAFAjAcQAkAdAOApQAOApgKAsQgKAsgeAfQgfAfgsAKQgSAEgSAAQgZAAgZgJg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AUwSgQgngNgcggQgOgQgJgSIgMAEQgtAKgpgPQgpgOgcgkQgcgjgFgsIgBgVIgJABQgmAEglgPQglgQgYgeQgeglgDgvIAAgWIAAgCQgNACgOAAQgmgBgigSQgigTgVggQgeguAFg4IADgPIgWAAQgugDgjgZQgdgUgQgdQgSgigCgmIABgWQgggCgdgPQghgRgWghQgWgggEgmIgBgWQAAgOADgOQADgPAGgOQgdAFgegGQglgHgcgWQgigagQgrQgQgrAKgrQADgOAGgNQggAAgegLQgmgQgZgjQgagjgEgpQgBgJABgMQAAgOADgOQAHghAVgcIgLADQgsAJgmgPQgogOgcgjQgbgjgFgrIgBgWQAAgNACgQQADgRAIgQQgYADgZgFQgpgJgegbQgegbgNgoQgOgnAIgoQAEgSAHgQIgBABQggALgigDQghgDgegSQgegRgTgcQgWghgEgkQggACgegKQgmgNgbggQgPgSgKgUQgRAOgWAIQgtAQgxgPQgygOgdgmIgEgFQgfAcgtAIQg1AKgtgYIgSgKQgHAWgPAVQgaAlgoAQQgZAKgcABQAJAtgUAtQgWAwgrAZQgJAFgKAEQAIANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAQAMQAoAhALAwQAMAwgVAwQgEALgGAJQAbASASAdQAUAgAEAlQADAlgPAjIgJASQAdgCAfAJQA2AQAeAsQAdArgEA5QgFA4glAmQgWAXgeANQgfANgggBQgnAAgjgVQgjgUgUghQgVghgCgoQgCgoAQgjIAGgMQghADgfgLQgmgOgbgfQgbgfgHgnQgIgnANgnQAGgSAJgOQgKgHgKgJQgkghgJg0QgJgzAVgsQAOgcAYgUQgZgPgRgYQgfgqADg4QADg4AjgnQAYgbAjgNQgSgbgFgjQgIg0AYgsQAUgmAogWQAhgTAkgBIgBgDQgJg1AegyQAegyA0gSQAegKAiADQAhADAcAQIAOAJQAFgOAIgOQAcgyAygTQAvgSA0ARQAyAPAdAoQAWgUAfgLQAwgRAvAOQAuANAfApQAMAOAHAQQAQgNAUgHQAhgOAmAEQAlAEAfATQAeATAUAgQAQAcAEAgIAPAAQAnABAiASQAhATAVAiQAWAiACAmQACAhgMAhIgEAIIABAAQAhgMAlAEQAkAFAeATQAcAUATAfQATAgACAjQACAZgFAVQgEAQgHAOQAQgBARABQAfAEAbAOQAbAPAUAZQAUAYAIAeQALApgLArQgJAdgRAXQAvgNAwARQAmAOAcAhQAbAiAHAoQAGApgQAoIgCAEQAgAAAfANQAsATAYAmQAVAeADAnQAEAmgOAjIgCADQAigHAiAJQAlAKAcAYQAbAZAOAjQAOAjgEAlIgBABQAZABAXAKQAoAQAbAmQAbAlACArQABAVgEAUQAggDAdAKQAgAKAaAZQAaAYAMAgQANAggDAjQAQgCAQABQAnACAiAVQAiAUAUAiQATAhABAoIAAAJQAVgEAVADQArAFAjAcQAcAWAOAdQAdgJAfADQAlADAfASQAfATAUAgQAUAgADAkQADAkgOAjQgNAigbAYQgfAbgpAJQgRADgRAAQgYAAgWgHg");
	var mask_11_graphics_20 = new cjs.Graphics().p("AWgSuQgpgJgggeIgDgDQgXAPgeAGQgpAJgngNQgmgNgcggQgOgQgJgRIgNADQgsAKgpgPQgpgOgdgkQgcgjgFgsIgBgVIgIABQgnAEglgPQglgQgYgeQgeglgDgvIAAgWIABgCQgOACgNAAQgmgBgigSQgjgTgVggQgeguAGg4IACgPIgWAAQgtgDgkgZQgcgUgQgdQgTgigBgmIABgWQgggCgdgPQgigRgWghQgWgggEgmIAAgWQAAgOADgOQADgPAGgOQgdAGgfgHQgkgHgcgWQgjgagPgrQgQgrAJgrQAEgOAGgMQghAAgdgMQgmgQgZgjQgZgjgEgpQgCgJABgMQAAgOADgOQAIghAVgcIgLADQgsAJgogPQgogOgbgjQgcgjgFgrIgBgWQAAgNADgQQADgRAHgPQgYACgZgFQgpgJgegbQgegbgNgoQgNgnAIgoQAEgRAHgRIgBABQghALghgDQghgDgegSQgegRgTgcQgWghgEgkQggADgegLQgmgNgbggQgQgRgJgUQgSANgVAIQguAQgxgPQgxgOgegmIgDgFQgfAcgtAIQg2AKgtgYIgRgKQgHAXgPAUQgaAlgoAQQgZAKgcABQAJAtgVAtQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAPAMQAoAhAMAwQALAwgUAwQgFALgGAKQAbASASAcQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdArQAeArgFA5QgFA4gkAmQgWAXgfANQgeANghgBQgmAAgjgVQgjgUgVghQgUghgDgoQgCgoARgjIAGgMQghADgggLQglgOgbgeQgbgggIgnQgHgnANgnQAGgRAJgPQgLgHgJgJQgkghgKg0QgJgzAWgsQAOgcAYgUQgZgPgSgYQgegqACg4QADg4AjgnQAZgbAjgNQgSgbgGgjQgHg0AXgsQAVgmAogWQAhgSAjgCIAAgDQgJg1AegyQAegyAzgSQAfgKAhADQAhADAcAQIAPAKQAFgPAIgOQAcgyAxgTQAwgSA0ARQAyAPAdApQAWgVAfgLQAwgRAuAOQAuANAgApQALAOAIAQQAQgNATgHQAigOAlAEQAlAEAfATQAfATATAgQARAcAEAgIAOAAQAoABAhASQAiATAVAiQAVAiACAmQADAhgNAhIgDAIIAAAAQAigMAkAEQAlAFAdATQAeAUATAfQASAgADAjQABAZgFAVQgDAQgHAPQAQgCAQABQAgAEAaAOQAbAPATAZQAUAYAIAeQAMApgMArQgIAegRAXQAvgOAvARQAnAOAbAhQAbAiAHAoQAHApgQAoIgCAEQAfAAAfANQAsATAZAmQAUAeAEAnQADAmgOAjIgBADQAhgHAjAJQAlAKAbAYQAcAZANAjQAOAjgEAlIAAABQAZACAXAJQAoAQAbAmQAaAlADArQABAVgEAUQAfgDAdAKQAhAKAaAZQAZAYANAgQANAggDAkQAQgDAQABQAmACAiAVQAjAUATAiQATAhABAoIAAAJQAVgEAVADQArAFAkAcQAcAWAOAeQAdgKAeADQAmADAeASQARAKANAOIAPgIQAogTAqADQAqAEAjAaQAkAaAQAnQAQAngGAsQgHAsgbAgQgbAggqAOQgZAJgZAAQgQAAgRgEg");
	var mask_11_graphics_21 = new cjs.Graphics().p("AVuSuQgpgJgggeIgDgDQgYAPgdAGQgpAJgngNQgmgNgcggQgOgQgJgRIgNADQgsAKgpgPQgpgOgdgkQgcgjgFgsIgBgVIgIABQgnAEglgPQglgQgYgeQgeglgDgvIAAgWIABgCQgOACgNAAQgmgBgigSQgjgTgVggQgeguAGg4IACgPIgWAAQgtgDgkgZQgcgUgQgdQgTgigBgmIABgWQghgCgcgPQgigRgWghQgWgggEgmIAAgWQAAgOADgOQADgPAGgOQgdAGgfgHQgkgHgcgWQgjgagPgrQgQgrAJgrQAEgOAGgMQghAAgdgMQglgQgagjQgZgjgEgpQgCgJABgMQAAgOADgOQAIghAVgcIgLADQgsAJgogPQgogOgbgjQgcgjgFgrIgBgWQAAgNADgQQADgRAHgPQgYACgZgFQgpgJgegbQgegbgNgoQgNgnAIgoQADgRAIgRIgBABQghALghgDQghgDgegSQgegRgTgcQgWghgEgkQggADgegLQgmgNgbggQgQgRgJgUQgSANgVAIQguAQgxgPQgxgOgegmIgDgFQgfAcgtAIQg2AKgtgYIgRgKQgHAXgPAUQgaAlgoAQQgaAKgbABQAIAtgUAtQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAPAMQAoAhAMAwQALAwgUAwQgFALgGAKQAbASASAcQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdArQAeArgFA5QgFA4gkAmQgWAXgfANQgeANghgBQgmAAgjgVQgjgUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgeQgbgggIgnQgHgnANgnQAGgRAJgPQgLgHgJgJQgkghgKg0QgJgzAWgsQAOgcAYgUQgZgPgSgYQgegqACg4QADg4AjgnQAZgbAjgNQgSgbgGgjQgHg0AXgsQAVgmAogWQAhgSAjgCIAAgDQgJg1AegyQAegyAzgSQAfgKAhADQAhADAcAQIAPAKQAFgPAIgOQAcgyAxgTQAwgSA0ARQAyAPAdApQAWgVAfgLQAwgRAuAOQAuANAgApQALAOAIAQQAQgNATgHQAigOAlAEQAlAEAfATQAfATATAgQARAcAEAgIAOAAQAoABAhASQAiATAVAiQAVAiACAmQADAhgNAhIgDAIIAAAAQAigMAkAEQAlAFAdATQAeAUATAfQASAgADAjQABAZgFAVQgDAQgHAPQAQgCAQABQAgAEAbAOQAaAPATAZQAUAYAIAeQAMApgMArQgIAegRAXQAvgOAvARQAnAOAbAhQAbAiAHAoQAHApgQAoIgCAEQAfAAAfANQAsATAZAmQAUAeAEAnQADAmgOAjIgBADQAhgHAjAJQAlAKAbAYQAcAZANAjQAOAjgEAlIAAABQAZACAXAJQAoAQAbAmQAaAlADArQABAVgEAUQAfgDAdAKQAhAKAaAZQAZAYANAgQANAggDAkQAPgDARABQAmACAiAVQAjAUATAiQATAhABAoIAAAJQAVgEAVADQArAFAkAcQAbAWAPAeQAdgKAeADQAmADAeASQARAKANAOIAPgIIAPgGIgBgRQABgSACgJQAFgfAUgbQAWggAkgRQAkgSAmABQAnACAiAVQAjAUATAhQAUAiACAoQABAogRAiQgRAjghAXQgRALgSAHQACASgDASQgHAsgbAgQgbAggqAOQgZAJgZAAQgQAAgRgEg");
	var mask_11_graphics_22 = new cjs.Graphics().p("AVuSuQgpgJgggeIgDgDQgYAPgdAGQgpAJgngNQgmgNgcggQgOgQgJgRIgNADQgsAKgpgPQgpgOgdgkQgcgjgFgsIgBgVIgIABQgnAEglgPQglgQgYgeQgeglgDgvIAAgWIABgCQgOACgNAAQgmgBgigSQgjgTgVggQgeguAGg4IACgPIgWAAQgtgDgkgZQgcgUgQgdQgTgigBgmIABgWQghgCgcgPQgigRgWghQgWgggEgmIAAgWQAAgOADgOQADgPAGgOQgdAGgfgHQgkgHgcgWQgjgagPgrQgQgrAJgrQAEgOAGgMQghAAgdgMQglgQgagjQgZgjgEgpQgCgJABgMQAAgOADgOQAIghAVgcIgLADQgsAJgogPQgogOgbgjQgcgjgFgrIgBgWQAAgNADgQQADgRAHgPQgYACgZgFQgpgJgegbQgegbgNgoQgNgnAIgoQADgRAIgRIgBABQghALghgDQghgDgegSQgegRgTgcQgWghgEgkQggADgegLQgmgNgbggQgQgRgJgUQgSANgVAIQguAQgxgPQgxgOgegmIgDgFQgfAcgtAIQg2AKgtgYIgRgKQgHAXgPAUQgaAlgoAQQgaAKgbABQAIAtgUAtQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAPAMQAoAhAMAwQALAwgUAwQgFALgGAKQAbASASAcQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdArQAeArgFA5QgFA4gkAmQgWAXgfANQgeANghgBQgmAAgjgVQgjgUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgeQgbgggIgnQgHgnANgnQAGgRAJgPQgLgHgJgJQgkghgKg0QgJgzAWgsQAOgcAYgUQgZgPgSgYQgegqACg4QADg4AjgnQAZgbAjgNQgSgbgGgjQgHg0AXgsQAVgmAogWQAhgSAjgCIAAgDQgJg1AegyQAegyAzgSQAfgKAhADQAhADAcAQIAPAKQAFgPAIgOQAcgyAxgTQAwgSA0ARQAyAPAdApQAWgVAfgLQAwgRAuAOQAuANAgApQALAOAIAQQAQgNATgHQAigOAlAEQAlAEAfATQAfATATAgQARAcAEAgIAOAAQAoABAhASQAiATAVAiQAVAiACAmQADAhgNAhIgDAIIAAAAQAigMAkAEQAlAFAdATQAeAUATAfQASAgADAjQABAZgFAVQgDAQgHAPQAQgCAQABQAgAEAbAOQAaAPATAZQAUAYAIAeQAMApgMArQgIAegRAXQAvgOAvARQAnAOAbAhQAbAiAHAoQAHApgQAoIgCAEQAfAAAfANQAsATAZAmQAUAeAEAnQADAmgOAjIgBADQAhgHAjAJQAlAKAbAYQAcAZANAjQAOAjgEAlIAAABQAZACAXAJQAoAQAbAmQAaAlADArQABAVgEAUQAfgDAdAKQAhAKAaAZQAZAYANAgQANAggDAkQAPgDARABQAmACAiAVQAjAUATAiQATAhABAoIAAAJQAVgEAVADQArAFAkAcQAbAWAPAeQAdgKAeADQAmADAeASQARAKANAOIAPgIIAPgGIgBgRQABgSACgJQACgOAGgNIgDgCQglgagRgoQgJgXgCgYQgBgRABgOQADgSAGgSQAPgoAkgbQAjgcArgEQAqgFApAUQAoATAXAkQAXAkABAsQABAhgLAcQAdAUARAdQAUAiACAoQABAogRAiQgRAjghAXQgRALgSAHQACASgDASQgHAsgbAgQgbAggqAOQgZAJgZAAQgQAAgRgEg");
	var mask_11_graphics_23 = new cjs.Graphics().p("AVuSuQgpgJgggeIgDgDQgYAPgdAGQgpAJgngNQgmgNgcggQgOgQgJgRIgNADQgsAKgpgPQgpgOgdgkQgcgjgFgsIgBgVIgIABQgnAEglgPQglgQgYgeQgeglgDgvIAAgWIABgCQgOACgNAAQgmgBgigSQgjgTgVggQgeguAGg4IACgPIgWAAQgtgDgkgZQgcgUgQgdQgTgigBgmIABgWQghgCgcgPQgigRgWghQgWgggEgmIAAgWQAAgOADgOQADgPAGgOQgdAGgfgHQgkgHgcgWQgjgagPgrQgQgrAJgrQAEgOAGgMQghAAgdgMQglgQgagjQgZgjgEgpQgCgJABgMQAAgOADgOQAIghAVgcIgLADQgsAJgogPQgogOgbgjQgcgjgFgrIgBgWQAAgNADgQQADgRAHgPQgYACgZgFQgpgJgegbQgegbgNgoQgNgnAIgoQADgRAIgRIgBABQghALghgDQghgDgegSQgegRgTgcQgWghgEgkQggADgegLQgmgNgbggQgQgRgJgUQgSANgVAIQguAQgxgPQgxgOgegmIgDgFQgfAcgtAIQg2AKgtgYIgRgKQgHAXgPAUQgaAlgoAQQgaAKgbABQAIAtgUAtQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAPAMQAoAhAMAwQALAwgUAwQgFALgGAKQAbASASAcQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdArQAeArgFA5QgFA4gkAmQgWAXgfANQgeANghgBQgmAAgjgVQgjgUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgeQgbgggIgnQgHgnANgnQAGgRAJgPQgLgHgJgJQgkghgKg0QgJgzAWgsQAOgcAYgUQgZgPgSgYQgegqACg4QADg4AjgnQAZgbAjgNQgSgbgGgjQgHg0AXgsQAVgmAogWQAhgSAjgCIAAgDQgJg1AegyQAegyAzgSQAfgKAhADQAhADAcAQIAPAKQAFgPAIgOQAcgyAxgTQAwgSA0ARQAyAPAdApQAWgVAfgLQAwgRAuAOQAuANAgApQALAOAIAQQAQgNATgHQAigOAlAEQAlAEAfATQAfATATAgQARAcAEAgIAOAAQAoABAhASQAiATAVAiQAVAiACAmQADAhgNAhIgDAIIAAAAQAigMAkAEQAlAFAdATQAeAUATAfQASAgADAjQABAZgFAVQgDAQgHAPQAQgCAQABQAgAEAbAOQAaAPATAZQAUAYAIAeQAMApgMArQgIAegRAXQAvgOAvARQAnAOAbAhQAbAiAHAoQAHApgQAoIgCAEQAfAAAfANQAsATAZAmQAUAeAEAnQADAmgOAjIgBADQAhgHAjAJQAlAKAbAYQAcAZANAjQAOAjgEAlIAAABQAZACAXAJQAoAQAbAmQAaAlADArQABAVgEAUQAfgDAdAKQAhAKAaAZQAZAYANAgQANAggDAkQAPgDARABQAmACAiAVQAjAUATAiQATAhABAoIAAAJQAVgEAVADQArAFAkAcQAbAWAPAeQAdgKAeADQAmADAeASQARAKANAOIAPgIIAPgGIgBgRQABgSACgJQACgOAGgNIgDgCQglgagRgoQgJgXgCgYQgBgRABgOIABgFQgMgFgMgGQgfgPgUgaQgUgbgIggQgIgiAGggQAHghAUgcQAUgcAdgRQA4gfA+ASQAkAKAcAbQAcAbAMAjQAMAjgGAmIAVAJQAoATAXAkQAXAkABAsQABAhgLAcQAdAUARAdQAUAiACAoQABAogRAiQgRAjghAXQgRALgSAHQACASgDASQgHAsgbAgQgbAggqAOQgZAJgZAAQgQAAgRgEg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AVuSuQgpgJgggeIgDgDQgYAPgdAGQgpAJgngNQgmgNgcggQgOgQgJgRIgNADQgsAKgpgPQgpgOgdgkQgcgjgFgsIgBgVIgIABQgnAEglgPQglgQgYgeQgeglgDgvIAAgWIABgCQgOACgNAAQgmgBgigSQgjgTgVggQgeguAGg4IACgPIgWAAQgtgDgkgZQgcgUgQgdQgTgigBgmIABgWQghgCgcgPQgigRgWghQgWgggEgmIAAgWQAAgOADgOQADgPAGgOQgdAGgfgHQgkgHgcgWQgjgagPgrQgQgrAJgrQAEgOAGgMQghAAgdgMQglgQgagjQgZgjgEgpQgCgJABgMQAAgOADgOQAIghAVgcIgLADQgsAJgogPQgogOgbgjQgcgjgFgrIgBgWQAAgNADgQQADgRAHgPQgYACgZgFQgpgJgegbQgegbgNgoQgNgnAIgoQADgRAIgRIgBABQghALghgDQghgDgegSQgegRgTgcQgWghgEgkQggADgegLQgmgNgbggQgQgRgJgUQgSANgVAIQguAQgxgPQgxgOgegmIgDgFQgfAcgtAIQg2AKgtgYIgRgKQgHAXgPAUQgaAlgoAQQgaAKgbABQAIAtgUAtQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAPAMQAoAhAMAwQALAwgUAwQgFALgGAKQAbASASAcQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdArQAeArgFA5QgFA4gkAmQgWAXgfANQgeANghgBQgmAAgjgVQgjgUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgeQgbgggIgnQgHgnANgnQAGgRAJgPQgLgHgJgJQgkghgKg0QgJgzAWgsQAOgcAYgUQgZgPgSgYQgegqACg4QADg4AjgnQAZgbAjgNQgSgbgGgjQgHg0AXgsQAVgmAogWQAhgSAjgCIAAgDQgJg1AegyQAegyAzgSQAfgKAhADQAhADAcAQIAPAKQAFgPAIgOQAcgyAxgTQAwgSA0ARQAyAPAdApQAWgVAfgLQAwgRAuAOQAuANAgApQALAOAIAQQAQgNATgHQAigOAlAEQAlAEAfATQAfATATAgQARAcAEAgIAOAAQAoABAhASQAiATAVAiQAVAiACAmQADAhgNAhIgDAIIAAAAQAigMAkAEQAlAFAdATQAeAUATAfQASAgADAjQABAZgFAVQgDAQgHAPQAQgCAQABQAgAEAbAOQAaAPATAZQAUAYAIAeQAMApgMArQgIAegRAXQAvgOAvARQAnAOAbAhQAbAiAHAoQAHApgQAoIgCAEQAfAAAfANQAsATAZAmQAUAeAEAnQADAmgOAjIgBADQAhgHAjAJQAlAKAbAYQAcAZANAjQAOAjgEAlIAAABQAZACAXAJQAoAQAbAmQAaAlADArQABAVgEAUQAfgDAdAKQAhAKAaAZQAZAYANAgQANAggDAkQAPgDARABQAmACAiAVQAjAUATAiQATAhABAoIAAAJQAVgEAVADQArAFAkAcQAbAWAPAeQAdgKAeADQAmADAeASQARAKANAOIAPgIIAPgGIgBgRQABgSACgJQACgOAGgNIgDgCQglgagRgoQgJgXgCgYQgBgRABgOIABgFQgMgFgMgGQgfgPgUgaQgUgbgIggQgHgeAEgcQgqgLgfgfQgcgegKgkQgEgSgBgWQAAgRADgRQAFgeATgcQAYgiAogRQAngSApAFQAqAFAiAaQAiAaAQAmQAQAngHAqIAFABQAkAKAcAbQAcAbAMAjQAMAjgGAmIAVAJQAoATAXAkQAXAkABAsQABAhgLAcQAdAUARAdQAUAiACAoQABAogRAiQgRAjghAXQgRALgSAHQACASgDASQgHAsgbAgQgbAggqAOQgZAJgZAAQgQAAgRgEg");
	var mask_11_graphics_25 = new cjs.Graphics().p("AVuSuQgpgJgggeIgDgDQgYAPgdAGQgpAJgngNQgmgNgcggQgOgQgJgRIgNADQgsAKgpgPQgpgOgdgkQgcgjgFgsIgBgVIgIABQgnAEglgPQglgQgYgeQgeglgDgvIAAgWIABgCQgOACgNAAQgmgBgigSQgjgTgVggQgeguAGg4IACgPIgWAAQgtgDgkgZQgcgUgQgdQgTgigBgmIABgWQghgCgcgPQgigRgWghQgWgggEgmIAAgWQAAgOADgOQADgPAGgOQgdAGgfgHQgkgHgcgWQgjgagPgrQgQgrAJgrQAEgOAGgMQghAAgdgMQglgQgagjQgZgjgEgpQgCgJABgMQAAgOADgOQAIghAVgcIgLADQgsAJgogPQgogOgbgjQgcgjgFgrIgBgWQAAgNADgQQADgRAHgPQgYACgZgFQgpgJgegbQgegbgNgoQgNgnAIgoQADgRAIgRIgBABQghALghgDQghgDgegSQgegRgTgcQgWghgEgkQggADgegLQgmgNgbggQgQgRgJgUQgSANgVAIQguAQgxgPQgxgOgegmIgDgFQgfAcgtAIQg2AKgtgYIgRgKQgHAXgPAUQgaAlgoAQQgaAKgbABQAIAtgUAtQgVAwgrAZQgKAFgKAEQAJANAGAQQAUA0gQAyQgKAfgWAYIgOAOIAPAMQAoAhAMAwQALAwgUAwQgFALgGAKQAbASASAcQAVAgADAlQADAlgOAjIgJASQAdgCAfAJQA2ARAdArQAeArgFA5QgFA4gkAmQgWAXgfANQgeANghgBQgmAAgjgVQgjgUgVghQgUghgDgoQgCgoARgjIAGgMQgiADgfgLQglgOgbgeQgbgggIgnQgHgnANgnQAGgRAJgPQgLgHgJgJQgkghgKg0QgJgzAWgsQAOgcAYgUQgZgPgSgYQgegqACg4QADg4AjgnQAZgbAjgNQgSgbgGgjQgHg0AXgsQAVgmAogWQAhgSAjgCIAAgDQgJg1AegyQAegyAzgSQAfgKAhADQAhADAcAQIAPAKQAFgPAIgOQAcgyAxgTQAwgSA0ARQAyAPAdApQAWgVAfgLQAwgRAuAOQAuANAgApQALAOAIAQQAQgNATgHQAigOAlAEQAlAEAfATQAfATATAgQARAcAEAgIAOAAQAoABAhASQAiATAVAiQAVAiACAmQADAhgNAhIgDAIIAAAAQAigMAkAEQAlAFAdATQAeAUATAfQASAgADAjQABAZgFAVQgDAQgHAPQAQgCAQABQAgAEAbAOQAaAPATAZQAUAYAIAeQAMApgMArQgIAegRAXQAvgOAvARQAnAOAbAhQAbAiAHAoQAHApgQAoIgCAEQAfAAAfANQAsATAZAmQAUAeAEAnQADAmgOAjIgBADQAhgHAjAJQAlAKAbAYQAcAZANAjQAOAjgEAlIAAABQAZACAXAJQAoAQAbAmQAaAlADArQABAVgEAUQAfgDAdAKQAhAKAaAZQAZAYANAgQANAggDAkQAPgDARABQAmACAiAVQAjAUATAiQATAhABAoIAAAJQAVgEAVADQArAFAkAcQAbAWAPAeQAdgKAeADQAmADAeASQARAKANAOIAPgIIAPgGIgBgRQABgSACgJQACgOAGgNIgDgCQglgagRgoQgJgXgCgYQgBgRABgOIABgFQgMgFgMgGQgfgPgUgaQgUgbgIggQgHgeAEgcQgqgLgfgfQgcgegKgkQgDgRgBgUQgvgBgngcQghgXgSgmQgRglADgoQADgoAXgiQAXgjAjgSQAfgPAjgBQAkAAAfAOQAgAOAXAbQAXAbAIAiQAFARAAARIANABQAqAFAiAaQAiAaAQAmQAQAngHAqIAFABQAkAKAcAbQAcAbAMAjQAMAjgGAmIAVAJQAoATAXAkQAXAkABAsQABAhgLAcQAdAUARAdQAUAiACAoQABAogRAiQgRAjghAXQgRALgSAHQACASgDASQgHAsgbAgQgbAggqAOQgZAJgZAAQgQAAgRgEg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:94.669,y:210.4728}).wait(1).to({graphics:mask_11_graphics_1,x:87.3926,y:199.0071}).wait(1).to({graphics:mask_11_graphics_2,x:85.147,y:188.5181}).wait(1).to({graphics:mask_11_graphics_3,x:84.2703,y:176.2852}).wait(1).to({graphics:mask_11_graphics_4,x:84.2703,y:164.8882}).wait(1).to({graphics:mask_11_graphics_5,x:84.5788,y:155.7926}).wait(1).to({graphics:mask_11_graphics_6,x:96.2344,y:151.9314}).wait(1).to({graphics:mask_11_graphics_7,x:107.7672,y:151.9314}).wait(1).to({graphics:mask_11_graphics_8,x:119.3839,y:151.9314}).wait(1).to({graphics:mask_11_graphics_9,x:127.6114,y:151.9314}).wait(1).to({graphics:mask_11_graphics_10,x:137.2328,y:151.9314}).wait(1).to({graphics:mask_11_graphics_11,x:145.078,y:151.9314}).wait(1).to({graphics:mask_11_graphics_12,x:153.3344,y:151.9314}).wait(1).to({graphics:mask_11_graphics_13,x:160.4505,y:151.9314}).wait(1).to({graphics:mask_11_graphics_14,x:169.035,y:159.1304}).wait(1).to({graphics:mask_11_graphics_15,x:176.1783,y:167.6937}).wait(1).to({graphics:mask_11_graphics_16,x:184.3813,y:177.0061}).wait(1).to({graphics:mask_11_graphics_17,x:193.2965,y:185.2215}).wait(1).to({graphics:mask_11_graphics_18,x:202.2239,y:193.0595}).wait(1).to({graphics:mask_11_graphics_19,x:211.5255,y:196.9895}).wait(1).to({graphics:mask_11_graphics_20,x:221.1594,y:198.0685}).wait(1).to({graphics:mask_11_graphics_21,x:226.1715,y:198.0685}).wait(1).to({graphics:mask_11_graphics_22,x:226.1715,y:198.0685}).wait(1).to({graphics:mask_11_graphics_23,x:226.1715,y:198.0685}).wait(1).to({graphics:mask_11_graphics_24,x:226.1715,y:198.0685}).wait(1).to({graphics:mask_11_graphics_25,x:226.1715,y:198.0685}).wait(96));

	// lady01
	this.instance_20 = new lib.CachedBmp_18();
	this.instance_20.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(121));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,153.3,1117.7,768.0999999999999);
// library properties:
lib.properties = {
	id: '0B8EB175CA7D5E46A4076C9F2ABAEE34',
	width: 474,
	height: 506,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/作業08_atlas_1.png?1701764191479", id:"作業08_atlas_1"}
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
an.compositions['0B8EB175CA7D5E46A4076C9F2ABAEE34'] = {
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