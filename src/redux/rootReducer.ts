import { TodoState } from './stateInterfaces';
import { todoReducer } from './todos/todoReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export interface ApplicationState {
  todos: TodoState;
}
