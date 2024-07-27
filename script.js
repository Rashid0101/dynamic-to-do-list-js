// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Define the addTask function
    function addTask(taskText = taskInput.value.trim(), save = true) {
        // Get and trim the value from the input field
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new list item (li) element and set its text content
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create a remove button and set its text content and class name
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Set an onclick event to remove the task
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
            removeTask(taskText);
        };

        // Append the remove button to the list item, then the list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';

        // Save the task to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Remove a task from Local Storage
    function removeTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Attach event listeners to the add button and the input field for keypress (Enter key)
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
