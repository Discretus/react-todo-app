import { Todo } from './store';

const url = 'https://kk-react-todo-app.herokuapp.com/todos';
// const url = 'http://localhost:4000/todos';

export const getAll = async (): Promise<Todo[]> => {
  return fetch(url, {
    method: 'GET',
  }).then((response) => response.json());
};

export const add = async (text: string): Promise<Todo> => {
  return fetch(url + `?text=${text}`, {
    method: 'POST',
  }).then((response) => response.json());
};

export const del = async (id: number): Promise<Todo> => {
  return fetch(url + `/${id}`, {
    method: 'DELETE',
  }).then((response) => response.json());
};

export const toggle = async (id: number): Promise<Todo> => {
  return fetch(url + `/${id}`, {
    method: 'POST',
  }).then((response) => response.json());
};
