import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
// import thunkMiddleware from 'redux-thunk';
import DevTools from './devtools';
import errorMiddleware from './error-middleware';
import loggerMiddleware from './logger-middleware';
// // import {loadingBarMiddleware} from 'react-redux-loading-bar';
// import reducer, {IRootState} from "../../shared/reducers";
// import reducerTest from "./store/root-reducer";
import notificationMiddleware from './notification-middleware';
import websocketMiddleware from './websocket-middleware';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './store/root-saga';
import rootReducer from "./store/root-reducer";
import counterReducer from '../features/counter/counterSlice';
import logger from 'redux-logger'
import {configureStore, ThunkAction, Action, getDefaultMiddleware} from '@reduxjs/toolkit';


const sagaMiddleware = createSagaMiddleware();
//
// const defaultMiddlewares = [
//     // thunkMiddleware,
//     sagaMiddleware,
//     errorMiddleware,
//     notificationMiddleware,
//     promiseMiddleware,
//     // loadingBarMiddleware(),
//     loggerMiddleware,
//     websocketMiddleware
// ];
// const composedMiddlewares = (middlewares: any): any  =>
//     process.env.NODE_ENV === 'development'
//         ? compose(applyMiddleware(...defaultMiddlewares, ...middlewares), DevTools.instrument())
//         : compose(applyMiddleware(...defaultMiddlewares, ...middlewares));
//
// const initialize = (initialState?: any, middlewares = []) => createStore(rootReducer, initialState, composedMiddlewares(middlewares));
//
//
//
// //
// // export default initialize;
//
// const initStore = initialize();
//
// // then run the saga
// sagaMiddleware.run(rootSaga)
//
// export default initStore;


const defaultMiddlewares = [
    sagaMiddleware,
    notificationMiddleware,
    websocketMiddleware
]

if(process.env.NODE_ENV === 'development'){
    defaultMiddlewares.push(logger);
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(defaultMiddlewares),
    devTools: process.env.NODE_ENV !== 'production',
});

// then run the saga
sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
