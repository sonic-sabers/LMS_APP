import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import autheReducers from './reducers/auth';
const rootReducer = combineReducers({
    auth: autheReducers
});
  
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;