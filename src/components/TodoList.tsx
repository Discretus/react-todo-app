import React from 'react';
import { Todo } from '../entities/store';
import TodoItem from './TodoItem';
import { Action } from '../entities/store';

interface TodoListProps {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, dispatch }) => {
  if (Object.values(todos).length === 0) {
    return <p className="center no-select">No todos</p>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} dispatch={dispatch} key={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
