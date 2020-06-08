import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../redux/stateInterfaces';

const TodoList = () => {
  const todosDict = useSelector((state: ApplicationState) => state.todos);
  const todos = Object.values(todosDict);

  if (Object.values(todos).length === 0) {
    return <p className="center no-select">No todos</p>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
