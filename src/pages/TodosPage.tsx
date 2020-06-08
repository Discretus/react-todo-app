import React, { useEffect } from 'react';
import { fetchTodosS } from '../redux/todos/todoActions';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { useDispatch } from 'react-redux';

const TodosPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodosS());
  }, []);
  return (
    <React.Fragment>
      <TodoInput />
      <TodoList />
    </React.Fragment>
  );
};

export default TodosPage;
