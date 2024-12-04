// Step 1: Create a function to dynamically add tasks to the list when the user enters them
function addTask() {
    // Get references to the input field and the task list
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim(); // Get the task text and remove extra spaces

    // Check if the input is not empty
    if (taskText !== '') {
        // Create a new list item (task)
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Append the new task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field for the next task
        taskInput.value = '';
    }
}

// Step 2: Add an event listener to the "Add Task" button to trigger task addition
document.getElementById('addTask').addEventListener('click', addTask);

// Step 3: Allow users to add tasks by pressing the "Enter" key
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // If the Enter key is pressed
        addTask(); // Trigger the addTask function
    }  
});

// Step 4: Allow users to mark tasks as completed or incomplete by clicking on them
const taskList = document.getElementById('taskList');
taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') { // Check if the clicked element is a list item
        // Toggle the "completed" class to mark the task as completed or incomplete
        event.target.classList.toggle('completed');
    }
});

// Step 5: Create a function to filter tasks based on their completion status (All, Completed, Incomplete)
function filterTasks() {
    const statusFilter = document.getElementById('statusFilter'); // Get the filter dropdown
    const status = statusFilter.value; // Get the selected filter option
    const taskItems = document.querySelectorAll('#taskList li'); // Get all task list items

    taskItems.forEach(function(taskItem) {
        // Filter tasks based on their status
        if (status === 'all') {
            taskItem.style.display = 'block'; // Show all tasks
        } else if (status === 'completed') {
            // Show only tasks that are completed
            taskItem.style.display = taskItem.classList.contains('completed') ? 'block' : 'none';
        } else if (status === 'incomplete') {
            // Show only tasks that are not completed
            taskItem.style.display = taskItem.classList.contains('completed') ? 'none' : 'block';
        }
    });
}

// Step 6: Store tasks in localStorage to persist them across page refreshes
window.addEventListener('beforeunload', function() {
    const taskItems = document.querySelectorAll('#taskList li'); // Get all task items
    const tasks = Array.from(taskItems).map(function(taskItem) {
        return {
            text: taskItem.textContent, // Store task text
            completed: taskItem.classList.contains('completed') // Store completion status
        };
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Store tasks as a JSON string in localStorage
});

// Step 7: Load tasks from localStorage when the page loads
window.addEventListener('load', function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Retrieve tasks from localStorage

    if (tasks) { // Check if there are tasks stored
        tasks.forEach(function(task) {
            // Create a list item for each task
            const taskItem = document.createElement('li');
            taskItem.textContent = task.text;

            // If the task is completed, add the "completed" class
            if (task.completed) {
                taskItem.classList.add('completed');
            }

            // Append the task item to the task list
            document.getElementById('taskList').appendChild(taskItem);
        });
    }
});
