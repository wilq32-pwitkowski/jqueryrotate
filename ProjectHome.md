&lt;wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adsense\_gadget.xml" width="0" height="0" border="0"/&gt;

<wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="35" border="0" up\_frm="adv2.html"/>

<wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="110" border="0" up\_frm="adv1.html"/>

# Last release: v.2.3 11.07.2013 #

# [![](http://static-cdn.jtvnw.net/jtv_user_pictures/panel-30080787-image-f320371cd4dd6d78-320.jpeg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YSU4797QV688J) #
You can also try contact me here: http://wizpert.com/pawewitkowski

![http://jqueryrotate.googlecode.com/files/splash.jpg](http://jqueryrotate.googlecode.com/files/splash.jpg)

# [Examples](Examples.md) #
# [Documentation](Documentation.md) #
This is a small plugin for jQuery that adds a nice feature to rotate images (img html objects) by a given angle on web pages. An experimental version 3 tries to rotate all objects, but with some small issues. You can find 3rd version in [here](http://code.google.com/p/jqueryrotate/source/browse/#svn%2Ftrunk)

# Description: #

This is a simple plugin to allow you to rotate images (any angle) directly on client side (for ex. user generated content), and animate them using own functions. Main focus is to unify this behavior across different browsers.

# Supported Browsers: #
  * Internet Explorer 6.0 >
  * Firefox 2.0 >
  * Safari 3 >
  * Opera 9 >
  * Google Chrome

# Notices: #

Include script after including main jQuery. Whole plugin uses jQuery namespace and should be compatible with older version (unchecked).

Please put all issues into a ISSUES page. If you want - you can also checkout repository and path the code on your own. If you do that please send me patch so I can apply it into trunk.

# Implementation: #

To support so many old browsers there are few techniques being used:
  * For modern browsers (Safari, Chrome, Opera, IE 9) plugin uses native CSS3 attributes (-ms-transform, -transform-property, -webkit-transform, -o-transform).
  * For older browsers with CANVAS support image is being replaced by a CANVAS component that can be easily rotated using internal canvas methods,
  * For older IE browsers VML is being used,

# [Changelog](Changelog.md) #
<wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="110" border="0" up\_frm="adv1.html"/>
<wiki:gadget url="https://jqueryrotate.googlecode.com/svn/trunk/adv\_gadget.xml" width="780" height="35" border="0" up\_frm="adv2.html"/>