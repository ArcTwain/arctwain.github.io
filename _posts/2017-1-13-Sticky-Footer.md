---
layout: post
title: Sticky Footer
---

Down, footer!

I've searched through endless tutorials on how to code the footer so that it "sticks" to the bottom of the browser window.

So far, this has worked for me:

<pre style="width:250px;background: #1D1F20;color: #fff; padding:20px;font-size:12px;">
html { 
    height: 100%; 
}

body {
    min-height: 100%; 
    position: relative; 
    padding-bottom: [footer-height] 
}

.footer { 
    position: absolute; 
    left: 0; 
    right: 0; 
    bottom: 0; 
    height: [footer-height] 
}
</pre>


I'm always on the lookout for a better way or a good variation.
