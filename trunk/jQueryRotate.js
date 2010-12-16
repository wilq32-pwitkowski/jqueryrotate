// VERSION: 1.7 LAST UPDATE: 16.12.2010
/*
 * THIS IS FREE SCRIPT BUT LEAVE THIS COMMENT IF
 * YOU WANT USE THIS CODE ON YOUR SITE
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * http://wilq32.blogspot.com
 * 
 */
/*
Description:

This is an final product of a Wilq32.PhotoEffect Snippet. Actually you can
 use this simple and tiny script to get effect of rotated images directly 
 from client side (for ex. user generated content), and animate them using
 own functions. 


Notices:

Include script after including main jQuery. Whole plugin uses jQuery
namespace and should be compatible with older version (unchecked). 

Usage:

jQuery(imgElement).rotate(angleValue)
jQuery(imgElement).rotate(parameters)
jQuery(imgElement).rotateAnimation(parameters)
jQuery(imgElement).rotateAnimation(parameters)



Returns:

jQueryRotateElement - !!! NOTICE !!! function return rotateElement
instance to help connect events with actually created 'rotation' element.

Parameters:

    ({angle:angleValue,
     [animateAngle:animateAngleValue],
	 [easing:easingFunction],
	 [duration:durationValue],
     !!! DEPRECATED !!!    [maxAngle:maxAngleValue],
     !!! DEPRECATED !!!    [minAngle:minAngleValue],
     [callback:callbackFunction],
	 [animatedGif:animatedGifBoolean],
     [bind:[{event: function},{event:function} ] })
jQuery(imgElement).rotateAnimation

Where:

- angleValue - clockwise rotation given in degrees,
- [animateAngleValue] - optional parameter, animate rotating into this value,
- [easing] - optional parameter, function to control animation speed - supports native easing
             function and a jquery easing plugin, default: easeOutQuart
- [duration] - optional parameter, duration of a animation - default 1000ms 
- [maxAngleValue] - !!! DEPRECATED !!!    optional parameter, maximum angle possible for animation,
- [minAngleValue] - !!! DEPRECATED !!!    optional parameter, minimum angle possible for animation,
- [callbackFunction] - optional function to run after animation is done
- [animatedGifBoolean](boolean)  - optional set to display animated gif in firefox/chrome/safari
            !!! this might slow down browser because it need to render image again and
			again to display animation,
- [bind: [ {event: function}...] -optional parameter, list of events binded
  to newly created rotateable object

Examples:

		$(document).ready(function()
		{
			$('#image').rotate(-25);			
		});

		$(document).ready(function()
		{
			$('#image2').rotate({angle:5});	
		});

		$(document).ready(function()
		{
			var rot=$('#image3').rotate({maxAngle:25,minAngle:-55, duration:570,
			easing:$.easing.easeInOutExpo,
			bind:
				[
					{"mouseover":function(){rot[0].rotateAnimation(85);}},
					{"mouseout":function(){rot[0].rotateAnimation(-35);}}
				]
			});
		});
*/

