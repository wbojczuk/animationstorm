# animationstorm
DEMO- https://wbojczuk.github.io/animationstorm/

<h2>SIMPLE WRITE ANIMATION</h2>

Most animations be triggered using either built-in triggers Onload or Onhover, or with custom triggers (see each animation for details).

**OPTIONS**

data-placeholder="true/false" (Determines whether of not to display placeholder, default value is true)<br>
data-delay="1000" (Time in MS to delay animation start)<br>
data-idle="1000" (Time in MS to idle placeholder after animation before it disappears)<br>
data-color="hex/rgb(a)/name" (Color of the placeholder)<br>
data-width="2px" (Width of the placeholder. Default value is 2px)<br>
<br>
**TRIGGERS**<br>
OnLoad- default trigger, use the class as-write.<br>
OnHover- use class as-write-hover.<br>
CUSTOM- animationStorm.simpleWrite(element);<br>

<br>
Simple Write Animation Useage Example:<br>

    <div class="as-write" data-delay="1000">Text here</div><br>
    
    
<h2>MULTI WRITE ANIMATION</h2><br>
Writes multiple lines of text by writing, deleting, repeat.<br>
<br>

**OPTIONS**

data-loop="true" (Whether or not to loop back through text collection after reaching end)<br>
data-afteridle="null/ms" (How long to idle after animation finishes if looping is off)<br>
data-idle="ms" (How long to idle in between writing/deleting text)<br>
data-writespeed="ms" (How fast to write text in ms)<br>
data-delspeed="ms" (How fast to delete text in ms)<br>
data-delay="ms" (How long to wait before typing on first text)<br>
data-placeholder="true/false" (Whether or not to display placeholder)<br>
data-color="hex/rgb(a)/name" (Color of the placeholder)<br>
data-width="2px" (Width of the placeholder. Default value is 2px)<br>
<br>

**TRIGGERS**

OnLoad- default trigger, use the class as-mulwrite
<br>
Multi Write Animation Useage Example:<br>

        <div class="as-mulwrite" >
            <span class="as-mulwrite-text">text1</span>
            <span class="as-mulwrite-text">text2</span>
        </div>
        
<br>
<h2>HOW IT WORKS</h2><br>

**BEFORE**<br>

    <div class="as-write" data-delay="1000">

        Text

    </div>

**AFTER**<br>

    <div class="as-write" data-delay="1000">

    <span class="as-write-inner">

        <span class="as-text-fade">T</ span>

        <span class="as-text-fade">e</ span>

        <span class="as-text-fade">x</ span>

        <span class="as-text-fade">t</ span>

    </span>

    <span class="as-write-placeholder"></ span>

    </div>
