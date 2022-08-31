# animationstorm

<h2>What Is Animation Storm?</h2>

It is an animation framework built from vanilla JavaScript and CSS. Animations are highly customizable with global settings as well as settings for individual animation instances. The whole framework works offline and has ZERO dependencies. Simply link the CSS and JavaScript files to your site and apply animations instantly with the addition of one class.<br> 

DEMO- https://wbojczuk.github.io/animationstorm/

DEVLOG/BLOG- https://williambojczuk.blogspot.com/search/label/animationstorm <br>

<h2>Settings that all text aniamtion have</h2><br>
data-initialstate-"true/false" (Whether or not to return element to initial state... Some stylish fonts may not revert extremely well)<br>


<h2>SIMPLE WRITE ANIMATION</h2>

Most animations be triggered using either the default Onload trigger, or by tying the animation trigger to a custom event (see each animation for details).

**OPTIONS**

data-placeholder="true/false" (Determines whether of not to display placeholder, default value is true)<br>
data-delay="1000" (Time in MS to idle placeholder before animation start)<br>
data-wait="1000" (Time in MS to wait before starting any animation)<br>
data-idle="1000" (Time in MS to idle placeholder after animation before it disappears)<br>
data-color="hex/rgb(a)/name" (Color of the placeholder)<br>
data-width="2px" (Width of the placeholder. Default value is 2px)<br>
data-height="100%" (Height of the placeholder. Default value is 100%)<br>
data-offsetv="-5px" (Vertical offset of the placeholder relative to the text.)<br>
data-offseth="-5px" (Horizontal offset of the placeholder relative to the text. Default value is -5px)<br>
<br>
**TRIGGERS**<br>
OnLoad- default trigger, use the class as-write.<br>
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
data-delay="ms" (How long to wait to idle placeholder before typing on first text)<br>
data-wait="1000" (Time in MS to wait before starting any animation)<br>
data-placeholder="true/false" (Whether or not to display placeholder)<br>
data-color="hex/rgb(a)/name" (Color of the placeholder)<br>
data-width="2px" (Width of the placeholder. Default value is 2px)<br>
data-height="100%" (Height of the placeholder. Default value is 100%)<br>
data-offsetv="-5px" (Vertical offset of the placeholder relative to the text.)<br>
data-offseth="-5px" (Horizontal offset of the placeholder relative to the text. Default value is -5px)<br>
<br>

**TRIGGERS**

OnLoad- default trigger, use the class as-mulwrite<br>
CUSTOM- animationStorm.mulWrite(element);<br><br>
Multi Write Animation Useage Example:

        <div class="as-mulwrite" >
            <span class="as-mulwrite-text">text1</span>
            <span class="as-mulwrite-text">text2</span>
        </div>
        
<br>

<h2>FALLING WRITE ANIMATION</h2><br>
Writes text by dropping it from the sky :O.<br>
<br>

**OPTIONS**

data-writespeed="ms" (How fast to write text in ms)<br>
data-wait="1000" (Time in MS to wait before starting any animation)<br>
data-opacity="true/false" (Whether or not to fade falling text in during animation)<br>
data-fallspeed="40" (How fast Text falls in ms)<br>
data-writestart="-15vh" (Where to drop text from)
<br>

**TRIGGERS**

OnLoad- default trigger, use the class as-fallwrite<br>

Falling Write Animation Useage Example:<br>

    <div class="as-fallwrite" data-writespeed="100">Falling Text</div><br>
    
    
<h2>ROTATING WRITE ANIMATION</h2><br>
Writes text by rotating it into view :D.<br>
<br>

**OPTIONS**

data-writespeed="ms" (How fast to write text in ms)<br>
data-wait="1000" (Time in MS to wait before starting any animation)<br>
data-opacity="true/false" (Whether or not to fade text in during animation)<br>
data-rotatespeed="40" (How fast text rotates in ms)<br>
data-writestart="20deg" (Where to start rotation from)
<br>

**TRIGGERS**

OnLoad- default trigger, use the class as-rotatewrite<br>

Rotating Write Animation Useage Example:<br>

    <div class="as-rotatewrite" data-wait="1000">Rotating Text</div><br>
    
    
<h2>SLIDING WRITE ANIMATION</h2><br>
Writes text by sliding it into view :D.<br>
<br>

**OPTIONS**

data-writespeed="ms" (How fast to write text in ms)<br>
data-wait="1000" (Time in MS to wait before starting any animation)<br>
data-opacity="true/false" (Whether or not to fade text in during animation)<br>
data-slidespeed="400" (How fast text slides in ms)<br>
data-writestart="-5vw" (Where to start slide from)<br>
data-stretchamount="40deg" (how much should the text be stretched to start)
<br>

**TRIGGERS**

OnLoad- default trigger, use the class as-slidewrite<br>

Rotating Write Animation Useage Example:<br>

    <div class="as-slidewrite" data-wait="1000">Sliding Text</div><br>

<h2>WAVE WRITE ANIMATION</h2><br>
Write text by sending a wave :D<br>
<br>

**OPTIONS**

data-wavespeed="ms" (How fast to write text in ms)<br>
data-wait="1000" (Time in MS to wait before starting any animation)<br>
data-opacity="true/false" (Whether or not to fade text in during animation)<br>
data-animspeed="400" (How fast the individual letter animates in ms)<br>
data-waveheight="-5vw" (Where to reverse wave animation)<br>
data-direction="left/right" (Which way should the wave flow?)
<br>

**TRIGGERS**

OnLoad- default trigger, use the class as-wavewrite<br>

Wave Write Animation Useage Example:<br>

    <div class="as-wavewrite" data-wait="1000">Wavy Text</div><br>
    
    
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
