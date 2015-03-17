# [![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSU4797QV688J) #

&lt;wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adsense\_gadget.xml" width="0" height="0" border="0"/&gt;

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="35" border="0" up\_frm="adv2.html"/>
<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="110" border="0" up\_frm="adv1.html"/>

# rotate(angle) #

> ## angle ##
> `[Number]` - default 0 - Simply rotates given image by a given angle

> Example:
```
   $("#img").rotate(45);
```

> <wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{angle:45}"/>

# rotate(parameters) #

## parameters ##
> `[Object]` Object containing parameters for rotation. Supported attributes:

  * ### angle ###
> <p>
<blockquote><code>[Number]</code> - default 0 - Angle value in degrees of  an rotation to be executed immediately</blockquote></li></ul>

<blockquote>Example:
```
$("#img").rotate({angle:45});
```
> <wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{angle:45}"/>

> </p></blockquote>

<ul><li>### bind ###
> <p>
<blockquote><code>[Object]</code> Object containing events to bind on to a rotation object. $(this) inside events points to a rotation object - this way you can chain execution of rotations - $(this).rotate(...)</blockquote></li></ul>

<blockquote>Example (click on arrow):
```
$("#img").rotate({bind:{
      click: function(){
          $(this).rotate({
            angle: 0, 
            animateTo:180
          })
      }
  }
});
```
> <wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{bind:{click:function(){  $(this).rotate({angle: 0, animateTo:180})}}}"/>

> </p></blockquote>

<ul><li>### animateTo ###
> <p>
<blockquote><code>[Number]</code> - default 0 - Angle value in degrees of  an rotation to be animated to from current angle value (or given angle parameter)</blockquote></li></ul>

<blockquote>Example:
> See <i> bind </i> example above to see usage.

> </p></blockquote>

<ul><li>### center ###
> <p>
<blockquote><code>[Array]</code> - An array containing two values - [X, Y]. They define a center of a rotation. Numeric and percentage values are possible ([100,100], or ["50%", "50%"]). Please use values between 0>= x <= imageWidth and 0>= y <= imageHeight (percentage between 0-100%) - this is limitation of already huge canvas area.</blockquote></li></ul>

Default value is ["50%", "50%"].<br>
<br>
<blockquote>Example (click on arrow):
```
$("#img").rotate({bind:{
      click: function(){
          $(this).rotate({
            angle: 0,
            center: ["50%", "100%"], 
            animateTo:180
          })
      }
  }
});
```
> <wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="110" height="110" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{bind:{click:function(){  $(this).rotate({angle: 0, animateTo:180,center:[21,44]})}}}"/>

> </p></blockquote>

<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv_gadget.xml" width="780" height="110" border="0" up_frm="adv1.html"/><br>
<br>
<ul><li>### duration ###
> <p>
<blockquote><code>[Number]</code> - default 1000 - Specifies a duration of a animation when using animateTo action</blockquote></li></ul>

<blockquote>Example (click on arrow):
```
$("#img").rotate({bind:{
      click: function(){
          $(this).rotate({
            duration:6000,
            angle: 0, 
            animateTo:100
          })
      }
  }
});
```
> <wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{bind:{click:function(){  $(this).rotate({angle: 0, duration: 6000, animateTo:180})}}}"/>
> </p></blockquote>

<ul><li>### step ###
> <p>
<blockquote><code>[Function]</code> - default null - A function that will be executed on every animation step. As a first argument a current angle is given.</blockquote></li></ul>

<blockquote></p></blockquote>

<ul><li>### easing ###
> <p>
<blockquote><code>[Function]</code> - default (see below) - Easing function used to make animation look more natural. It takes five parameters (x,t,b,c,d) to support easing from <a href='http://gsgd.co.uk/sandbox/jquery/easing/'>http://gsgd.co.uk/sandbox/jquery/easing/</a> (for more details please see documentation at their website). Remember to include easing plugin before using it in jQueryRotate!</blockquote></li></ul>

<blockquote>Default function:
```
   function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b; }
```

> Where:
  * t: current time,
  * b: begInnIng value,
  * c: change In value,
  * d: duration,
  * x: unused

No easing (linear easing):
```
   function(x, t, b, c, d) { return b+(t/d)*c ; }
```


> Example (click on arrow):
```
$("#img").rotate({bind:{
      click: function(){
          $(this).rotate({
            angle: 0, 
            animateTo:180,
            easing: $.easing.easeInOutElastic
          })
      }
  }
});
```
> <wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{bind:{click:function(){  $(this).rotate({angle: 0, animateTo:180,easing:$.easing.easeInOutElastic})}}}"/>
> </p></blockquote>



<ul><li>### callback ###
> <p>
<blockquote><code>[Function]</code> A function to be called when animation finishes.</blockquote></li></ul>

<blockquote>Example (click on arrow):
```
$("#img").rotate({bind:{
      click: function(){
          $(this).rotate({
            angle: 0, 
            animateTo:180,
            callback: function(){   alert(1)  }
          })
      }
  }
});
```
> <wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up\_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up\_func="{bind:{click:function(){  $(this).rotate({angle: 0, animateTo:180,callback:function(){alert(1)}})}}}"/>

> </p></blockquote>

<h1>getRotateAngle</h1>

<blockquote>This function simply returns current angle of rotated object.</blockquote>

<blockquote>Example:<br>
<pre><code>   $("#img").rotate({<br>
        angle: 45, <br>
        bind: {<br>
            click : function(){<br>
               alert($(this).getRotateAngle());<br>
            }<br>
        }<br>
   });<br>
</code></pre></blockquote>

<blockquote><wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up_func="{angle:45, bind:{click:function(){  alert($(this).getRotateAngle()) }}}"/></blockquote>

<h1>stopRotate</h1>

<blockquote>This function simply stops ongoing rotate animation.</blockquote>

<blockquote>Example:<br>
<pre><code>   $("#img").rotate({<br>
        bind: {<br>
            click: function(){<br>
                      $("#img").rotate({<br>
                          angle: 0,<br>
                          animateTo: 180,<br>
                          duration: 6000<br>
                      });<br>
                      setTimeout(function(){<br>
                          $("#img").stopRotate();<br>
                      }, 1000);<br>
            }<br>
       }<br>
   });<br>
</code></pre></blockquote>

<blockquote><wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/rotate.xml" width="55" height="55" border="0" up_image="https://jqueryrotate.googlecode.com/svn/trunk/arrow.png" up_func="{bind:{click:function(){  $(this).rotate({angle: 0, animateTo:180,duration:6000}); setTimeout($.proxy(function(){$(this).stopRotate()},this),1000)}}}"/></blockquote>


See live example here: <a href='http://jsfiddle.net/xJnqM/'>http://jsfiddle.net/xJnqM/</a>



If you're interested in more examples please go here: <a href='Examples.md'>Examples</a>
<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv_gadget.xml" width="780" height="35" border="0" up_frm="adv2.html"/><br>
<wiki:gadget url="http://jqueryrotate.googlecode.com/svn/trunk/adv_gadget.xml" width="780" height="110" border="0" up_frm="adv1.html"/>