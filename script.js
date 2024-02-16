const inputElement = document.getElementById("todo-input");
const todoListElement = document.getElementById("todo-list");

function handleOnClick(){
    if(inputElement.value === ''){
        alert("You must write something!");
    }
    else{
        const todoCard = document.createElement("div");
        todoCard.classList.add("todo-card");
        const heading3 = document.createElement("h3");
        heading3.innerHTML = inputElement.value;
        heading3.classList.add("checked");
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        todoCard.appendChild(heading3);
        todoListElement.appendChild(todoCard);
        todoCard.appendChild(span);

        inputElement.value = "";
        saveData();
    }
}

todoListElement.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", todoListElement.innerHTML);
}

function showTask(){
    todoListElement.innerHTML = localStorage.getItem("data");
}

showTask(); 
