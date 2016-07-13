/**
 * @interface IState
 */

import {ITodo} from './todo.interface';

export interface IState {
  visibilityFilter: string;
  todos: ITodo[];
}
