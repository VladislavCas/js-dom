const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) =>{
    e.preventDefault();

    if (direction == "right") {
        itemsList.appendChild(itemsList.firstElementChild);
    } else {
        itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
    }
}

right.addEventListener("click", e => {
    e.preventDefault();
    
    loop("right", e);
});

left.addEventListener("click", e => {
    e.preventDefault();
    
    loop("right", e);
})