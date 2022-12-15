const addTaskBtn = document.querySelector("#add-task-button");
const tasksDisplay = document.querySelector(".tasks-display")
const taskInput = document.querySelector(".task-input")
const tasksUl = document.querySelector("ul")

const allTasks = []


const tasksFromLocalStorage = JSON.parse(window.localStorage.getItem("Tasks")) || []



const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text
    tasksUl.appendChild(li)
}


addTaskBtn.addEventListener("click" , (e) => {

e.preventDefault()

    // create a new task object 
    // const taskInfo = {
    //     task: taskInput.value,
    //     complete: false,
    // }
    //push new object into alltasks array 
    //push task into array
    tasksFromLocalStorage.push(taskInput.value)
    

    // tasksDisplay.textContent += taskInfo.task
//stringify tasksFromLocalStorage array
    window.localStorage.setItem("Tasks" , JSON.stringify(tasksFromLocalStorage))

    liMaker(taskInput.value)

    //clears out input field 

taskInput.value = " "

//store task into localStorage 




    
})




if (tasksFromLocalStorage) {
        renderTasks()
}



function renderTasks () {

   tasksFromLocalStorage.forEach((item) => {
       liMaker(item.task)
   })
   
  
}



//issues to solve
    //everytime I refresh and then click on add a new task it goes away
        //maybe because i'm creating a new task object each time??? 
    //add delete edit and complete buttons 
    //finish design 


