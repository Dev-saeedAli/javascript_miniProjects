 const userList = [
    {
        name : "Susan Smith",
        occupation : "Web Developer",
        review : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime corrupti quia quod deserunt error, cum magnam maiores sint nulla! Animi reiciendis similique voluptas officia quae.",
        image: "avatar_one.jpg",
    },
    {
        name : "Mary Shinson",
        occupation: "Front end developer",
        review : "atus tenetur neque obcaecati adipisci tempore dolorum minima reiciendis. Animi reiciendis similique voluptas officia quae.",
        image: "avatar_two.jpg",
    },
    {
        name : "Linda Magregor",
        occupation: "Web designer",
        review : "Lorem ipsum, dolor sit amet atus tenetur neque obcaecati adipisci tempore dolorum minima reiciendis.error, cum magnam maiores sint nulla! Animi reiciendis similique voluptas officia quae.",
        image: "avatar_three.jpg",
    },
]
const reviewContainer = document.querySelector(".review__container");
let currentReview = 0;


const loadPrevious = () => {
    loadReview()
    currentReview++
    if(currentReview > userList.length - 1){
        currentReview = 0
    }
}
const loadNext = () => {
    loadReview()
    currentReview--
    if(currentReview < 0){
        currentReview = userList.length- 1
    }
}

const loadSurprise = () => {
    loadReview()
    currentReview = Math.floor(Math.random() * userList.length);
}

const loadReview = () => {
    reviewContainer.innerHTML = `
            <div class="review__header">
            <img src="./assets/${userList[currentReview].image}" alt="review user image">
            </div>
            <div class="review__body">
                <div class="review__body__info">
                    <h2>${userList[currentReview].name}</h2>
                    <h3 class="occupation">${userList[currentReview].occupation}</h3>
                    <p class="review">${userList[currentReview].review}.</p>
                </div>
                <div class="review__btn">
                    <i class="fa-solid fa-arrow-left"></i>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <button class="btn__surprise">Surprise me</button>
            </div> 
    `
    const prevBtn = document.querySelector(".fa-arrow-left");
    const nextBtn = document.querySelector(".fa-arrow-right");
    const surpriseBtn = document.querySelector(".btn__surprise");
    prevBtn.addEventListener("click", () =>{
        loadPrevious()
    });
    nextBtn.addEventListener("click", () =>{
        loadNext()
    });
    surpriseBtn.addEventListener("click", ()=>{
        loadSurprise()
    })
}

window.addEventListener("DOMContentLoaded", ()=> {
    loadReview()
});