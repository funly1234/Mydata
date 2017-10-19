var tt = TweenMax.to;
var tf = TweenMax.from;
var td = TweenMax.delayedCall;
var ts = TweenMax.set;

function init(){
	ts(overlay,{opacity:0});

	animOne();
}

function animOne() {
	tt(loc_01,2,{scale:1.5,y:-56,x:0,rotationZ: 0.01,force3D:true,ease:Power1.easeInOut,delay:0,overwrite:false});
	tt(t1,.3,{opacity:1,delay:1.6,overwrite:false});

	tt(loc_01,1,{opacity:0,delay:3.2,overwrite:false});
	tt(t1,1,{opacity:0,delay:3.2,overwrite:false});

	td(4,animTwo);
}

function animTwo() {
	tt(loc_02,2,{scale:1.4,y:5,x:27,rotationZ: 0.01,force3D:true,ease:Power1.easeInOut,delay:0,overwrite:false});
	tt(t2,.3,{opacity:1,delay:1.6,overwrite:false});

	tt(loc_02,1,{opacity:0,delay:3.2,overwrite:false});
	tt(t2,1,{opacity:0,delay:3.2,overwrite:false});

	td(4,animThree);
}

function animThree(){
	tt(loc_03,2,{scale:1.7,y:-210,x:-2,rotationZ: 0.01,force3D:true,ease:Power1.easeInOut,delay:0,overwrite:false});
	tt(t3,.3,{opacity:1,delay:1.6,overwrite:false});

	tt(loc_03,1,{opacity:0,delay:3.2,overwrite:false});
	tt(t3,1,{opacity:0,delay:3.2,overwrite:false});

	td(4.7,animFour);
}

function animFour(){
	tt(logos,.3,{opacity:1,overwrite:false});

	tt(cta_container,.3,{opacity:1,ease:Power2.easeOut,delay:1,overwrite:false});

	tt(cta_txt,.5,{x:160,ease:Quad.easeOut,delay:1.5,overwrite:false});
	tt(cta_arr,.5,{x:160,ease:Quad.easeOut,delay:1.5,overwrite:false,onComplete:activateCTA});

}

function activateCTA() {
	hotspot.addEventListener("mouseover",rollOver);
	hotspot.addEventListener("mouseout",rollOut);
}

function rollOver() {
	tt(cta_arr,.3,{x:163});
}

function rollOut() {
	tt(cta_arr,.3,{x:160});
}

init();