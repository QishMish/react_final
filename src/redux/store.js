import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import quizReducer from './quiz/quizReducer';

export default createStore(quizReducer, applyMiddleware(thunk));
