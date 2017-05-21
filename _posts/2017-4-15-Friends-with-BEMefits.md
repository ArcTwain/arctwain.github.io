---
layout: post
comments: true
title: Friends With BEMefits
---

## What is BEM?
BEM (which stands for Block-Element-Modifier) is a CSS methodology that aims to make the relationship between HTML and CSS clearer. With BEM, CSS selectors target elements directly with classes instead of relying on type selectors, descendant selectors, and the cascade. Since the cascade becomes limited, there is more free freedom to move blocks around and reuse them throughout the page.

## What does BEM's structure look like?

The first step to creating a BEM structure is to identify each block that "encapsulates a standalone entity that is meaningful on its own."  Headers, footers, sidebars, and content areas are all modular blocks that can have their own elements. BEM naming relies on classes exclusively because ID's are not reusable.  For example, a section of the body might have a class called "wrapper."

The second step is to consider each element inside the block.  The element name is its parent's class name followed by two underscores and the name of the element.  For example, "wrapper" might have an element with class "wrapper__title" and another with class "wrapper__description." 

Finally, modifier classes indicate alternate versions of either blocks or elements. Modifiers take the name of a block or block and element combination followed by two dashes, then a name assigned to the change. For example, adding a class named "wrapper--blue" or "wrapper__title--blue" might indicate the addition of a blue background.

In summary, official BEM naming follows these rules: 

{% highlight css %}
    .block {}
		.block__element {}
    .block--modifier {}
    .block__element--modifier {}
{% endhighlight %}

## How can BEM make things easier with Sass and other preprocessors?

Because of BEM's naming rules, nesting becomes easier.  An element is always part of a block, and modifiers can be part of either a block or element.

Here's an example of nesting in a preprocessor:

{% highlight css %}
    .wrapper {
        ...

        &__title {
            ...

            &--blue {
                ...
            }
        }
    }
{% endhighlight %}

BEM makes it easier to revisit a project months or even a year later and be able to recognize, identify, and modify styles; it helps eliminate confusion, spaghetti code, and unnecessary !important declarations.  However, despite its selling points not everyone is on board with BEM. Some developers don't like the use of multiple classes, double underscores, and double dashes, but no one can argue that having a naming system helps cuts down on disorganization.  

For more information on BEM, refer to its [documentation page](http://getbem.com) and this comprehensive article entitled [BEM 101](https://css-tricks.com/bem-101/) on CSS-tricks.
