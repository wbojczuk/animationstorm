const animationStorm = {

    // OPTIONS
    // ONLOAD SIMPLE WRITE SPEED (MS)
     simpleWriteSpeed :40,
    //  DEFAULT ONLOAD ALSO IN MS
     simpleWriteDelay: 2000,
    //  DEFAULT TIME TO IDLE PLACEHOLDER AFTER ANIMATION. Leave null for infinite idling;
     simpleWriteIdle: 2000,



    setup: ()=>{
        // Write Text

        // On Load
        if(document.querySelectorAll(".as-write-load")){
            const writeElems = document.querySelectorAll(".as-write-load");
            const writeElemsLength = writeElems.length;

            const spanInner = document.createElement("span");
            // const spanText = document.createElement("span");
            const placeholderSpan = document.createElement("span");

            placeholderSpan.setAttribute("class", "as-write-placeholder");
            spanInner.setAttribute("class", "as-write-inner");

            for(let i=0; i<writeElemsLength; i++){
                const currentElem = writeElems[i];
                let currentDelay = animationStorm.simpleWriteDelay;
                    if(currentElem.hasAttribute("data-delay")){
                        currentDelay = currentElem.dataset.delay;
                    }
                let currentIdle = animationStorm.simpleWriteIdle;
                if(currentElem.hasAttribute("data-idle")){
                    currentIdle = currentElem.dataset.idle;
                }
                let tempText = currentElem.textContent;
                currentElem.innerHTML = "&nbsp;";

                currentElem.append(spanInner.cloneNode(false))
                const currentElemInner = currentElem.querySelector(".as-write-inner");
                const currentElemText = currentElemInner.querySelector(".as-write-text");
                currentElemInner.append(placeholderSpan.cloneNode(false));
                const currentPlaceholder = currentElemInner.querySelector(".as-write-placeholder");
                // USED TO INITIALIZE ITERATION COUNTER
                let placeholderTimer = 0;
                currentPlaceholder.onanimationiteration = ()=>{placeholderTimer++;};

               const textSpan = document.createElement("span");
               textSpan.className = "as-text-fade";

                currentElem.style.opacity = "100";

                let textCount = 0;
                setTimeout(writeLoadLoop, currentDelay);
                
                    function writeLoadLoop(){
                        let currentText = textSpan.cloneNode("false");
                        currentText.textContent = tempText.charAt(textCount);
                        currentElemInner.insertBefore(currentText, currentElemInner.lastChild) 
                        
                        textCount++;
                        if(textCount<tempText.length){
                            setTimeout(writeLoadLoop, Math.random() * (animationStorm.simpleWriteSpeed - animationStorm.simpleWriteSpeed - 10) + animationStorm.simpleWriteSpeed - 10);
                        } else {
                            if(animationStorm.simpleWriteIdle){
                                setTimeout(()=>{
                                    currentPlaceholder.addEventListener("animationiteration", ()=>{currentPlaceholder.remove();})
                                    }, currentIdle);
                            }
                        }
                    }
                

                
            }
        } 
        // END ON LOAD WRITE

    }
};

animationStorm.setup();