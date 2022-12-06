const addTaskBtn = document.querySelector("#add-task-button");
const tasksDisplay = document.querySelector(".tasks-display")
const taskInput = document.querySelector(".task-input")
const tasksUl = document.querySelector("ul")

const allTasks = []

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text
    tasksUl.appendChild(li)
}


addTaskBtn.addEventListener("click" , () => {

    // create a new task object 
    const taskInfo = {
        task: taskInput.value,
        complete: false,
    }
    //push new object into alltasks array 

    allTasks.push(taskInfo)
    

    // tasksDisplay.textContent += taskInfo.task

    liMaker(taskInput.value)

    //clears out input field 

taskInput.value = " "

//store task into localStorage 

// localStorage.setItem("Tasks" , JSON.stringify(allTasks))


    
})

const tasksFromLocalStorage = JSON.parse(localStorage.getItem("Tasks"))

console.log(tasksFromLocalStorage)

if (tasksFromLocalStorage) {
        renderTasks()
}



function renderTasks () {

    for (let i = 0; i< tasksFromLocalStorage.length; i++) {
        tasksDisplay.textContent += tasksFromLocalStorage.task[i]
    }
   
  
}



//issues to solve
    //use local storage 
    //add delete edit and complete buttons 


