import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from '../reducers/index';
import rootEpic, { epicDependencies } from '../epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: epicDependencies,
});

const middleWares = [applyMiddleware(epicMiddleware)];

if (process.env.NODE_ENV !== 'production') {
  middleWares.push(applyMiddleware(createLogger()));
}

export default (state = {}) => createStore(
  rootReducer,
  state,
  compose(...middleWares),
);
