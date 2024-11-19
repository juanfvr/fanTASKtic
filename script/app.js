document.querySelector('#btn-submit').addEventListener('click', (event) => {
    event.preventDefault();
    // hidden the task example
    const taskExample = document.querySelector('#taskExample');
    taskExample.classList.add('hidden');

    // capturing input values
    const taskName = document.querySelector('#taskName').value;
    const taskTime = document.querySelector('#taskTime').value;
    // creating and adding to task list
    taskTime === "00:00" || taskName === "" ? alert('Insira um valor') : createTask(taskName, taskTime)

})

function createTask(taskName, taskTime) {
    // section & div child
    const section = document.querySelector('#task-section');
    const taskDiv = document.createElement('div'); 
    taskDiv.classList.add('flex', 'p-2', 'justify-between', 'border-2', 'border-blue-500', 'h-14', 'rounded-lg');
    section.append(taskDiv);

    // checkbox & name area
    const taskArea = document.createElement('div');
    taskArea.classList.add('flex', 'flex-row', 'gap-2', 'text-blue-950');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    const task = document.createElement('p');
    taskDiv.append(taskArea);
    task.classList.add('select-none', 'self-center')
    task.textContent = taskName;
    taskArea.append(checkbox);
    taskArea.append(task);

    // remaining time & trash action
    const actions = document.createElement('div');
    actions.classList.add('flex', 'flex-row', 'gap-4')
    const remainingTime = document.createElement('span');
    remainingTime.classList.add('select-none', 'self-center', 'text-blue-950');
    remainingTime.textContent = `Até ${taskTime}`;
    const trashAction = document.createElement('button');
    trashAction.classList.add('flex', 'justify-center', 'w-10', 'p-2', 'bg-blue-500', 'rounded-lg');
    const trashLogo = document.createElement('img');
    trashLogo.setAttribute('src', '/src/stocks/trash-bin.svg');
    trashLogo.setAttribute('alt', 'Enviar');
    taskDiv.append(actions);
    actions.append(remainingTime);
    actions.append(trashAction);
    trashAction.append(trashLogo);

}