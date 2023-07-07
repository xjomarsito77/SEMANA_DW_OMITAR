const input = document.querySelector("#newtask_input")
const display = document.querySelector(".tasks")
var tasks = []

function displayTasks() { 
    let result = ""
    for (let index = 0; index < tasks.length; index++) {
        const element = tasks[index];
        result += `<div id="${index}" class="task">
            <input type="checkbox" onclick="selectTask(${index})">
            <span>${element}</span>
            <button onClick="deleteTask(${index})"><img src="./IMG/CANECA.svg"></button>
        </div>`
    }
    display.innerHTML = result
}

function addTask() { 
    if (input.value.replaceAll(" ","") == "") return
    tasks.push(input.value)
    input.value = ""
    displayTasks()
}

function deleteTask(index) { 
    if (index >= 0 && index < tasks.length) tasks.splice(index, 1)
    displayTasks()
}

function selectTask(index) {
    const task = document.getElementById(index)
    task.classList.toggle("-selected")
}