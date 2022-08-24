const countElement = document.querySelector(".count");
const allBtn = document.querySelectorAll(".btn");
let count = 0;


allBtn.forEach((btn) => {
    btn.addEventListener("click", (e)=>{
        changeCount(e.target.dataset.count)
    });
});

const changeTheme = () => {
    count < 0 ? (
        countElement.classList.add("red"), 
        countElement.classList.remove("green"), 
        countElement.classList.remove("blue")
        
        ) : count > 0 ? (
       countElement.classList.add("green"),
       countElement.classList.remove("red"),
       countElement.classList.remove("blue")
   
       ) :  (
           countElement.classList.add("blue"),
           countElement.classList.remove("green"),
           countElement.classList.remove("red")
       ) 
   
}
const changeCount = (element) => {
    if(element === "decrease"){
        count--
        countElement.textContent = count
        changeTheme()
    }else if(element === "increase"){
        count++
        countElement.textContent = count
        changeTheme()
    }else{
        count = 0
        countElement.textContent = count
        changeTheme()
    }
}