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



    setup: ()=>{
        // SIMPLE Write Text

        // On Load
        if(document.querySelectorAll(".as-write")){
            const writeElems = document.querySelectorAll(".as-write");
            const writeElemsLength = writeElems.length;

            for(let i=0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];
                animationStorm.simpleWrite(currentElem)
                
            }
        } 
        // END ON LOAD WRITE

        // On Hover

        if(document.querySelectorAll(".as-write-hover")){
            const writeElems = document.querySelectorAll(".as-write-hover");
            const writeElemsLength = writeElems.length;

            for(let i=0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];
                currentElem.addEventListener("mouseover", animationStorm.simpleWriteHandler);
                
            }
        } 

        // END On Hover

        // MULTIPLE TEXT WRITE
        if(document.querySelectorAll(".as-mulwrite")){
            const writeElems = document.querySelectorAll(".as-mulwrite");
            const writeElemsLength = writeElems.length;

            for(let i=0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];

                const currentElemText = currentElem.querySelectorAll(".as-mulwrite-text");

                animationStorm.mulWriteIn(currentElem, currentElemText);
    
                
            }
        }


    },

    simpleWrite: (currentElem)=>{
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




    // EVENT HANDLERS
    simpleWriteHandler: (evt)=>{
        evt.target.removeEventListener("mouseover", animationStorm.simpleWriteHandler);
        animationStorm.simpleWrite(evt.target);
    },

    
};

animationStorm.setup();
