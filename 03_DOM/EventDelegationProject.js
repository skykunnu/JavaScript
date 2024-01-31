const todoform=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todolist=document.querySelector(".todo-list");

todoform.addEventListener("submit",(e)=>{
    e.preventDefault(); // it prevents our webpage from refreshing.
    console.log(e.target);
    const newtodotext=todoInput.value;
    const newli=document.createElement("li");
    const newLiInnerHtml=`<span class="text">${newtodotext}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    newli.innerHTML=newLiInnerHtml;
    todolist.append(newli);
    todoInput.value=""; // to remove the output from input.
})
todolist.addEventListener("click",(e)=>{
    //check if user clicked on done button. -->(Event delagation concept being used)
   if(e.target.classList.contains("remove")){ // classList is a property of html element that provide access to the list of classes associated with that element, .contains(class)--> checks if the element has a particular class. 
    const ul=e.target.parentNode.parentNode;
    ul.remove();
   }

   
   if(e.target.classList.contains("done")){
    const lispan=e.target.parentNode.previousElementSibling;
    lispan.style.textDecoration="line-through";
   }
})