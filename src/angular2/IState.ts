/**
 * @interface IData
 */

export interface ITodo {
    id: number,
    text: string,
    completed: boolean    
}

export interface IState {
  visibilityFilter: string,
  todos: ITodo[]
}