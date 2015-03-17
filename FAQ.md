&lt;wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adsense\_gadget.xml" width="0" height="0" border="0"/&gt;
### 1. I try rotate div element and it works everywhere but not in IE. ###

This plugin was mainly created to rotate images (img) elements ONLY. However it uses CSS attributes in modern browsers that will also work for div elements. That's why it works in other browsers but not IE. If you really need to rotate div you can take a look at experimental version of jQueryRotate 3. You can find it here:
http://code.google.com/p/jqueryrotate/source/browse/#svn%2Ftrunk

### 2. In IE first time image is rotated image blinks for a while. ###

This is a nasty outcome of a replacing a IMG element with VML:Image on the fly. If this issue is a problem for you, you can try call $(element).rotate(0) as soon as possible. Triggering any .rotate method will do the conversion, so you can prepare image object for later use. Thanks to alisonjo2786 there we got some example cases:

Where you can see problem:
http://jsfiddle.net/CeLNw/23/

A solution with some more nice features:
http://jsfiddle.net/CeLNw/26/

Also you can take look at http://code.google.com/p/jqueryrotate/wiki/Documentation and check alisonjo2786 comment there.

### 3. This plugin doesn't work. ###

This plugin is tested in many environments so before saying it doesn't work please first check that:
  * jQuery is included and is included before jQueryRotate,
  * jQueryRotate is included and is included after jQuery,
  * javascript code should be executed after libraries are loaded. It's also safe to do:
```
$document.ready(function(){
   /// Your code here
});
```

### 4. My event get lost after calling .rotate ###

Well unfortunately its true. Removing original element and replacing it with VML or Canvas leads to events being lost. Safest way of binding any events to object that you plan to rotate is:

```
$(element).rotate({
   bind : {
      /// here bind your events
   }
});
```


### EXTRAS ###
## Rotate within wrapper (idea sent by Dan Helyar) ##
When you're forced to rotate within wrapper and found out that its quite tricky problem, you can take look at Dan Helyar findings and some more comments here:

http://stackoverflow.com/questions/15109483/how-can-i-maintain-a-tight-wrap-around-a-css-rotated-image

And some example solution: http://jsfiddle.net/Z7VVR/8/