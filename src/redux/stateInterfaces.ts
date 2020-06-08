import { Todo } from './entities';

export interface TodoState {
  [id: number]: Todo;
}

export interface ApplicationState {
  todos: TodoState;
}
