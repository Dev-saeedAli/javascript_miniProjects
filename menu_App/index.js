const dishArray = [ 
    {
        id: 1,
        name : "Buttermilk Pancakes",
        price : 10.00,
        category : "Breakfast",
        img : "./pancakes.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        name : "Giant Milshake",
        price : 20.00,
        category : "Shakes",
        img : "./milkshake.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        name : "Cup of Coffee and Bread",
        price : 30.00,
        category : "Breakfast",
        img : "./Cup-of-Coffee-and-Bread.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 4,
        name : "Fried Egg and Bread Pklatter",
        price : 50.00,
        category : "Lunch",
        img : "./Fried-Egg-and-Bread-Pklatter.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 5,
        name : "Pastry-and-Boiled-Egg-on-Plate",
        price : 10.00,
        category : "Lunch",
        img : "./Pastry-and-Boiled-Egg-on-Plate.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
]

let filterBtns = document.querySelector(".filter__section");
window.addEventListener("DOMContentLoaded", () => {
    filterList();
    loadDishes();
});

const filterItemsByCategory = (btns) => {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e)=> {
            btns.forEach((btn) => btn.classList.remove("active"))
            selectCategory(e.target)
        })
    })
}

const selectCategory = (currentBtn) => {
    currentBtn.classList.add("active")
    matchCategory(currentBtn.textContent)
}

const matchCategory = (btn) => {
    const menuSection = Array.from(document.querySelectorAll(".menu__section .menuItems"));
    menuSection.forEach((item) => {
        if(item.getAttribute("data-category").toLowerCase() !== btn.toLowerCase()){
            item.classList.add("none")
        }else{
            item.classList.remove("none");
        }

        if(btn.toLowerCase() == "all"){
            item.classList.remove("none");
            loadDishes()
        }
    })
}

const filterList = () => {
    const myList = filterOptions();
    let html = ""
    myList.map((list) => {
        html += `
            <button class="filters" aria-label="button for filtering the food items">${list}</button>
        `
    });
    filterBtns.innerHTML += html;

    const allBtn = Array.from(document.querySelectorAll(".filters"));
    filterItemsByCategory(allBtn)
}

const filterOptions = () => {
    let myList = [];
        dishArray.map((item) => {
        if(!myList.includes(item.category)){
            myList.push(item.category)
        }
    }, [])
    return myList;
}
function loadDishes() {
    const menuSection = document.querySelector(".menu__section");
    let html = "";

    dishArray.forEach((item) => {
        html += `
        <div class="menuItems" data-category="${item.category}">                
                    <div class="menuItems__img">
                    <figure>
                        <img src="./assets/${item.img}" alt="food image">
                    </figure>
                    </div>
                    <div class="menus__details">
                        <header>
                            <h2>${item.name}</h2>
                            <p class="price">$${item.price.toFixed(2)}</p>
                        </header>
                        <p>${item.description}</p>
                    </div>
                </div>
        `
    });
    menuSection.innerHTML = html
}

