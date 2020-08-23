import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from "./actionTypes";
import {fetchPhotosError, fetchPhotosInProgress, fetchPhotosSuccess} from "./actionCreators";
import {fetchRecentPhotos} from "../../../api";
import {setPagination} from "../recentPhotosPagination/actionCreators";
import {getPagination} from "../recentPhotosPagination/selectors";
import {select} from "@redux-saga/core/effects";

function* fetchRecentPhotosWorkerSaga(){
    try{
        yield put(fetchPhotosInProgress())

        const {page, elementsPerPage} = yield select(getPagination);

        // API response
        const response = yield call(fetchRecentPhotos, page, elementsPerPage);

        const { pages, perpage, total} = response.data.photos;
        const pagination = {
            page: response.data.photos.page,
            totalPages: pages,
            elementsPerPage: perpage,
            totalElements: parseInt(total)
        }
        console.log(pagination)
        yield put(fetchPhotosSuccess({photosList: response.data.photos.photo}))
        yield put(setPagination(pagination))
    }catch(e){
        yield put(fetchPhotosError())
    }
}

export default function* fetchRecentPhotosWatcherSaga(){
    yield takeLatest(
        actionTypes.fetchPhotos,
        fetchRecentPhotosWorkerSaga
    )
}