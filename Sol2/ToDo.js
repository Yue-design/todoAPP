function ToDo() {
    // naming convention: todos VS todoli
    let todoli = []; // how to read from the local storage?

    if (localStorage.getItem("todoli")) {
        todoli = JSON.parse(localStorage.getItem(todoli));
    }

    function saveToLocalStorage() { // token
        localStorage.setItem("todoli", JSON.stringify(todoli));
    }

    function getToDoLi() {
        return todoli;
    }

    function getNewToDoLi() {
        return todoli.filter((todo) => {
            return todo.completed === false;
        })
    }

    function getCompletedToDoLi() {
        return todoli.filter((todo) => {
            return todo.completed === true;
        })
    }

    function addToDo(text) {
        const todoObj = {
            id: cuid(),
            text,
            completed: false
        }
        todoli = [todoObj, ...todoli];
        saveToLocalStorage();
    }

    function deleteToDo(id) {
        todoli = todoli.filter((item) => {
            return item.id !== id; // why?
        })
        saveToLocalStorage();
    }

    function toggleToDo(id) {
        let todo = todo.find((item) => {
            return item.id === id;
        })
        todo.completed = !todo.completed; // what does this line mean?
        saveToLocalStorage();
    }

    return {
        getToDoLi, getNewToDoLi, getCompletedToDoLi, addToDo, deleteToDo, toggleToDo
    }
}

export default ToDo;