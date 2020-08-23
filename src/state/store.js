import reducer from './photos/reducer'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from "redux";
import { logger } from 'redux-logger';
import fetchRecentPhotosWatcherSaga from "./photos/recentPhotos/saga";
import fetchSearchPhotosWatcherSaga from "./photos/searchPhotos/saga";
import {all, fork} from "@redux-saga/core/effects";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware, logger),
    )
);

// Combine Sagas
function* root(){
    yield all([
        fork(fetchSearchPhotosWatcherSaga),
        fork(fetchRecentPhotosWatcherSaga),
    ])
}

sagaMiddleware.run(root)

export default store