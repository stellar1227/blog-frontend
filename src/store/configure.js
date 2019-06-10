//스토어 생성 configure 
// store를 클라이언트에서 생성하지만 추후 SSR을 할 때 서버에서도 호출해야 함 그래서 만듬
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// 개발 모드일 때만 redux devtools를 적용합니다.
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__;
const composeEnhancers = devtools || compose;

//preloadedState는 추후 SSR을 했을때 전달받는 초기 상태
const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default configure;