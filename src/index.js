import './styles.css';
import {Todo, TodoList } from './classes/index'; //we have defined in index all the classes.
import { crearTodoHtml } from './js/componentes';




export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml (todo));




