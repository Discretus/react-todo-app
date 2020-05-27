import React from 'react';

export interface Todo {
  id: string;
  text: string;
  toggled?: boolean;
}

export interface TodoState {
  [id: string]: Todo;
}

export const SET_TODOS = 'SET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface SetTodosAction {
  type: typeof SET_TODOS;
  state: TodoState;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  text: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: string;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: string;
}

type Action = SetTodosAction | AddTodoAction | ToggleTodoAction | DeleteTodoAction;

export function persistState(state: TodoState): void {
  localStorage.setItem('todo_state', JSON.stringify(state));
}

export const todoReducer: React.Reducer<TodoState, Action> = (
  state: TodoState,
  action: Action
) => {
  switch (action.type) {
    case SET_TODOS: {
      return action.state;
    }
    case ADD_TODO: {
      const nextId = Object.values(state).length.toString();
      const newState = {
        ...state,
        [nextId]: {
          id  : nextId,
          text: action.text,
        }
      };
      persistState(newState);
      return newState;
    }
    case 'TOGGLE_TODO': {
      const item = state[action.id];
      if (!item) return state;
      const newState = {
        ...state,
        [action.id]: {
          ...item,
          toggled: !item.toggled,
        }
      };
      persistState(newState);
      return newState;
    }
    case 'DELETE_TODO': {
      if (state[action.id]) {
        let newState = {...state};
        delete newState[action.id];
        persistState(newState);
        return newState;
      } else return state;
    }
    default: {
      return state;
    }
  }
};