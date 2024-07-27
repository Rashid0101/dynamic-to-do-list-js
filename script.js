// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the input field is not empty
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
        };

        // Append the remove button to the list item, then the list item to the task list
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach event listeners to the add button and the input field for keypress (Enter key)
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
