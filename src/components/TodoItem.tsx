import React from 'react';
import { Todo, Action, DELETE_TODO, TOGGLE_TODO } from '../entities/store';
import { del, toggle } from '../entities/api';

interface TodoItemProps {
  todo: Todo;

  dispatch: React.Dispatch<Action>;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, dispatch }) => {
  const classes = ['todo'];

  const deleteTodo = async (id: number) => {
    const todo = await del(id);
    dispatch({
      type: DELETE_TODO,
      id: todo.id,
    });
  };

  const toggleTodo = async (id: number) => {
    const todo = await toggle(id);
    dispatch({
      type: TOGGLE_TODO,
      id: todo.id,
    });
  };

  if (todo.toggled) {
    classes.push('completed');
  }

  return (
    <li className={classes.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={todo.toggled}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
        <i
          className="material-icons red-text no-select"
          onClick={() => deleteTodo(todo.id)}
        >
          delete
        </i>
      </label>
    </li>
  );
};

export default TodoItem;
