import { SET_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './todoTypes';
import { TodoAction } from './todoActions';
import { TodoState } from '../stateInterfaces';

export const todoReducer = (state: TodoState = {}, action: TodoAction) => {
  switch (action.type) {
    case SET_TODOS: {
      let newState: TodoState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    }
    case ADD_TODO: {
      const todo = action.todo;
      const newState = {
        ...state,
        [todo.id]: {
          id: todo.id,
          text: todo.text,
        },
      };
      return newState;
    }
    case TOGGLE_TODO: {
      const item = state[action.id];
      if (!item) return state;
      const newState = {
        ...state,
        [action.id]: {
          ...item,
          toggled: !item.toggled,
        },
      };
      return newState;
    }
    case DELETE_TODO: {
      if (state[action.id]) {
        let newState = { ...state };
        delete newState[action.id];
        return newState;
      } else return state;
    }
    default: {
      return state;
    }
  }
};
