// INJECT STYLES
// const styleElem = document.createElement("style");
// styleElem.textContent = `styles`;
// document.getElementsByTagName("head")[0].append(styleElem)


const animationStorm = {

    // OPTIONS
    // SIMPLE WRITE SPEED (MS)
     simpleWriteSpeed :40,
    //  DEFAULT  ALSO IN MS
     simpleWriteDelay: 2000,
    //  DEFAULT TIME TO IDLE PLACEHOLDER AFTER ANIMATION. Leave null for infinite idling;
     simpleWriteIdle: 2000,
     simpleWritePlaceholder: true,

     // Multi WRITE SPEED (MS)

     mulWriteSpeed: 40,
     mulDelSpeed: 30,
    //  DEFAULT  ALSO IN MS
     mulWriteDelay: 2000,
    //  DEFAULT TIME TO IDLE PLACEHOLDER AFTER ANIMATION. Leave null for infinite idling;
     mulWriteIdle: 1000,
     mulAfterIdle: null,
     mulWritePlaceholder: true,
     mulWriteLoop: true,

    //  FALLING WRITE SETTINGS
    fallWriteSpeed: 40,
    fallWriteFallSpeed: 800,
    fallWriteStart: "-15vh",
    fallWriteOpacity: true,

    //  ROTATE WRITE SETTINGS
    rotateWriteSpeed: 100,
    rotateWriteRotateSpeed: 150,
    rotateWriteStart: "-90deg",
    rotateWriteOpacity: true,

    //  SLIDE WRITE SETTINGS
    slideWriteSpeed: 50,
    slideWriteSlideSpeed: 500,
    slideWriteStart: "-5vw",
    slideWriteOpacity: true,
    slideWriteStretchAmount: "60deg",

    // TEXT WAVE SETTINGS
    waveWriteSpeed: 50,
    waveWriteAnimSpeed: 600,
    waveWriteHeight: "4vh",
    waveWriteLoop: false,
    waveWriteLoopIdle: 200,
    waveWriteLoopAlternate: true,
    waveWriteOpacity: true,


    setup: ()=>{

        /* TEXT WAVE ANIM STYLESHEET*/
        const waveStyles = document.createElement("style");
        waveStyles.setAttribute("id", "waveStyles");
        
        document.getElementsByTagName("head")[0].append(waveStyles);
        // ONLOAD TRIGGERS

        // SIMPLE WRITE

        if(document.querySelectorAll(".as-write")){
            const writeElems = document.querySelectorAll(".as-write");
            const writeElemsLength = writeElems.length;

            for(let i=0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];
                
                currentElem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.simpleWriteStart(currentElem);}, currentElem.dataset.wait): animationStorm.simpleWriteStart(currentElem);
                
            }
        } 

        // MULWRITE 
        if(document.querySelectorAll(".as-mulwrite")){
            const writeElems = document.querySelectorAll(".as-mulwrite");
            const writeElemsLength = writeElems.length;

            for(let i=0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];

                const currentElemText = currentElem.querySelectorAll(".as-mulwrite-text");
                currentElem.innerHTML = "&#8203";

                currentElem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.mulWriteIn(currentElem, currentElemText);}, currentElem.dataset.wait): animationStorm.mulWriteIn(currentElem, currentElemText);
    
                
            }
        }

        // FALL WRITE

        if(document.querySelector(".as-fallwrite")){
            const writeElems = document.querySelectorAll(".as-fallwrite");
            const writeElemsLength = writeElems.length;
            for(let i = 0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];

                currentElem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.fallWriteIn(currentElem);}, currentElem.dataset.wait): animationStorm.fallWriteIn(currentElem);
            }
        }


        // ROTATE WRITE

        if(document.querySelector(".as-rotatewrite")){
            const writeElems = document.querySelectorAll(".as-rotatewrite");
            const writeElemsLength = writeElems.length;
            for(let i = 0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];

                currentElem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.rotateWriteIn(currentElem);}, currentElem.dataset.wait): animationStorm.rotateWriteIn(currentElem);
            }
        }

        // SLIDE WRITE

        if(document.querySelector(".as-slidewrite")){
            const writeElems = document.querySelectorAll(".as-slidewrite");
            const writeElemsLength = writeElems.length;
            for(let i = 0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];
                
                currentElem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.slideWriteIn(currentElem);}, currentElem.dataset.wait): animationStorm.slideWriteIn(currentElem);
            }
        }

        // TEXT WAVE

        if(document.querySelector(".as-wavewrite")){
            const writeElems = document.querySelectorAll(".as-wavewrite");
            const writeElemsLength = writeElems.length;
            for(let i = 0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];
                
                currentElem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.waveWriteIn(currentElem);}, currentElem.dataset.wait): animationStorm.waveWriteIn(currentElem);
            }
        }



        // ON HOVER LISTENERS

        // SIMPLE WRITE

        if(document.querySelectorAll(".as-write-hover")){
            const writeElems = document.querySelectorAll(".as-write-hover");
            const writeElemsLength = writeElems.length;

            for(let i=0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];
                currentElem.addEventListener("mouseover", animationStorm.simpleWriteHandler);
                
            }
        } 

        // END On Hover

        


    },
    // simpleWrite Write Function
    simpleWriteStart: (currentElem)=>{
        const spanInner = document.createElement("span");
        const placeholderSpan = document.createElement("span");

        placeholderSpan.setAttribute("class", "as-write-placeholder");
        spanInner.setAttribute("class", "as-write-inner");
        let tempText = currentElem.textContent;
        currentElem.innerHTML = "&#8203";

        currentElem.append(spanInner.cloneNode(false))
        const currentElemInner = currentElem.querySelector(".as-write-inner");
       
        currentElemInner.append(placeholderSpan.cloneNode(false));
        const currentPlaceholder = currentElemInner.querySelector(".as-write-placeholder");
        // SETTINGS
        let speedSettings = animationStorm.simpleWriteSpeed;
        if(currentElem.hasAttribute("data-speed")){
            speedSettings = currentElem.dataset.speed;
        }

        if(currentElem.hasAttribute("data-color")){
            currentPlaceholder.style.backgroundColor = currentElem.dataset.color;
        }

        if(currentElem.hasAttribute("data-width")){
            currentPlaceholder.style.width = currentElem.dataset.width;
        }

        if(currentElem.hasAttribute("data-offset")){
            currentPlaceholder.style.right = currentElem.dataset.offset;
        }

        if(currentElem.hasAttribute("data-height")){
            currentPlaceholder.style.height = currentElem.dataset.height;
        }

        let placeholderSettings = animationStorm.simpleWritePlaceholder;
        if(currentElem.hasAttribute("data-placeholder")){
            placeholderSettings = currentElem.dataset.placeholder;
        }

        let currentDelay = animationStorm.simpleWriteDelay;
            if(currentElem.hasAttribute("data-delay")){
                currentDelay = currentElem.dataset.delay;
            }
        let currentIdle = animationStorm.simpleWriteIdle;
        if(currentElem.hasAttribute("data-idle")){
            currentIdle = currentElem.dataset.idle;
        }
        

        if(placeholderSettings === false || placeholderSettings == "false"){currentPlaceholder.style.display = "none";}

        // USED TO INITIALIZE ITERATION COUNTER
        let placeholderTimer = 0;
        currentPlaceholder.onanimationiteration = ()=>{placeholderTimer++;};

       const textSpan = document.createElement("span");
       textSpan.className = "as-text-fade-in";

        currentElem.style.opacity = "100";

        let textCount = 0;
        setTimeout(writeLoadLoop, currentDelay);
            function writeLoadLoop(){
                let currentText = textSpan.cloneNode("false");
                currentText.textContent = tempText.charAt(textCount);
                currentElemInner.insertBefore(currentText, currentElemInner.lastChild) 
                
                textCount++;
                if(textCount<tempText.length){
                    setTimeout(writeLoadLoop, Math.random() * (speedSettings - (speedSettings - 10)) + (speedSettings - 10));
                } else {
                    if(currentIdle){
                        setTimeout(()=>{
                            currentPlaceholder.addEventListener("animationiteration", ()=>{currentPlaceholder.remove();})
                            }, currentIdle);
                    }
                }
            }
    },

    // mulWrite Write Function
    mulWriteIn: (currentElem, textArray)=>{
        const spanInner = document.createElement("span");
        const placeholderSpan = document.createElement("span");
        placeholderSpan.setAttribute("class", "as-write-placeholder");
        spanInner.setAttribute("class", "as-write-inner");
        let currentCount = 0;
        let currentText = textArray[currentCount].textContent;
        let tempText = currentText;
        currentElem.innerHTML = "&#8203";

        
        

        currentElem.append(spanInner.cloneNode(false))
        const currentElemInner = currentElem.querySelector(".as-write-inner");
       
        currentElemInner.append(placeholderSpan.cloneNode(false));
        const currentPlaceholder = currentElemInner.querySelector(".as-write-placeholder");
        const textSpan = document.createElement("span");
        textSpan.className = "as-text-fade-in";

        currentElem.style.opacity = "100";

        // SETTINGS
        let speedSettings = animationStorm.mulWriteSpeed;
        if(currentElem.hasAttribute("data-writespeed")){
            speedSettings = currentElem.dataset.writespeed;
        }
        let delSpeedSettings = animationStorm.mulDelSpeed;
        if(currentElem.hasAttribute("data-delspeed")){
            delSpeedSettings = currentElem.dataset.delspeed;
        }
        
        let currentDelay = animationStorm.mulWriteDelay;
            if(currentElem.hasAttribute("data-delay")){
                currentDelay = currentElem.dataset.delay;
            }

        if(currentElem.hasAttribute("data-color")){
            currentPlaceholder.style.backgroundColor = currentElem.dataset.color;
        }

        if(currentElem.hasAttribute("data-width")){
            currentPlaceholder.style.width = currentElem.dataset.width;
        }

        if(currentElem.hasAttribute("data-offset")){
            currentPlaceholder.style.right = currentElem.dataset.offset;
        }

        if(currentElem.hasAttribute("data-height")){
            currentPlaceholder.style.height = currentElem.dataset.height;
        }

        let placeholderSettings = animationStorm.mulWritePlaceholder;
        if(currentElem.hasAttribute("data-placeholder")){
            placeholderSettings = currentElem.dataset.placeholder;
        }

        let loopSettings = animationStorm.mulWriteLoop;
        if(currentElem.hasAttribute("data-loop")){
            loopSettings = currentElem.dataset.loop;
            loopSettings.toLowerCase()
        }

        
        let currentIdle = animationStorm.mulWriteIdle;
        if(currentElem.hasAttribute("data-idle")){
            currentIdle = currentElem.dataset.writeidle;
        }

        

        let currentAfterIdle = animationStorm.mulAfterIdle;
        if(currentElem.hasAttribute("data-afteridle")){
            currentAfterIdle = currentElem.dataset.afteridle;
        }

        if(placeholderSettings === false || placeholderSettings == "false"){currentPlaceholder.style.display = "none";}
            // USED TO INITIALIZE ITERATION COUNTER
            let placeholderTimer = 0;
            currentPlaceholder.onanimationiteration = ()=>{placeholderTimer++;};
            let textCount = 0;

            setTimeout(writeLoadLoop, currentDelay);
        function writeLoadLoop(){
            let currentText = textSpan.cloneNode("false");
            currentText.textContent = tempText.charAt(textCount);
            currentElemInner.insertBefore(currentText, currentElemInner.lastChild); 
            
            textCount++;
            if(textCount<tempText.length){
                setTimeout(writeLoadLoop, Math.random() * (speedSettings - (speedSettings - 10)) + (speedSettings - 10));
            } else { 
                if(currentCount+1<textArray.length||(loopSettings!==false&&loopSettings!=="false")){
                   
                    setTimeout(delLoadLoop, currentIdle);
            } else if(currentAfterIdle){
                setTimeout(()=>{
                    currentPlaceholder.addEventListener("animationiteration", ()=>{currentPlaceholder.remove();})
                    }, currentAfterIdle);
            }
        }
        }
        // MulWrite Delete Function
        function delLoadLoop(){
            const currentElemTarget = currentElemInner.lastChild.previousSibling;
            const currentInterval =  Math.random() * (delSpeedSettings - (delSpeedSettings - 10)) + (delSpeedSettings - 10);
            currentElemTarget.style.animation = "none";
            currentElemTarget.style.animation = `fade_out ${currentInterval}ms forwards`;
            currentElemTarget.onanimationend = (evt)=>{
                evt.target.remove();
                if(currentElemInner.lastChild.previousSibling){
                    delLoadLoop();
                }else{
                    if(currentCount+1<textArray.length){
                        currentCount++;
                        tempText = textArray[currentCount].textContent;
                        textCount = 0;
                        setTimeout(writeLoadLoop, currentIdle);
                    }else{
                        currentCount = 0;
                        tempText = textArray[currentCount].textContent;
                        textCount = 0;
                        setTimeout(writeLoadLoop, currentIdle);
                    }
                }
            };
            
            
        }
    },

   fallWriteIn: (elem)=>{
    let tempText = elem.textContent;
    elem.innerHTML = "&#8203";
    elem.style.opacity = "100";

    // SETTINGS
    let speedSettings = animationStorm.fallWriteSpeed;
    if(elem.hasAttribute("data-writespeed")){
        speedSettings = elem.dataset.writespeed;
    }
    let fallSpeed = animationStorm.fallWriteFallSpeed;
    if(elem.hasAttribute("data-rotatespeed")){
        fallSpeed = elem.dataset.rotatespeed;
    }
    let startSettings = animationStorm.fallWriteStart;
    if(elem.hasAttribute("data-writestart")){
        startSettings = elem.dataset.writestart;
    }
    let opacitySettings = animationStorm.fallWriteOpacity;
    if(elem.hasAttribute("data-opacity")){
        opacitySettings = elem.dataset.opacity;
    }

    // DOCUMENT FRAGMENT ELEMS
    const fallingSpan = document.createElement("span");
    fallingSpan.className = "as-fallwrite-span";
    let textCount = 0;
    fallWriteLoop();
    function fallWriteLoop(){
        let tempSpan = fallingSpan.cloneNode(false);
        if(tempText.charAt(textCount)== " "){
            tempSpan.innerHTML = "&nbsp;";
        }else {
            tempSpan.textContent = tempText.charAt(textCount);
        }
        
        tempSpan.style.transform = `translateY(${startSettings})`;
        if(opacitySettings === false || opacitySettings == "false"){
            tempSpan.style.animation = `falling_text ${fallSpeed}ms forwards`;  
        } else{
            tempSpan.style.animation = `falling_text_opacity ${fallSpeed}ms forwards`;
        }
        
        elem.append(tempSpan);
        textCount++;
        if(textCount<tempText.length){setTimeout(fallWriteLoop, Math.random() * (speedSettings - (speedSettings - 10)) + (speedSettings - 10))}
    }
   }, 

   rotateWriteIn: (elem)=>{
    // setup
    const tempText =  elem.textContent;
    elem.innerHTML = "&#8203";
    const textSpan = document.createElement("span");
    textSpan.className = "as-rotatewritespan";
    elem.style.opacity = 100;  
    let textCount = 0;

    // settings

    let opacitySettings = animationStorm.rotateWriteOpacity;
    if(elem.hasAttribute("data-opacity")){
        opacitySettings = elem.dataset.opacity;
    }
    let speedSettings = animationStorm.rotateWriteSpeed;
    if(elem.hasAttribute("data-writespeed")){
        speedSettings = elem.dataset.writespeed;
    }
    let fallSpeed = animationStorm.rotateWriteRotateSpeed;
    if(elem.hasAttribute("data-fallspeed")){
        fallSpeed = elem.dataset.fallspeed;
    }
    let startSettings = animationStorm.rotateWriteStart;
    if(elem.hasAttribute("data-writestart")){
        startSettings = elem.dataset.writestart;
    }

    textSpan.style.transform = `rotate(${startSettings})`;

    rotateWriteLoop();
    function rotateWriteLoop(){
        const tempSpan = textSpan.cloneNode(false);
        if(tempText.charAt(textCount) == " "){
            tempSpan.innerHTML = "&nbsp;";
        }else{
            tempSpan.textContent = tempText.charAt(textCount);
        }

        if(opacitySettings === false || opacitySettings == "false"){
            tempSpan.style.animation = `rotate_write ${fallSpeed}ms forwards`;  
        } else{
            tempSpan.style.animation = `rotate_write_opacity ${fallSpeed}ms forwards`;
        }
        elem.append(tempSpan);

        textCount++;
        if(textCount<tempText.length){
            setTimeout(rotateWriteLoop, speedSettings);
        }
    }
   },

   slideWriteIn: (elem)=>{
    // setup
    const tempText =  elem.textContent;
    const textSpan = document.createElement("span");
    textSpan.className = "as-slidewritespan";
    const textInner = document.createElement("div");
    textInner.className = "as-slidewrite-inner";
    elem.prepend(textInner);
     
    
    const currentInner = elem.querySelector(".as-slidewrite-inner");
    currentInner.style.color = window.getComputedStyle(elem).color;
    let textCount = 0;
    elem.style.color = "rgba(0,0,0,0)";
    elem.style.opacity = 100; 
    // settings

    let opacitySettings = animationStorm.slideWriteOpacity;
    if(elem.hasAttribute("data-opacity")){
        opacitySettings = elem.dataset.opacity;
    }
    let speedSettings = animationStorm.slideWriteSpeed;
    if(elem.hasAttribute("data-writespeed")){
        speedSettings = elem.dataset.writespeed;
    }
    let slideSpeed = animationStorm.slideWriteSlideSpeed;
    if(elem.hasAttribute("data-slidespeed")){
        slideSpeed = elem.dataset.slidespeed;
    }
    let startSettings = animationStorm.slideWriteStart;
    if(elem.hasAttribute("data-writestart")){
        startSettings = elem.dataset.writestart;
    }
    let strechSettings = animationStorm.slideWriteStretchAmount;
    if(elem.hasAttribute("data-stretchamount")){
        strechSettings = elem.dataset.stretchamount;
    }

    textSpan.style.transform = `translateX(${startSettings}) skewX(${strechSettings})`;
    
    const tempTextLength = tempText.length;
if(parseFloat(startSettings) > 0){
    currentInner.style.textAlign = "left";
    slideWriteLoopPos();
}else{
    currentInner.style.textAlign = "right";
    slideWriteLoopNeg();
}
    
    function slideWriteLoopNeg(){
        const tempSpan = textSpan.cloneNode(false);
        if(tempText.charAt(tempTextLength-textCount) == " "){
            tempSpan.innerHTML = "&nbsp;";
        }else{
            tempSpan.textContent = tempText.charAt(tempTextLength-textCount);
        }

        if(opacitySettings === false || opacitySettings == "false"){
            tempSpan.style.animation = `slide_write ${slideSpeed}ms forwards`;  
        } else{
            tempSpan.style.animation = `slide_write_opacity ${slideSpeed}ms forwards`;
        }
        currentInner.prepend(tempSpan);

        textCount++;
        if(textCount<=tempText.length){
            setTimeout(slideWriteLoopNeg, speedSettings);
        }
    }
    function slideWriteLoopPos(){
        const tempSpan = textSpan.cloneNode(false);
        if(tempText.charAt(textCount) == " "){
            tempSpan.innerHTML = "&nbsp;";
        }else{
            tempSpan.textContent = tempText.charAt(textCount);
        }

        if(opacitySettings === false || opacitySettings == "false"){
            tempSpan.style.animation = `slide_write ${slideSpeed}ms forwards`;  
        } else{
            tempSpan.style.animation = `slide_write_opacity ${slideSpeed}ms forwards`;
        }
        currentInner.append(tempSpan);

        textCount++;
        if(textCount<tempText.length){
            setTimeout(slideWriteLoopPos, speedSettings);
        }
    }


   },

   waveWriteIn: (elem)=>{
    // SETUP
    let tempText = elem.textContent;
    elem.innerHTML = "&#8203";
    const textSpan = document.createElement("span");
    textSpan.className = "as-wavewrite-span";
    let textCount = 0;
    elem.style.opacity = 100;
    // SETTINGS
    let heightSettings = animationStorm.waveWriteHeight;
    if(elem.hasAttribute("data-waveheight")){
        heightSettings = elem.dataset.waveheight;
    }
    let speedSettings = animationStorm.waveWriteSpeed;
    if(elem.hasAttribute("data-wavespeed")){
        speedSettings = elem.dataset.wavespeed;
    }
    let animSpeed = animationStorm.waveWriteAnimSpeed;
    if(elem.hasAttribute("data-animspeed")){
        animSpeed = elem.dataset.animspeed;
    }
    let opacitySettings = animationStorm.waveWriteOpacity;
    if(elem.hasAttribute("data-opacity")){
        opacitySettings = elem.dataset.opacity;
    }

    let currentAnimation = "";

    // SET INDIVIDUAL ANIMATION INSTANCES
    if(!elem.hasAttribute("data-wavewriteinstance")){
        const currentClass = `wavewriteinstance${animationStorm.waveWriteInstances}`;
        elem.setAttribute("data-wavewriteinstance",animationStorm.waveWriteInstances);

        if(opacitySettings === false || opacitySettings == "false"){
            document.getElementById("waveStyles").textContent += `
        @keyframes ${currentClass} {
            0%{transform: translateY(0);}
            50%{transform: translateY(${heightSettings});}
            100%{transform: translateY(0)}
        }
        `; 
        } else{
            document.getElementById("waveStyles").textContent += `
        @keyframes ${currentClass} {
            0%{transform: translateY(0); opacity:0;}
            50%{transform: translateY(${heightSettings});}
            100%{transform: translateY(0); opacity: 100;}
        }
        `;
        }

        
        currentAnimation = `${currentClass} ${animSpeed}ms forwards`;

        animationStorm.waveWriteInstances++;
    }else if(elem.hasAttribute("data-wavewriteinstance")){
        currentAnimation = `wavewriteinstance${elem.dataset.waveWriteinstance} ${animSpeed}ms forwards`;
    }
    waveWriteLoopRight()
    function waveWriteLoopRight(){
        const tempSpan = textSpan.cloneNode(false);
        if(tempText.charAt(textCount) == " "){
            tempSpan.innerHTML = "&nbsp;";
        }else{
            tempSpan.textContent = tempText.charAt(textCount);
        }
        tempSpan.style.animation = currentAnimation;
        elem.append(tempSpan);

        textCount++;
        if(textCount<tempText.length){
            setTimeout(waveWriteLoopRight, speedSettings);
        }
    }


   },

    // CUSTOM TRIGGERS 

    fallWrite: (elem)=>{
        elem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.fallWriteIn(elem);}, elem.dataset.wait): animationStorm.fallWriteIn(elem);
    },

    mulWrite: (elem)=>{
        const currentElemText = elem.querySelectorAll(".as-mulwrite-text");
        elem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.mulWriteIn(elem, currentElemText);}, elem.dataset.wait): animationStorm.mulWriteIn(elem, currentElemText);
        
    },

    simpleWrite:(elem)=>{
        elem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.simpleWriteStart(elem);}, elem.dataset.wait): animationStorm.simpleWriteStart(elem);
    },

    rotateWrite: (elem)=>{
        elem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.rotateWriteIn(elem);}, elem.dataset.wait): animationStorm.rotateWriteIn(elem);
    },

    slideWrite: (elem)=>{
        elem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.slideWriteIn(elem);}, elem.dataset.wait): animationStorm.slideWriteIn(elem);
    },
    waveWrite: (elem)=>{
        elem.hasAttribute("data-wait")?setTimeout(()=>{animationStorm.waveWriteIn(elem);}, elem.dataset.wait): animationStorm.waveWriteIn(elem);
    },


    // EVENT HANDLERS

    // simpleWrite ON HOVER
    simpleWriteHandler: (evt)=>{
        evt.target.removeEventListener("mouseover", animationStorm.simpleWriteHandler);

        if(evt.target.hasAttribute("data-wait")){
            setTimeout(()=>{animationStorm.simpleWriteStart(evt.target);}, evt.target.dataset.wait);
        }else{
            animationStorm.simpleWriteStart(evt.target);
        }
        
    },


    // OBJECT VARIABLES
    waveWriteInstances: 0,

    
};

animationStorm.setup();
