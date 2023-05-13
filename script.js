const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function getFormattedDate() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  return `${day}/${month}/${year} --
   ${hours}:${minutes}:${seconds}`;
}

function addTask(taskText, taskDate) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskTitle = document.createElement('span');
  taskTitle.className = 'task-title';
  taskTitle.textContent = taskText;

  const taskDateElement = document.createElement('span');
  taskDateElement.className = 'task-date';
  taskDateElement.textContent = taskDate;

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remover';
  removeButton.className = 'remove-button';

  taskItem.appendChild(taskTitle);
  taskItem.appendChild(taskDateElement);
  taskItem.appendChild(removeButton);

  taskList.appendChild(taskItem);
}

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const taskText = taskInput.value;

  if (taskText.trim() === '') {
    alert('Por favor, insira uma tarefa válida.');
    return;
  }

  const formattedDate = getFormattedDate();

  addTask(taskText, formattedDate);

  taskInput.value = '';
});

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-button')) {
    const taskItem = event.target.closest('.task-item');
    taskList.removeChild(taskItem);
  }
});
