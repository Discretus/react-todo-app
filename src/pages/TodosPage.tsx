import React, { useEffect, useReducer } from 'react';

import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { ADD_TODO, SET_TODOS, Todo, todoReducer } from '../entities/store';
import { getAll, add } from '../entities/api';

const TodosPage = () => {
  const [todosDict, dispatch] = useReducer(todoReducer, {});

  useEffect(() => {
    getAll().then((res) => {
      dispatch({
        type: SET_TODOS,
        state: res,
      });
    });
  }, []);

  const todos: Todo[] = Object.values(todosDict);

  const addTodo = async (text: string) => {
    const todo = await add(text);
    dispatch({
      type: ADD_TODO,
      todo,
    });
  };

  return (
    <React.Fragment>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} dispatch={dispatch} />
    </React.Fragment>
  );
};

export default TodosPage;
