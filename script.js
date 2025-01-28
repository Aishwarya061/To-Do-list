const addButton = document.getElementById('add-task');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="editTask(this)">Edit</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear input field
    }
}

// Function to delete a task
function deleteTask(button) {
    button.parentElement.remove();
}

// Function to edit a task
function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('span');
    const newText = prompt("Edit task:", taskText.textContent);
    if (newText) {
        taskText.textContent = newText;
    }
}

// Event listener for the add button
addButton.addEventListener('click', addTask);

// Event listener for 'Enter' key to add task
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});