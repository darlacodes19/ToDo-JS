const addTaskBtn = document.querySelector("#add-task-button");
const tasksDisplay = document.querySelector(".tasks-display")
const taskInput = document.querySelector(".task-input")
const tasksUl = document.querySelector("ul")
const tasksFromLocalStorage = JSON.parse(window.localStorage.getItem("Tasks")) || []



function deleteItem (index) {
tasksFromLocalStorage.splice(index,1)
window.localStorage.setItem("Tasks" , JSON.stringify(tasksFromLocalStorage))


}

function addEventListener (thing) {
    for (let i =0; i<thing.length; i++) {   
        thing[i].addEventListener('click' , () => {
           
            deleteItem(i)
           
            
          
        })
    }

}

const liMaker = (text) => {
//create new div

    const itemDiv = document.createElement('div')
    itemDiv.className="items"
    tasksUl.appendChild(itemDiv)
//create deletebutton
    const deleteButton = document.createElement('button')
    deleteButton.className="delete-button"
    deleteButton.textContent="Delete"
    const deletebtn = document.querySelectorAll('.delete-button')
    addEventListener(deletebtn)
    
   
    
   

//create list task item 
    const li = document.createElement('li');
    li.textContent = text
    itemDiv.appendChild(li)
    itemDiv.appendChild(deleteButton)
}


//ADD NEW TASK

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


location.reload()
    
})





if (tasksFromLocalStorage) {
        renderTasks()
}



function renderTasks () {


    for (let i =0; i<tasksFromLocalStorage.length; i++) {
        
        liMaker(tasksFromLocalStorage[i])
    }

   
   
  
}






//issues to solve
    //add delete edit and complete buttons 
    //finish design 


