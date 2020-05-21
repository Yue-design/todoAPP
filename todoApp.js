var task = new Array();

function addItem(e) {
    return task.push(e);
}

function deleteItem(e) {
    delete e;
    return task;
}

function clearItems(task) {
    return [];
}