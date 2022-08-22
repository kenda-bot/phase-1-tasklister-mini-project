// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector('form').addEventListener('submit', (e) =>{
//     e.preventdefault()
//   })
// });
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  const inputfield = document.getElementById("new-task-description").value;
  document.getElementById('tasks').innerHTML += `
     <li>${inputfield}</li>


`
  document.getElementById("new-task-description").value = ''

})



});