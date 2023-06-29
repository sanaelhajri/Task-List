// Fonction pour ajouter une tâche à la liste
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        return;
    }

    var taskText = taskInput.value;
    var taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
<input type="checkbox" onchange="updateTask(this)">
<span class="task-text">${taskText}</span>
<span class="delete-button" onclick="deleteTask(this)">&times;</span>
`;

    taskList.appendChild(taskElement);
    taskInput.value = '';
}

// Fonction pour mettre à jour l'état d'une tâche (complétée ou non)
function updateTask(checkbox) {
    var taskText = checkbox.nextSibling;
    if (checkbox.checked) {
        taskText.style.textDecoration = 'line-through';
    } else {
        taskText.style.textDecoration = 'none';
    }
}

// Fonction pour supprimer une tâche de la liste
function deleteTask(deleteButton) {
    var taskElement = deleteButton.parentNode;
    taskElement.remove();
}

// Fonction pour gérer l'appui sur la touche Entrée dans le champ de saisie
function handleKeyDown(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}