---
layout: post
title: Hide, Sally, Hide
---

Today's tip is an easy way to hide an email address from spam bots. I heard about this a long time ago but don't know the original source.

Replace 
<pre style="background:#1D1F20;color:#fff;padding:5px;width:415px">href="mailto:contact@domain.com"</pre>

with 
<pre style="background:#1D1F20;color:#fff;padding:5px;width:415px;">href="mailto:coxntact@domainx.com"
  onmouseover="this.href=this.href.replace(/x/g,'');"</pre>    

The mouseover, which also works on mobile, will delete the x. You add as many x's as you like.  You can also use a different letter as long that letter doesn't appear in your email address. 

<div style="text-align:center" markdown="1">
![Hide](/images/hide.jpg"Hide!")
</div>
