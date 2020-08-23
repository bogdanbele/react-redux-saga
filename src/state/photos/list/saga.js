import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from "./actionTypes";
import {fetchPhotosError, fetchPhotosInProgress, fetchPhotosSuccess} from "./actionCreators";
import fetchImages from "../../../api";

function* fetchPhotosWorkerSaga(){
    try{
        yield put(fetchPhotosInProgress())
        const response = yield call(fetchImages);
        console.log(response)
        console.log(response.data.photos.photo)
        yield put(fetchPhotosSuccess({photosList: response.data.photos.photo}))
    }catch(e){
        yield put(fetchPhotosError())
    }
}

export default function* fetchPhotosWatcherSaga(){
    yield takeLatest(
        actionTypes.fetchPhotos,
        fetchPhotosWorkerSaga
    )
}
