import React from 'react';
import {Todo} from '../entities/store';

interface TodoListProps {
  todos: Todo[];

  toggleTodo(id: string): void;

  deleteTodo(id: string): void;
}

const TodoList: React.FC<TodoListProps> = ({todos, toggleTodo, deleteTodo}) => {
  if (Object.values(todos).length === 0) {
    return <p className="center no-select">No todos</p>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo'];
        if (todo.toggled) {
          classes.push('completed');
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.toggled} onChange={() => toggleTodo(todo.id)}/>
              <span>{todo.text}</span>
              <i className="material-icons red-text no-select" onClick={() => deleteTodo(todo.id)}>delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );

};

export default TodoList;