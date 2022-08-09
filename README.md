# animationstorm
Data Attributes for Simple Write Animation

data-placeholder="true/false" (Determines whether of not to display placeholder, default value is true)

data-delay="1000" (Time in MS to delay animation start)

data-idle="1000" (Time in MS to idle placeholder before it disappears)

Onload Simple Write Animation Example:

    < div class="as-write-load" data-delay="1000">

        Text here

    </ div>



HOW IT WORKS

**BEFORE**

    < div class="as-write-load" data-delay="1000">

        Text

    </ div>

**AFTER**

    < div class="as-write-load" data-delay="1000">

    < span class="as-write-inner">

        < span class="as-text-fade">T</ span>

        < span class="as-text-fade">e</ span>

        < span class="as-text-fade">x</ span>

        < span class="as-text-fade">t</ span>

    </ span>

    < span class="as-write-placeholder"></ span>

    </ div>
