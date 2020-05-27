import React, {useEffect, useReducer} from 'react';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import {ADD_TODO, DELETE_TODO, SET_TODOS, Todo, todoReducer, TOGGLE_TODO} from '../entities/store';

const TodosPage: React.FC = () => {
  const [todosDict, dispatch] = useReducer(todoReducer, {});

  useEffect(() => {
    const state: string | null = localStorage.getItem('todo_state');
    if (state) {
      dispatch({
        type : SET_TODOS,
        state: JSON.parse(state)
      });
    }
  }, []);

  const todos: Todo[] = Object.values(todosDict).reverse();

  const addTodo = (text: string) =>
    dispatch({
      type: ADD_TODO,
      text,
    });

  const deleteTodo = (id: string) =>
    dispatch({
      type: DELETE_TODO,
      id,
    });

  const toggleTodo = (id: string) =>
    dispatch({
      type: TOGGLE_TODO,
      id,
    });

  return (
    <React.Fragment>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </React.Fragment>
  );
};

export default TodosPage;
