import { Todo, TodoList } from '../classes';
import {todoList} from '../index';


// reference to the HTML

const divTodoList = document.querySelector('.todo-list');
const Inputnewtodo = document.querySelector('.new-todo');
const Buttonclearcompleted = document.querySelector('.clear-completed');
const ulfilters = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = (todo) =>{
     const htmlTodo = 
            `<li class="${(todo.completed) ? 'completed' : ''}" data-id="${todo.id}">
				<div class="view">
					<input class="toggle" type="checkbox" ${(todo.completed) ? 'checked' : ''}>
					<label>${todo.tarea}</label>
					<button class="destroy"></button>
				</div>
				<input class="edit" value="Create a TodoMVC template">
            </li> -->`;
            
           
           
         const div = document.createElement('div');
         div.innerHTML = htmlTodo;
        divTodoList.append( div.firstElementChild); 

        return div.firstElementChild;



}


//events
//In this event we add a new todo in the list
Inputnewtodo.addEventListener('keyup', (event) =>{
  if (event.keyCode === 13 && Inputnewtodo.value.length > 0 ){
     
     const nuevoTodo = new Todo(Inputnewtodo.value);
     todoList.nuevoTodo(nuevoTodo);
     crearTodoHtml(nuevoTodo)
     Inputnewtodo.value = ''; //we remove the task that we write after to press enter

  }


});

divTodoList.addEventListener('click', (event) =>{

   const nameOfElement = event.target.localName; //this indicate to which element we did "click", can be label, input etc
                                                   //input = checkbox, label = name of todo, button = to remove task
   const todoElement  = event.target.parentElement.parentElement;

   
   const todoId = todoElement.getAttribute('data-id')

   if (nameOfElement.includes('input')){
         todoList.changeTodo(todoId);
         todoElement.classList.toggle('completed');


   }

   else if(nameOfElement.includes('button')){
      todoList.eliminarTodo(todoId);
      divTodoList.removeChild( todoElement )
   }



});

Buttonclearcompleted.addEventListener('click', () => {

   todoList.removeCompletedTodo();
   for (let  i = divTodoList.children.length -1; i>=0 ; i--)
   
   {
    const elemento = divTodoList.children[i];
      if(elemento.classList.contains('completed') ){
         divTodoList.removeChild(elemento);
            }    
   
   }
});


ulfilters.addEventListener('click' , (event )=>{

const filtro = event.target.text; //it can be completados , pendiente  o todos

if(!filtro) {return};

anchorFiltros.forEach(elem => elem.classList.remove('selected'));   
event.target.classList.add('selected');



 for(const elemento of divTodoList.children){
   
   elemento.classList.remove('hidden'); // this class is in css file .
   const completado = elemento.classList.contains('completed'); //we will have the value of completed here
   
   switch (filtro) {
      case 'Pendientes':
         if(completado){
            elemento.classList.add('hidden')
         }
         break;
      case 'Completados':
         if(!completado){
            elemento.classList.add('hidden')
         }
      break;
    }
   
 
  }

})