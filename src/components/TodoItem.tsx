import React, {useCallback} from 'react';
import {Todo} from '../entities/store';

interface TodoItemProps {
  todo: Todo;

  toggleTodo(id: string): void;

  deleteTodo(id: string): void;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, toggleTodo, deleteTodo}) => {
  const classes = ['todo'];

  const onToggle = useCallback(() => toggleTodo(todo.id), [todo.id]);

  const onDelete = useCallback(() => deleteTodo(todo.id), [todo.id]);

  if (todo.toggled) {
    classes.push('completed');
  }

  return (
    <li className={classes.join(' ')} key={todo.id}>
      <label>
        <input type="checkbox" checked={todo.toggled} onChange={onToggle}/>
        <span>{todo.text}</span>
        <i className="material-icons red-text no-select" onClick={onDelete}>delete</i>
      </label>
    </li>
  );
};

export default TodoItem;