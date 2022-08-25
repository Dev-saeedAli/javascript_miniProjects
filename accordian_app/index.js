const questionArray = [
    {
        question : "Do you accept all major cards?",
        answer : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia asperiores sed eos illum labore, iure amet magni cupiditate natus aliquid, nemo ipsum animi vitae recusandae commodi suscipit tenetur fugit.",
        
    },
    {
        question : "Do you support local farmers?",
        answer : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia asperiores sed eos illum labore, iure amet magni cupiditate natus aliquid, nemo ipsum animi vitae recusandae commodi suscipit tenetur fugit.",

    },
    {
        question : "Do you use organic ingredients?",
        answer : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quia asperiores sed eos illum labore, iure amet magni cupiditate natus aliquid, nemo ipsum animi vitae recusandae commodi suscipit tenetur fugit.",

    },
]
let mainContainer = document.querySelector("main");

window.addEventListener("DOMContentLoaded", ()=>{
    loadQuestions()
});

const loadQuestions = () => {    
    let html = ""
    questionArray.map((items) => {
        html += `
            <section class="question-container">
                <div class="question__header">
                    <h2>${items.question}</h2>
                    <i class="fa-solid fa-plus"></i>
                    <i class="fa-solid fa-close none"></i>
                </div>
                <div class="question__body none">
                    <p>${items.answer}</p>
                </div>
            </section>
         `
    });
    mainContainer.innerHTML = html;
 
    mainContainer.querySelectorAll(".fa-plus").forEach((btn) => {
        btn.addEventListener("click", (e)=> {
            questionCollapse(e.target)
        })
    })
    mainContainer.querySelectorAll(".fa-close").forEach((btn) => {
        btn.addEventListener("click", (e)=> {
            questionClose(e.target)
        })
    })
}


const questionCollapse = (element) => {
   const questionBody = element.parentElement.parentElement.lastElementChild
    const plusIcon = element;
    const closeIcon = element.nextElementSibling
    const allQuestionBody = document.querySelectorAll(".question__body");
    const allPlusIcons = document.querySelectorAll(".fa-plus");
    const allCloseIcons = document.querySelectorAll(".fa-close");
    
    plusIcon.classList.add("none")
    closeIcon.classList.remove("none")
    allPlusIcons.forEach((plus) => plus.classList.remove("none"));
    allCloseIcons.forEach((close) => close.classList.add("none"));

    Array.from(allQuestionBody).forEach((question) => {
        question.classList.add("none");
        questionBody.classList.remove("none");
        plusIcon.classList.add("none")
        closeIcon.classList.remove("none")
    });
}

const questionClose = (element) => {
    const questionBody = element.parentElement.parentElement.lastElementChild
    const closeIcon = element;
    const plusIcon = element.previousElementSibling
    plusIcon.classList.remove("none")
    closeIcon.classList.add("none")
    questionBody.classList.add("none");
}

