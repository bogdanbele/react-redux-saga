import reducer from './photos/reducer'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from "redux";
import { logger } from 'redux-logger';
import fetchPhotosWatcherSaga from "./photos/list/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, logger),
    )
);

sagaMiddleware.run(fetchPhotosWatcherSaga)


// sagaMiddleware.run(rootSaga);

export default store