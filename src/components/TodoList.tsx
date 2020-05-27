import React from 'react';
import {TodoState} from '../entities/Intefaces';

interface TodoListProps {
  todos: TodoState

  toggleTodo(id: string): void

  deleteTodo(id: string): void
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, deleteTodo}) => {
  console.log('render list');
  if (Object.values(todos).length === 0) {
    return <p className="center no-select">No todos</p>;
  }

  return (
    <ul>
      {Object.values(todos).reverse().map((todo) => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}/>
              <span>{todo.title}</span>
              <i className="material-icons red-text no-select" onClick={() => deleteTodo(todo.id)}>delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );

};

export default TodoList;