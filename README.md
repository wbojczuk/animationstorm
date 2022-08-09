# animationstorm
SIMPLE WRITE ANIMATION

Can be triggered using either built-in triggers Onload or Onhover, or can be triggered with the method animationStorm.simpleWrite(element);

Data Attributes for Simple Write Animation

data-placeholder="true/false" (Determines whether of not to display placeholder, default value is true)

data-delay="1000" (Time in MS to delay animation start)

data-idle="1000" (Time in MS to idle placeholder after animation before it disappears)

data-color="hex/rgb(a)/name" (Color of the placeholder)

data-width="2px" (Width of the placeholder. Default value is 2px)

Onload Simple Write Animation Example:

    <div class="as-write-load" data-delay="1000">

        Text here

    </div>
    
OnHover Simple Write Animation Example:

    <div class="as-write-hover" data-idle="2000">

        Text here

    </div>


HOW IT WORKS

**BEFORE**

    <div class="as-write-load" data-delay="1000">

        Text

    </div>

**AFTER**

    <div class="as-write-load" data-delay="1000">

    <span class="as-write-inner">

        <span class="as-text-fade">T</ span>

        <span class="as-text-fade">e</ span>

        <span class="as-text-fade">x</ span>

        <span class="as-text-fade">t</ span>

    </span>

    <span class="as-write-placeholder"></ span>

    </div>
