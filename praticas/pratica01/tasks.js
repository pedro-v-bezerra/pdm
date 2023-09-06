let tasks = [];
var id1 = 0;

const tarefa1 = {
    id: id1,
    name: "Dormir",
    completed: true
}

tasks.push(tarefa1);

const getTasks = () => tasks;

const addTasks = (taskName) => {
    id1 += 1;
    const novaTarefa = {
        id: id1,
        name: taskName,
        completed: false,
    };
    tasks.push(novaTarefa);
}

const removeTask = (idTask) => {
    const novaTask = tasks.filter((task) => task.id !== idTask);
    tasks = novaTask;
    
}


const updateTask = (idTask, props) => {
    const atualizaTask = tasks.findIndex((task) => task.id === idTask);
    tasks[atualizaTask].name = props.name
    tasks[atualizaTask].completed = props.completed
}

