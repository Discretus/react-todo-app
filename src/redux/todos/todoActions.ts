import { Dispatch } from 'redux';
import { SET_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoTypes';
import { Todo } from '../entities';

// Action interfaces

interface SetTodosAction {
  type: typeof SET_TODOS;
  todos: Todo[];
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  todo: Todo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

// Todo Action Type

export type TodoAction =
  | SetTodosAction
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction;

// Simple Action creators

function addTodo(todo: Todo): AddTodoAction {
  return {
    type: ADD_TODO,
    todo,
  };
}

function setTodos(todos: Todo[]): SetTodosAction {
  return {
    type: SET_TODOS,
    todos,
  };
}

function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

function deleteTodo(id: number): DeleteTodoAction {
  return {
    type: DELETE_TODO,
    id,
  };
}

// API Actions

const url =
  process.env.NODE_ENV === 'production'
    ? 'https://kk-react-todo-app.herokuapp.com/todos'
    : 'http://localhost:4000/todos';

export function addTodoS(text: string) {
  return async (dispatch: Dispatch) => {
    const todo = await fetch(url + `?text=${text}`, {
      method: 'POST',
    }).then((response) => response.json());
    dispatch(addTodo(todo));
  };
}

export function fetchTodosS() {
  return async (dispatch: Dispatch) => {
    const todos = await fetch(url, {
      method: 'GET',
    }).then((response) => response.json());
    dispatch(setTodos(todos));
  };
}

export function toggleTodoS(id: number) {
  return async (dispatch: Dispatch) => {
    const todo: Todo = await fetch(url + `/${id}`, {
      method: 'POST',
    }).then((response) => response.json());
    dispatch(toggleTodo(todo.id));
  };
}

export function deleteTodoS(id: number) {
  return async (dispatch: Dispatch) => {
    const todo: Todo = await fetch(url + `/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
    dispatch(deleteTodo(todo.id));
  };
}
