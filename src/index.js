import './styles.css';

import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/component.js';

export const todoList = new TodoList();

 
todoList.todos.forEach( crearTodoHtml );