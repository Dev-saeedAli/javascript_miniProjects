// simple
const simpleColors = ["violet", "magenta","orange", "red", "green", "blue", "limegreen", "lighblue", "rgb(255, 0, 225)", "rgb(0, 115, 255)"]
const hexColors = ["A",4,"B",3,"C", "D", "E", 1, 2, 5, 6, 7, 8, 9, "F"]
// Hex
const header = document.querySelector("header")
const allHeader = document.querySelectorAll("header span")
const simple = header.querySelector(".simple")
const hex = header.querySelector(".hex")
const bgText = document.querySelector(".current-bg-text")
const btn = document.querySelector(".btn")

const body = document.body

simple.addEventListener("click",()=>{
    simple.classList.add("active")
})

allHeader.forEach((option) => {
    option.addEventListener("click", ()=>{
        if(option.dataset.color === "simple"){
            simple.classList.add("active")
            hex.classList.remove("active")
            btn.addEventListener("click", ()=>{
               loadSimple()
            })
        } else if(option.dataset.color === "hex"){
            hex.classList.add("active");
            simple.classList.remove("active")
            btn.addEventListener("click", ()=>{
                loadHex()
            });
        }
    })
   
});

const loadSimple = () => {
    const selectedSimpleColor = simpleColors[getSimpleNumber()];
    body.style.backgroundColor = selectedSimpleColor;
    bgText.textContent = selectedSimpleColor; 
}
const loadHex = () => {
    let randomHexValue = "#"
    for(let i = 0 ; i < 6; i++){
        randomHexValue += hexColors[getHexNumber()]
    }
    bgText.textContent = randomHexValue; 
    body.style.backgroundColor = randomHexValue;
}

function getHexNumber (){
    return Math.floor(Math.random() * hexColors.length)
}
function getSimpleNumber (){
    return Math.floor(Math.random() * simpleColors.length)
}