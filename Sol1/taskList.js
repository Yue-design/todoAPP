const taskInput = document.querySelector('#task');

// define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');


loadEventListeners();

// load all event listeners
function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTask);
}

// add task
function addTask(element) {
    if (taskInput.value === '') {
    alert('Missing Task Content');
    } else {
    const li = document.createElement('li');
    li.className = 'collection-item list-group-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    li.appendChild(link);
    taskList.appendChild(li);
    element.preventDefault();
    }
}

// remove task 
function removeTask(element) {
  if (element.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      element.target.parentElement.parentElement.remove();
    }
  }
}

// clear tasks
function clearTasks() {
  if (confirm('Are you sure?')) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
}
