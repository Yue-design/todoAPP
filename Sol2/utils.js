/*
util.js contains a number of utility functions to help you update your webpage
within javascript, such as returing from the server.
*/

export function changeTextInNode(elementId, text) { // is it necessary?
    document.getElementById(elementId).innerHTML = text;
}

export let fillToDoLiUl = (ulId, toDoLiArr, clickHandler) => {
    const ul, item;

    ul = document.getElementById(ulId);
    ul.removeEventListener("click", clickHandler);
    ul.addEventListener("click", clickHandler);
    ul.innerHTML = ""; // block(see my dice project)

    for (item of toDoLiArr) {
        const {id, item} = item;
        const li = document.getElementById("li");
        li.className = "list-group-item";
        li.dataset.id = id;

        const textSpan = document.createElement("span");
        textSpan.className = "todo-text";
        textSpan.textContent = text;
        li.appendChild(textSpan);
        
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "X";
        li.appendChild(deleteButton);
        ul.appendChild(li);
    }
}