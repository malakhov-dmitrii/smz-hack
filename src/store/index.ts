import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import todos, { TodosState } from './Todos/todos.reducer';
import { createTodo$, getTodosList$ } from './Todos/todos.effect';
import config, { ConfigState } from './Config/Config.reducer';

export interface Store {
  todos: TodosState;
  config: ConfigState;
}

const observableMiddleware = createEpicMiddleware();

const reducers = combineReducers({
  todos,
  config
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(observableMiddleware)));

observableMiddleware.run(
  combineEpics<any>(
    getTodosList$,
    createTodo$,
  ),
);