(function($) {
var supportedCSS,styles=document.getElementsByTagName("head")[0].style,toCheck="transformProperty WebkitTransform OTransform msTransform".split(" "); //MozTransform <- firefox works slower with css!!!
for (var a=0;a<toCheck.length;a++) if (styles[toCheck[a]] !== undefined) supportedCSS = toCheck[a];
// Bad eval to preven google closure to remove it from code o_O
// After compresion replace it back to var IE = 'v' == '\v'
var IE = eval('"v"=="\v"');

jQuery.fn.extend({
ImageRotate:function(parameters)
{
	// If this element is already a Wilq32.PhotoEffect object, skip creation
	if (this.Wilq32&&this.Wilq32.PhotoEffect) return;
	// parameters might be applied to many objects - so because we use them later - a fresh instance is needed 
	var paramClone = $.extend(true, {}, parameters); 
	return (new Wilq32.PhotoEffect(this.get(0),paramClone))._temp;
},
rotate:function(parameters)
{
	if (this.length===0||typeof parameters=="undefined") return;
	if (typeof parameters=="number") parameters={angle:parameters};
	var returned=[];
	for (var i=0,i0=this.length;i<i0;i++)
	{
	    var element=this.get(i);	
		if (typeof element.Wilq32 == "undefined") 
			returned.push($($(element).ImageRotate(parameters)));
		else 
		{
			element.Wilq32.PhotoEffect._rotate(parameters.angle);
		}
	}
	return returned;
},

rotateAnimation:function(parameters)
{
	if (this.length===0||typeof parameters=="undefined") return;
	if (typeof parameters=="number") parameters={animateAngle:parameters};
	var returned=[];
	for (var i=0,i0=this.length;i<i0;i++)
	{	
	    var element=this.get(i);
		if (typeof element.Wilq32 == "undefined") 
			returned.push($($(element).ImageRotate(parameters)));
		else 
		{
			element.Wilq32.PhotoEffect.rotateAnimation(parameters);
		}
	}
	return returned;
}

});

// Library agnostic interface

Wilq32=window.Wilq32||{};
Wilq32.PhotoEffect=(function(){
	function setupParameters(img,parameters){
		this._img = img;
		this._parameters = parameters || {};
		this._parameters.angle = this._angle = parameters.angle || 0;
		this._parameters.animateAngle = typeof parameters.animateAngle=="number" ? parameters.animateAngle : this._angle;
		this._parameters.easing = parameters.easing || function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b; }
		this._parameters.duration = parameters.duration || 1000;
	}
	if (supportedCSS) {
		return function(img,parameters){
			setupParameters.call(this,img,parameters);
			img.Wilq32 = {
				PhotoEffect: this
			};
			// TODO: needed to have a _temp variable accessible outside - used for object retrieval, 
			//        needs refactor + change name (temp is not self descriptive)
			// also need better passing values between functions - to FIX (remove _temp and _img at all)
			this._temp = this._img;
			this._BindEvents(img,this._parameters.bind);
			this._rotate(this._parameters.angle);
			if (this._parameters.angle!=this._parameters.animateAngle) this.rotateAnimation(this._parameters);
		}
	} else {
		return function(img,parameters) {
			setupParameters.call(this,img,parameters);			
			// Make sure that class and id are also copied - just in case you would like to refeer to an newly created object
			this._parameters.className=img.className;
			this._parameters.id=img.getAttribute('id');

			this._temp=document.createElement('span');
			this._temp.style.display="inline-block";
			this._temp.Wilq32 = 
				{
					PhotoEffect: this
				};
			img.parentNode.insertBefore(this._temp,img);
			
			if (img.complete) {
				this._Loader();
			} else {
				var self=this;
				// TODO: Remove jQuery dependency
				jQuery(this._img).bind("load", function()
				{
					self._Loader();
				});
			}
		}
	}
})();

Wilq32.PhotoEffect.prototype={

	rotateAnimation : function(parameters){
		this._parameters.animateAngle = parameters.animateAngle;
		this._parameters.callback = parameters.callback || this._parameters.callback || function(){};	
		this._animateStart();
	},

	_BindEvents:function(element,events){
		if (events) 
		{
			for (var a in events) if (events.hasOwnProperty(a)) 
				for (var b in events[a]) if (events[a].hasOwnProperty(b)) 
				// TODO: Remove jQuery dependency
					jQuery(element).bind(b,events[a][b]);
		}
	},

	_Loader:(function()
	{
		if (IE)
		return function()
		{
			var width=this._img.width;
			var height=this._img.height;
			this._img.parentNode.removeChild(this._img);
							
			this._vimage = this.createVMLNode('image');
			this._vimage.src=this._img.src;
			this._vimage.style.height=height+"px";
			this._vimage.style.width=width+"px";
			this._vimage.style.position="absolute"; // FIXES IE PROBLEM - its only rendered if its on absolute position!
			this._vimage.style.top = "0px";
			this._vimage.style.left = "0px";

			/* Group minifying a small 1px precision problem when rotating object */
			this._container =  this.createVMLNode('group');
			this._container.style.width=width;
			this._container.style.height=height;
			this._container.style.position="absolute";
			this._container.setAttribute('coordsize',width-1+','+(height-1)); // This -1, -1 trying to fix that ugly problem
			this._container.appendChild(this._vimage);
			
			this._temp.appendChild(this._container);
			this._temp.style.position="relative"; // FIXES IE PROBLEM
			this._temp.style.width=width+"px";
			this._temp.style.height=height+"px";
			this._temp.setAttribute('id',this._parameters.id);
			this._temp.className=this._parameters.className;			
			
			this._BindEvents(this._temp,this._parameters.bind);
			_finally.call(this);
			
		}
		else
		return function ()
		{
			this._temp.setAttribute('id',this._parameters.id);
			this._temp.className=this._parameters.className;
			
			this._width=this._img.width;
			this._height=this._img.height;
			this._widthHalf=this._width/2; // used for optimisation
			this._heightHalf=this._height/2;// used for optimisation
			
			var _widthMax=Math.sqrt((this._height)*(this._height) + (this._width) * (this._width));

			this._widthAdd = _widthMax - this._width;
			this._heightAdd = _widthMax - this._height;	// widthMax because maxWidth=maxHeight
			this._widthAddHalf=this._widthAdd/2; // used for optimisation
			this._heightAddHalf=this._heightAdd/2;// used for optimisation
			
			this._img.parentNode.removeChild(this._img);	
			
			this._aspectW = ((parseInt(this._img.style.width,10)) || this._width)/this._img.width;
			this._aspectH = ((parseInt(this._img.style.height,10)) || this._height)/this._img.height;
			
			this._canvas=document.createElement('canvas');
			this._canvas.setAttribute('width',this._width);
			this._canvas.style.position="relative";
			this._canvas.style.left = -this._widthAddHalf + "px";
			this._canvas.style.top = -this._heightAddHalf + "px";
			this._canvas.Wilq32 = this._temp.Wilq32;
			
			this._temp.appendChild(this._canvas);
			this._temp.style.width=this._width+"px";
			this._temp.style.height=this._height+"px";
			
			this._BindEvents(this._canvas,this._parameters.bind);
			this._cnv=this._canvas.getContext('2d');
			_finally.call(this);
		}
		function _finally(){
			this._rotate(this._parameters.angle);
			if (this._parameters.angle!=this._parameters.animateAngle) this.rotateAnimation(this._parameters);		
		}

	})(),

	_animateStart:function()
	{	
		if (this._timer) {
			clearTimeout(this._timer);
		}
		this._animateStartTime = +new Date;
		this._animateStartAngle = this._angle;
		this._animate();
	},
	_animate:function()
	{
		var actualTime = +new Date;
		//var checkEnd = !!(Math.round(this._angle * 100 - this._parameters.animateAngle * 100)) == 0 && !!this._timer;
		var checkEnd = actualTime - this._animateStartTime > this._parameters.duration;
		if (this._parameters.callback && checkEnd){
			this._parameters.callback();
		}

		// TODO: Bug for animatedGif for static rotation ? (to test)
		if (checkEnd && !this._parameters.animatedGif) 
			{
				clearTimeout(this._timer);
			}
			else 
			{
				if (this._canvas||this._vimage||this._img) {
					// TODO: implement easing and speed of animation
					this._angle = this._parameters.easing(0, actualTime - this._animateStartTime, this._animateStartAngle, this._parameters.animateAngle - this._animateStartAngle, this._parameters.duration);
					//this._angle-=(this._angle-this._parameters.animateAngle)*0.1;
					//if (typeof this._parameters.minAngle!="undefined") this._angle=Math.max(this._angle,this._parameters.minAngle);
					//if (typeof this._parameters.maxAngle!="undefined") this._angle=Math.min(this._angle,this._parameters.maxAngle);
					this._rotate((~~(this._angle*10))/10);
				}
				var self = this;
				this._timer = setTimeout(function()
				{
					self._animate.call(self);
				}, 10);
			}
	},

	_rotate : (function()
	{
		var rad = Math.PI/180;
		if (IE)
		return function(angle)
		{
			this._container.style.rotation=angle+"deg";
		}
		else if (supportedCSS)
		return function(angle){
			this._img.style[supportedCSS]="rotate("+angle+"deg)";
		}
		else 
		return function(angle)
		{

			if (!this._img.width||typeof angle!="number") return;
			angle=(angle%360)* rad;
			// clear canvas	
			this._canvas.width = this._width+this._widthAdd;
			this._canvas.height = this._height+this._heightAdd;
						
			// REMEMBER: all drawings are read from backwards.. so first function is translate, then rotate, then translate, translate..
			this._cnv.translate(this._widthAddHalf,this._heightAddHalf);	// at least center image on screen
			this._cnv.translate(this._widthHalf,this._heightHalf);			// we move image back to its orginal 
			this._cnv.rotate(angle);										// rotate image
			this._cnv.translate(-this._widthHalf,-this._heightHalf);		// move image to its center, so we can rotate around its center
			this._cnv.scale(this._aspectW,this._aspectH); // SCALE - if needed ;)
			this._cnv.drawImage(this._img, 0, 0);							// First - we draw image
		}

	})()
}

if (IE)
{
Wilq32.PhotoEffect.prototype.createVMLNode=(function(){
document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
		try {
			!document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
			return function (tagName) {
				return document.createElement('<rvml:' + tagName + ' class="rvml">');
			};
		} catch (e) {
			return function (tagName) {
				return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
			};
		}		
})();
}

})(jQuery);