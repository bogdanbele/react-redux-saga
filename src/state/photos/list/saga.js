import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from "./actionTypes";
import {fetchPhotosError, fetchPhotosInProgress, fetchPhotosSuccess} from "./actionCreators";
import fetchImages from "../../../api";
import {setPagination} from "../pagination/actionCreators";
import {getPage, getElementsPerPage} from "../pagination/selectors";
import {select} from "@redux-saga/core/effects";

function* fetchPhotosWorkerSaga(){
    try{
        yield put(fetchPhotosInProgress())
        const nextPage = yield select(getPage);
        const elementsPerPage = yield select(getElementsPerPage);
        const response = yield call(fetchImages, nextPage, elementsPerPage);
        console.log(response)
        console.log(response.data.photos.photo)
        const {page, pages, perpage, total} = response.data.photos;
        const pagination = {
            page,
            totalPages: pages,
            elementsPerPage: perpage,
            totalElements: total
        }
        console.log(pagination)
        yield put(setPagination(pagination))
        yield put(fetchPhotosSuccess({photosList: response.data.photos.photo}))
       // yield put(setPagination())
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