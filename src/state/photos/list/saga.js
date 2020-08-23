import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from "./actionTypes";
import {fetchPhotosError, fetchPhotosInProgress, fetchPhotosSuccess} from "./actionCreators";
import fetchImages from "../../../api";
import {setPagination} from "../pagination/actionCreators";
import {getPagination} from "../pagination/selectors";
import {select} from "@redux-saga/core/effects";

function* fetchPhotosWorkerSaga(){
    try{
        yield put(fetchPhotosInProgress())

        const {page, elementsPerPage} = yield select(getPagination);

        // API response
        const response = yield call(fetchImages, page, elementsPerPage);

        const { pages, perpage, total} = response.data.photos;
        const pagination = {
            page: response.data.photos.page,
            totalPages: pages,
            elementsPerPage: perpage,
            totalElements: total
        }
        console.log(pagination)
        yield put(fetchPhotosSuccess({photosList: response.data.photos.photo}))
        yield put(setPagination(pagination))
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

// Pagination Example
/*
photos:
page: 1
pages: 84
perpage: 12
photo: (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
total: 1000
 */