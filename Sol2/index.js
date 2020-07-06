import {fillToDoLiUl} from './utils.js';
import ToDo from './ToDo.js';

let todo = ToDo();
let tabSelected = 0; // uncompleted

renderUncompletedTodo();

// controllers
function todoUlClickHandler(element) {
    switch (element.target.className) {
        case "delete": {
            const id = element.target.parentNode.dataset.id;
            todo.deleteToDo(id);
            rerenderBaseOnTabSelected();
            break;
        }
        case "list-group-item": {
            const id = element.target.dataset.id;
            todo.toggleToDo(id);
            rerenderBaseOnTabSelected();
            break;
        }
    }
}

function renderUncompletedTodo() {
    tabSelected = 0;
    fillToDoLiUl("list-group", todo.getNewToDoLi(), todoUlClickHandler);
    resetButtonStyles();
    document.getElementById("uncompleted").classList.add("btn-success");
}

function renderCompletedTodo() {
    tabSelected = 1;
    fillToDoLiUl("list-group", todo.getCompletedToDoLi(), todoUlClickHandler);
    resetButtonStyles();
    document.getElementById("completed").classList.add("btn-success");
}

function rerenderBaseOnTabSelected() {
    if (tabSelected === 0) {
        renderUncompletedTodo();
    } else if (tabSelected === 1) {
        renderCompletedTodo();
    }
}

// event listeners
function resetButtonStyles() {
    document.getElementById("completed").classList.remove("btn-success");
    document.getElementById("uncompleted").classList.remove("btn-success");
}

function addTodoHandler(event) {
    let todoText = document.getElementById("new-to-do").value;
    todo.addTodo(todoText);
    document.getElementById("new-to-do").value="";
    rerenderBaseOnTabSelected();
}