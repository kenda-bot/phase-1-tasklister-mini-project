// document.addEventListener("DOMContentLoaded", () => {
//  
  let form =document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()

  const newTask = document.getElementById("new-task-description").value;
  console.log(newTask)
  buildTasks(newTask)
  })

  function buildTasks(task){
    const li= document.createElement('li');
    li.textContent=task;

    const button=document.createElement('button');
    button.addEventListener("click" ,handleDelete);
    button.textContent='x'

     li.appendChild(button)
    const theList=document .querySelector('#tasks')
    theList.appendChild(li)
  }
  function handleDelete(event){
    event.target.parentNode.remove();
  }