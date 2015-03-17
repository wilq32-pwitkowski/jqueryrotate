# [![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSU4797QV688J) #

&lt;wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adsense\_gadget.xml" width="0" height="0" border="0"/&gt;

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="35" border="0" up\_frm="adv2.html"/>

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="110" border="0" up\_frm="adv1.html"/>

# Example 1 #
Simply rotate an image
<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{angle:45}"/>
```
$("#img").rotate(45);
```

> or

```
$("#img").rotate({angle:45});
```

See live example here: http://jsfiddle.net/RwEme/

# Example 2 #
This is simple example that rotates image when user mouseover/mouseout object.

> Mouseover arrow to see effect.
<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{bind:{ mouseover:function(){$(this).rotate({animateTo:180})},mouseout:function(){ $(this).rotate({animateTo:0})}} }"/>

```

$("#img").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            $(this).rotate({animateTo:180})
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
        }
     } 
   
});
```

See live example here: http://jsfiddle.net/8LV3p/

# Example 3 #

Rotate image endlessly

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="(function(){ angle = 50; setInterval(function(){getImg(); angle+=3;$(img).rotate(angle)  },50); return 0})()"/>

```
var angle = 0;
setInterval(function(){
      angle+=3;
     $("#img").rotate(angle);
},50);
```

See live example here: http://jsfiddle.net/73pXD/

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="110" border="0" up\_frm="adv1.html"/>

Rotate image endlessly using recursive function

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="(function(){ var rotation = function (){getImg(); $(img).rotate({angle:0, animateTo:360,callback: rotation}); };rotation();  return {}})()"/>


```

var rotation = function (){
   $("#img").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation
   });
}
rotation();

```

See live example here: http://jsfiddle.net/YKj5D/

Rotate image endlessly using recursive function and custom easing (similar to example with simple endless rotation)

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="(function(){ var rotation = function (){$(this).rotate({angle:0, animateTo:360,callback: rotation, easing:function(x,t,b,c,d){ return c\*(t/d)+b} }); };rotation.call(img);  return {}})()"/>



```

var rotation = function (){
   $("#img").rotate({
      angle:0, 
      animateTo:360, 
      callback: rotation,
      easing: function (x,t,b,c,d){        // t: current time, b: begInnIng value, c: change In value, d: duration
          return c*(t/d)+b;
      }
   });
}
rotation();
```

See live example here: http://jsfiddle.net/xw89p/

# Example 4 #
Animation rotate using easing from http://gsgd.co.uk/sandbox/jquery/easing/

(remember to also include `<script>` contains easing)

> Click on arrow to see effect.

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{bind:{ click:function(){ $(this).rotate({ angle:0,animateTo:180,easing: $.easing.easeInOutExpo })} } }"/>

```

$("#img").rotate({ 
   bind: 
     { 
        click: function(){
            $(this).rotate({ angle:0,animateTo:180,easing: $.easing.easeInOutExpo })
        }
     } 
   
});
```

Live example here: http://jsfiddle.net/Qtb8Z/

# Example 5 #
Animation shows how to use variables in JavaScript...

Click on arrow to see effect.

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{bind:{ click:function(){ window.value = window.value + 90||90;$(this).rotate({ animateTo:value})} } }"/>

```

var value = 0
$("#img").rotate({ 
   bind: 
     { 
        click: function(){
            value +=90;
            $(this).rotate({ animateTo:value})
        }
     } 
   
});
```
Live example here: http://jsfiddle.net/x9ja7/
<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="35" border="0" up\_frm="adv2.html"/>
<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="110" border="0" up\_frm="adv1.html"/>