// INJECT STYLES
// const styleElem = document.createElement("style");
// styleElem.textContent = `styles`;
// document.getElementsByTagName("head")[0].append(styleElem)


const animationStorm = {
    initialState: false,
    // OPTIONS
    // SIMPLE WRITE SPEED (MS)
     simpleWriteSpeed: 40,
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
    waveWriteOpacity: true,
    waveWriteDirection: "left",


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

        


    },
    // simpleWrite Write Function
    simpleWriteStart: (currentElem)=>{
        const spanInner = document.createElement("span");
        const placeholderSpan = document.createElement("span");

        placeholderSpan.setAttribute("class", "as-write-placeholder");
        spanInner.setAttribute("class", "as-write-inner");
        let tempText = currentElem.textContent;
        const textInner = document.createElement("div");
        textInner.className = "as-write-inject";
        textInner.style.textAlign = "left";
        currentElem.prepend(textInner);
        const currentInner = currentElem.querySelector(".as-write-inject");
        currentInner.style.color = window.getComputedStyle(currentElem).color;
        currentElem.style.color = "rgba(0,0,0,0)";
        currentElem.style.opacity = 100;
        currentInner.innerHTML = "&#8203";
        currentInner.append(spanInner.cloneNode(false))
        const currentElemInner = currentInner.querySelector(".as-write-inner");
       
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

        if(currentElem.hasAttribute("data-offseth")){
            currentPlaceholder.style.right = currentElem.dataset.offseth;
        }
        if(currentElem.hasAttribute("data-offsetv")){
            currentPlaceholder.style.top = currentElem.dataset.offsetv;
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
                            let initialState = animationStorm.initialState;
                            if(currentElem.hasAttribute("data-initialstate")){
                                initialState = (currentElem.dataset.initialState == "true");
                            }
                            if(initialState){
                                currentElem.style.color = window.getComputedStyle(currentElemInner).color;
                                currentInner.remove();
                                currentElem.classList.remove("as-write");
                                animationStorm.removeData(currentElem);
                            }   
                           
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
    const innerElem = document.createElement("div");
    innerElem.className = "as-write-inject";
    innerElem.style.textAlign = "left";
    innerElem.style.color = window.getComputedStyle(elem).color;
    elem.append(innerElem);
    elem.style.color="rgba(0,0,0,0)";
    elem.style.opacity = 100;
    const currentInner = elem.querySelector(".as-write-inject"); 

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
        
            tempSpan.textContent = tempText.charAt(textCount);
        
        
        tempSpan.style.transform = `translateY(${startSettings})`;
        if(opacitySettings === false || opacitySettings == "false"){
            tempSpan.style.animation = `falling_text ${fallSpeed}ms forwards`;  
        } else{
            tempSpan.style.animation = `falling_text_opacity ${fallSpeed}ms forwards`;
        }
        
        currentInner.append(tempSpan);
        textCount++;
        if(textCount<tempText.length){setTimeout(fallWriteLoop, Math.random() * (speedSettings - (speedSettings - 10)) + (speedSettings - 10))}else{
            tempSpan.addEventListener("animationend", ()=>{

                let initialState = animationStorm.initialState;
                if(elem.hasAttribute("data-initialstate")){
                    initialState = (elem.dataset.initialState == "true");
                }
                if(initialState){
                elem.style.color = window.getComputedStyle(currentInner).color;
                currentInner.remove();
                elem.classList.remove("as-fallwrite");
                animationStorm.removeData(elem);
                }   
                
            }); 
        }
    }
   }, 

   rotateWriteIn: (elem)=>{
    // setup
    const tempText =  elem.textContent;
    const textSpan = document.createElement("span");
    textSpan.className = "as-rotatewritespan";
    const innerElem = document.createElement("div");
    innerElem.className = "as-write-inject";
    innerElem.style.textAlign = "left";
    innerElem.style.color = window.getComputedStyle(elem).color;
    elem.append(innerElem);
    elem.style.color="rgba(0,0,0,0)";
    elem.style.opacity = 100;
    const currentInner = elem.querySelector(".as-write-inject"); 
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
    if(elem.hasAttribute("data-rotatespeed")){
        fallSpeed = elem.dataset.rotatespeed;
    }
    let startSettings = animationStorm.rotateWriteStart;
    if(elem.hasAttribute("data-writestart")){
        startSettings = elem.dataset.writestart;
    }

    textSpan.style.transform = `rotate(${startSettings})`;

    rotateWriteLoop();
    function rotateWriteLoop(){
        const tempSpan = textSpan.cloneNode(false);
       
            tempSpan.textContent = tempText.charAt(textCount);
        

        if(opacitySettings === false || opacitySettings == "false"){
            tempSpan.style.animation = `rotate_write ${fallSpeed}ms forwards`;  
        } else{
            tempSpan.style.animation = `rotate_write_opacity ${fallSpeed}ms forwards`;
        }
        currentInner.append(tempSpan);

        textCount++;
        if(textCount<tempText.length){
            setTimeout(rotateWriteLoop, speedSettings);
        }else{
            tempSpan.addEventListener("animationend", ()=>{
                let initialState = animationStorm.initialState;
                if(elem.hasAttribute("data-initialstate")){
                    initialState = (elem.dataset.initialState == "true");
                }
                if(initialState){
                    elem.style.color = window.getComputedStyle(currentInner).color;
                    currentInner.remove();
                    elem.classList.remove("as-rotatewrite");
                    animationStorm.removeData(elem);
                }
                
            }); 
        }
    }
   },

   slideWriteIn: (elem)=>{
    // setup
    const tempText =  elem.textContent;
    const textSpan = document.createElement("span");
    textSpan.className = "as-slidewritespan";
    const textInner = document.createElement("div");
    textInner.className = "as-write-inject";
    elem.prepend(textInner);
    const currentInner = elem.querySelector(".as-write-inject");
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
        
            tempSpan.textContent = tempText.charAt(tempTextLength-textCount);
        

        if(opacitySettings === false || opacitySettings == "false"){
            tempSpan.style.animation = `slide_write ${slideSpeed}ms forwards`;  
        } else{
            tempSpan.style.animation = `slide_write_opacity ${slideSpeed}ms forwards`;
        }
        currentInner.prepend(tempSpan);

        textCount++;
        if(textCount<=tempText.length){
            setTimeout(slideWriteLoopNeg, speedSettings);
        }else{
            tempSpan.addEventListener("animationend", ()=>{
                let initialState = animationStorm.initialState;
                if(elem.hasAttribute("data-initialstate")){
                    initialState = (elem.dataset.initialState == "true");
                }
                if(initialState){
                    elem.style.color = window.getComputedStyle(currentInner).color;
                currentInner.remove();
                elem.classList.remove("as-slidewrite");
                animationStorm.removeData(elem);
                }
                
            }); 
        }
    }
    function slideWriteLoopPos(){
        const tempSpan = textSpan.cloneNode(false);
        
            tempSpan.textContent = tempText.charAt(textCount);
        

        if(opacitySettings === false || opacitySettings == "false"){
            tempSpan.style.animation = `slide_write ${slideSpeed}ms forwards`;  
        } else{
            tempSpan.style.animation = `slide_write_opacity ${slideSpeed}ms forwards`;
        }
        currentInner.append(tempSpan);

        textCount++;
        if(textCount<tempText.length){
            setTimeout(slideWriteLoopPos, speedSettings);
        }else{
            tempSpan.addEventListener("animationend", ()=>{
                let initialState = animationStorm.initialState;
                if(elem.hasAttribute("data-initialstate")){
                    initialState = (elem.dataset.initialState == "true");
                }
                if(initialState){
                elem.style.color = window.getComputedStyle(currentInner).color;
                currentInner.remove();
                elem.classList.remove("as-slidewrite");
                animationStorm.removeData(elem);
                }
            }); 
        }
    }


   },

   waveWriteIn: (elem)=>{
    // SETUP
    let tempText = elem.textContent;
    const textSpan = document.createElement("span");
    textSpan.className = "as-wavewrite-span";
    let textCount = 0;

    const innerElem = document.createElement("div");
    innerElem.className = "as-write-inject";
    innerElem.style.color = window.getComputedStyle(elem).color;
    elem.append(innerElem);
    elem.style.color="rgba(0,0,0,0)";
    elem.style.opacity = 100;
    const currentInner = elem.querySelector(".as-write-inject");
    
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
    let directionSettings = animationStorm.waveWriteDirection.toLowerCase();
    if(elem.hasAttribute("data-direction")){
        directionSettings = elem.dataset.direction.toLowerCase();
    }
    

    let currentAnimation = "";

    // SET INDIVIDUAL ANIMATION INSTANCES
    
        const currentClass = `wavewriteinstance${animationStorm.waveWriteInstances}`;
        

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
        

        
        currentAnimation = `${currentClass} ${animSpeed}ms forwards`;
        
        animationStorm.waveWriteInstances++;
    }
    const textLength = tempText.length;
    if(directionSettings=="right"){
        currentInner.style.textAlign = "left";
        elem.style.textAlign = "left";
        waveWriteLoopRight();
    }else if(directionSettings=="left"){
        elem.style.textAlign = "right";
        waveWriteLoopLeft();
        
    }
    
    function waveWriteLoopRight(){
        const tempSpan = textSpan.cloneNode(false);
       
            tempSpan.textContent = tempText.charAt(textCount);
        
        tempSpan.style.animation = currentAnimation;
        currentInner.append(tempSpan);

        textCount++;
        if(textCount<tempText.length){
            setTimeout(waveWriteLoopRight, speedSettings);
        }else{
            tempSpan.addEventListener("animationend", ()=>{
                let initialState = animationStorm.initialState;
                if(elem.hasAttribute("data-initialstate")){
                    initialState = (elem.dataset.initialState == "true");
                }
                if(initialState){
                elem.style.color = window.getComputedStyle(currentInner).color;
                currentInner.remove();
                elem.classList.remove("as-wavewrite");
                animationStorm.removeData(elem);
                }
            }); 
        }
    }
    
    function waveWriteLoopLeft(){
        
        const currentChar = textLength-textCount;
        const tempSpan = textSpan.cloneNode(false);
        
        
            tempSpan.textContent = tempText.charAt(currentChar);
        
        tempSpan.style.animation = currentAnimation;
        currentInner.prepend(tempSpan);

        textCount++;
        if(textCount<=tempText.length){
            setTimeout(waveWriteLoopLeft, speedSettings);
        }else{
            tempSpan.addEventListener("animationend", ()=>{
                let initialState = animationStorm.initialState;
                if(elem.hasAttribute("data-initialstate")){
                    initialState = (elem.dataset.initialState == "true");
                }
                if(initialState){
                elem.style.color = window.getComputedStyle(currentInner).color;
                currentInner.remove();
                elem.classList.remove("as-wavewrite");
                animationStorm.removeData(elem);
                }
            }); 
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



    // REMOVE DATA ATTRIBUTES
    removeData: (elem)=>{
        elem.removeAttribute("data-writespeed");
        elem.removeAttribute("data-wait");
        elem.removeAttribute("data-placeholder");
        elem.removeAttribute("data-delay");
        elem.removeAttribute("data-idle");
        elem.removeAttribute("data-color");
        elem.removeAttribute("data-width");
        elem.removeAttribute("data-height");
        elem.removeAttribute("data-offsetv");
        elem.removeAttribute("data-offseth");
        elem.removeAttribute("data-loop");
        elem.removeAttribute("data-afteridle");
        elem.removeAttribute("data-delspeed");
        elem.removeAttribute("data-opacity");
        elem.removeAttribute("data-fallspeed");
        elem.removeAttribute("data-writestart");
        elem.removeAttribute("data-rotatespeed");
        elem.removeAttribute("data-slidespeed");
        elem.removeAttribute("data-stretchamount");
        elem.removeAttribute("data-animspeed");
        elem.removeAttribute("data-waveheight");
        elem.removeAttribute("data-direction");
        elem.removeAttribute("data-wavespeed");
    },


    // OBJECT VARIABLES
    waveWriteInstances: 0,

    
};

animationStorm.setup();
