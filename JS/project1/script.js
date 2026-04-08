let tasks = [];


function addTask() {
    let text = document.getElementById("taskInput").value.trim();

    if (text === "") {
        alert("Enter a task");
        return;
    }

    let task = {
        name: text,
        done: false,
        time: new Date().toLocaleTimeString()
    };

    tasks.push(task);
    showTasks(tasks);

    document.getElementById("taskInput").value = "";
}


function showTasks(list) {
    let ul = document.getElementById("taskList");
    ul.innerHTML = "";

    list.map(task => {
        let li = document.createElement("li");
        li.innerHTML = task.name + " (" + task.time + ")";
        ul.appendChild(li);
    });
}



function showDone() {
    let doneTasks = tasks.filter(task => task.done === true);
    showTasks(doneTasks);
}

function showAll() {
    showTasks(tasks);
}


function markDone(index) {
    tasks[index].done = true;
    showTasks(tasks);
}

