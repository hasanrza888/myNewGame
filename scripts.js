const mover = document.querySelector(".mover");
const attacker = document.querySelector(".attacker");
const StartBtn = document.querySelector(".next");
const body = document.querySelector("body");
const GameContainer = document.querySelector(".GameContainer");

const Framestyle = getComputedStyle(GameContainer)

let start = false;
let deyer = -50;
let check = 0;
let final = false;

function sss(){
    start = true;

    


        if(start == true){

            final = true
            const atk = document.createElement("div")
            atk.classList.add("attacker");
            GameContainer.append(atk);
    
    
    
            const starter = setInterval(()=>{
                
                deyer += 10;
                check += 10;
                atk.style.right = `${deyer}px`;
    
                
                const moverRightDimension = (parseInt(getComputedStyle(mover).marginRight) + parseInt(getComputedStyle(mover).width)/2)
                const moverLeftDimension = (parseInt(getComputedStyle(mover).marginRight) + parseInt(getComputedStyle(mover).width))
                const attackerRightDimension = parseInt(getComputedStyle(atk).right) + parseInt(getComputedStyle(atk).width)/2
                // console.log(moverLeftDimension >= attackerRightDimension && moverRightDimension <= attackerRightDimension )
                

                const moverBottomDimension = (parseInt(getComputedStyle(mover).marginBottom))
                const moverTopDimension = (parseInt(getComputedStyle(mover).marginBottom) + parseInt(getComputedStyle(mover).width))
                const attackerBottomDimension = parseInt(getComputedStyle(atk).bottom) + parseInt(getComputedStyle(atk).width)/2

                console.log((moverBottomDimension <= attackerBottomDimension && moverTopDimension >= attackerBottomDimension) && moverLeftDimension >= attackerRightDimension && moverRightDimension <= attackerRightDimension)

                if((parseInt(getComputedStyle(atk).right) > parseInt(Framestyle.width)) || (moverBottomDimension <= attackerBottomDimension && moverTopDimension >= attackerBottomDimension) && moverLeftDimension >= attackerRightDimension && moverRightDimension <= attackerRightDimension){
                    clearInterval(starter)

                    atk.style.display = "none"
                    deyer = 0;
                    final = false

                    if(final == false){
                        sss()
                    }
    
                }
    
        }, 10);
    
        
        }

}


StartBtn.addEventListener('click', ()=> {if(start == false) {sss(); start = true}})

mover.addEventListener("click", ()=>{
    if(start == true){
        mover.style.marginBottom = "150px";

        setTimeout(() => {
            mover.style.marginBottom = "0px";
    
        }, 500);
    }
    
})

