let taskProps = {
    names: [],
    times: []
}

const btn = document.querySelector('#btn-submit')

btn.addEventListener('click', (event) => {
    event.preventDefault();
    // capturing input values
    const taskName = document.querySelector('#taskName').value;
    const taskTime = document.querySelector('#taskTime').value;

    switch(taskName == "" || taskTime === "") {
        case true:
            alert('Tarefa em branco');
        case false: 
        // check if task already exists
            if(taskProps.names.includes(taskName)) {
                alert('Essa tarefa já existe.')
            } else {
                // creating and adding to task list
                taskProps.names.push(taskName);
                taskProps.times.push(taskTime);
                createTask(taskProps.names.at(-1), taskProps.times.at(-1));
            }
    }
})


function createTask(taskName, taskTime) {
    // hidden task example
    const taskExample = document.querySelector('#taskExample');
    taskExample.classList.add('hidden');
    // section parent & div child
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

    // BUG: when i remove the tasks, arrays value (names & times) still exist
    trashAction.addEventListener('click', () => {
        section.removeChild(taskDiv);
    });
}