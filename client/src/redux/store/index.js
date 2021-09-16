import { createStore, applyMiddleware, compose } from 'redux';
import pokemonReducer from '../reducer/index';
import thunkMiddleware from 'redux-thunk'

export const store = createStore(
  pokemonReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)