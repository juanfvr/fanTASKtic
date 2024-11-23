let taskProps = {
    names: [],
    times: []
}

document.querySelector('#btn-submit').addEventListener('click', (event) => {
    event.preventDefault();

    // capturing input values
    const taskName = document.querySelector('#taskName').value;
    const taskTime = document.querySelector('#taskTime').value;

    // check if task already exists
    if(taskProps.names.includes(taskName)) {
        alert('Essa tarefa já existe.')
    } else {
        if(taskName == "" || taskTime === "") {
            alert('Tarefa em branco');
        } else {
            // creating and adding to task list
            taskProps.names.push(taskName);
            taskProps.times.push(taskTime);
            createTask(taskProps.names.at(-1), taskProps.times.at(-1));
        }
    }
})

const section = document.querySelector('#task-section');



function createTask(taskName, taskTime) {
    // task example can't be excluded
    const taskExample = document.querySelector('#taskExample');
    taskExample.classList.add('hidden');

    return section.innerHTML += `
    <div class="relative flex p-2 justify-between border-2 border-blue-500 h-14 rounded-lg">
        <div class="flex flex-row gap-2 text-blue-950">
            <input type="checkbox">
            <p class="select-none self-center">${taskName}</p>
        </div>
        <div class="flex flex-row gap-4">
            <span class="select-none self-center text-blue-950">Até: ${taskTime}</span>
            <button class="btn-exclude flex justify-center w-10 p-2 bg-blue-500 rounded-lg">
                <img src="/src/stocks/trash-bin.svg" alt="Enviar">
            </button>
        </div>
    </div>
    `

    // BUG: when excluding a task, all tasks are excluded.
    // const btnExclude = document.querySelector('.btn-exclude').addEventListener('click', (event) => {
    //     event.preventDefault();
    //     section.remove();
    // })
}