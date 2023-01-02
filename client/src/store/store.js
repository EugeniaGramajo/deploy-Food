import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/reducers';
import thunk from 'redux-thunk';



const store = createStore(reducer,applyMiddleware(thunk));

export default store;