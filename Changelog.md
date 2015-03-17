&lt;wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adsense\_gadget.xml" width="0" height="0" border="0"/&gt;

# version 2.3 #

  * Finally added center of rotation supported in all browsers!, however not yet implemented for jQueryRotate3 version. Please check documentation wiki for usage.

  * Fixed a flow where you would call .rotate straight after first rotation, where image is not yet loaded,

  * Canvas area is now large enough to support changing of a center point. Keep in mind that this might slow down a canvas fallback. Let me know of any issues.

# version 2.2(and 3.1 of a jQueryRotate3) #

  * Added getRotateAngle function that will give you current value of rotation,

  * Added stopAnimation function that will stop ongoing animation,

  * Added step parameter - a function that will be called every time a new value of animation is being computed,

  * Remove some old code (some simplification)

# version 2.1 #

  * Uncommented support for firefox MozTransform as new version of firefox seems to handle it with better performance.

# version 2.0 #

> Because of huge change of API I've introduced new version series of jQueryRotate.

> ### API changes ###

  * no more rotateAnimation function! Now instead of typing rotateAnimation(10) you simply write rotate({animateTo:10}), this clears alot with different usages as 'angle' parameter always directly changes rotation and 'animateTo' always triggers animate rotation from current angle (or given angle),

> before:
```
  $("#image").rotateAnimation(360);
```
> or
```
  $("#image").rotateAnimation({animateAngle:360});
```
> now:
```
   $("#image").rotate({animateTo:360});
```
> NOTE! There is now no option to animate using only a integer (you have to use an object with animateTo option at least)

  * binding function now does not require an array, just an object with hash (previous concept was... just stupid):

> before:
```
  $("#image").rotate({ angle: 10, bind: [
      {
        "click":function(){}
      },
      {
        "mouseover":function(){}
      }
  ] })
```
> now:
```
  $("#image").rotate({ angle: 10, bind:
      {
        "click":function(){},
        "mouseover":function(){}
      }
    })
```

> ### Other changes ###

  * Rebinding events, now you can bind new events so old one get disconnected without anything,
  * Cleaned lot of code (smaller is better),
  * Fixed problem with recursive bind calls,
  * Thanks to Mark Hunter now last step of animation rotates to a requested value (instead of 'almost there'),
  * Removed documentation from source code as it was outdated, hard to use and maitain (use wiki project page),
  * Fixed few problems with parameter parsing/handling by changing API concept

# version 1.7: #
  * added Easing and Duration to animations,
  * fixed aspect ration for images that got different height,
  * added support for a Internet Explorer new msTransform attribute for CSS rotation

# version 1.6: #
  * refactored and reviewed code (teft some TODO's), removed lot of unused code,
  * increased performance for firefox,
  * hopefully fixed IE problem with positioning (1px difference that is visible especially for very small images),
  * fixed problem when setting an angle and it animates to angle 0 (instead of staying in place)
  * compressed size down from 7kb to 5kb,

# version 1.5: #
  * fixed problem with setting animateAngle on first rotation
  * fixed problem with animating image immediately on document ready

# version 1.4: #
  * Added css rotation for supported browsers (except firefox that runs slower than on canvas and IE - slower too),
  * By adding css rotation - fixed bug with new Chrome and Safari that does not clears whole space when animate,
  * dropped support for "preservePosition" -> from now on canvas will always have same height and width as image,
  * minor style code changes,

# version 1.3: #
  * Added "preservePosition" attribute to make rotated images appear in the same position as they would be normal images.

# version 1.2: #
  * Endless loading problem (second issue) finally fixed!.

# version 1.1: #
  * Finally fixed setting v:image and namespacing for IE - now you dont need to do anything more than just including script on page!.

# version 1.0: #
  * Fixed endless loading problem for IE and fixed a reference for 'this' in binding functions. Now $(this) in binding function refers to an object that you can rotate again.

# version < 1: #
  * Fixed problem for a jQuery namespacing (Thanks to Régis Gaillard) and fixed issue with using same parameters globally for all items.
  * Added a support for animated gifs, now you can specify if you want to support them. Notice that this might slow down a bit other things on page because it needs to render images all the time. Use it if you really need it.
  * Fixed bug with IE introduced by last version
  * Fixed problem of document.ready animations for images
  * Fixed annoying bug in IE 8 in creation of elements
  * Whole new concept for IE - instead of using canvas itself - right now function uses a nice workaround using vml:image to rotate it faster. All of you involved please do some test with this!.
  * Repaired some small bug - now you can rotate all elements like $(".images").
  * Solved some problems with calling rotation again on the same object, now $("#element").rotate(angle) and .rotateAnimation(angle) and everything related returns proper reference to newly created object.
  * Added callback functionality
  * Repaired bug with IE
  * Repaired bug with some statical rotating problem,
  * Main relase,