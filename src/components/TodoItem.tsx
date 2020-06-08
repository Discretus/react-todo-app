import React from 'react';
import { Todo } from '../redux/entities';
import { useDispatch } from 'react-redux';
import { toggleTodoS, deleteTodoS } from '../redux/todos/todoActions';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useDispatch();
  const classes = ['todo'];

  if (todo.toggled) {
    classes.push('completed');
  }

  return (
    <li className={classes.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={todo.toggled}
          onChange={() => dispatch(toggleTodoS(todo.id))}
        />
        <span>{todo.text}</span>
        <i
          className="material-icons red-text no-select"
          onClick={(e) => {
            e.preventDefault();
            dispatch(deleteTodoS(todo.id));
          }}
        >
          delete
        </i>
      </label>
    </li>
  );
};

export default TodoItem;
