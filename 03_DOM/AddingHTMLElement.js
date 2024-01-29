// innerHTML to add html element---> (we should avoid using it due to performance issue as the browser renders previous items also along with current one)
//  const TodoList=document.querySelector(".todo-list");
// TodoList.innerHTML="<li>Todo 2</li>";
// TodoList.innerHTML+="<li>Todo 2</li>";
// TodoList.innerHTML+="<li>Todo 3</li>";
// console.log(TodoList.innerHTML);


// New way to add html elements
// document.createElement()
// append--> (add elements in the last)
// prepend--> 
// remove

// const newTodoItem=document.createElement("li");
// const newTodoItemtext=document.createTextNode("Teach student");
// Rather than creating a text node, we can short above line by below statement
// newTodoItem.textContent="Todo 2";
// newTodoItem.append(newTodoItemtext);
// const TodoList=document.querySelector(".todo-list");
// TodoList.append(newTodoItem); // add elements in the last.
// TodoList.prepend(newTodoItem); // add elements in the first.
// console.log(newTodoItem);

/* To remove todo 1 */
// const todo1=document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);


// before and after
const newTodoItem=document.createElement("li");
newTodoItem.textContent="Todo 2";
const TodoList=document.querySelector(".todo-list");
TodoList.before(newTodoItem); // Todo 2 will print before the TodoList.
TodoList.after(newTodoItem); // Todo 2 will print after the TodoList. 
