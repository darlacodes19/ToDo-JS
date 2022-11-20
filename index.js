const addTaskBtn = document.querySelector("#add-task-button");
const tasksDisplay = document.querySelector(".tasks-display")
const taskInput = document.querySelector(".task-input")

const allTasks = []

addTaskBtn.addEventListener("click" , () => {

    // create a new task object 
    const taskInfo = {
        task: taskInput.value,
        complete: false,
    }
    //push new object into alltasks array 

    allTasks.push(taskInfo)
    


    //map over array and display each tasks 
    const tasks = allTasks.map( task => {
        
        tasksDisplay.textContent += task.task
})
    
})


//issues to solve
    //upload to github 
    //clear input field after adding task
    //don't display tasks if they are already on the list after clicking add 
    //use local storage 

