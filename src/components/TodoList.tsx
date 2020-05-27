import React from 'react';
import {Todo} from '../entities/store';
import TodoItem from './TodoItem';

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
        return <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>;
      })}
    </ul>
  );

};

export default TodoList;