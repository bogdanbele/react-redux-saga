import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from "./actionTypes";
import {fetchPhotosError, fetchPhotosInProgress, fetchPhotosSuccess} from "./actionCreators";
import {setPagination} from "../searchPhotosPagination/actionCreators";
import {getPagination} from "../searchPhotosPagination/selectors";
import {select} from "@redux-saga/core/effects";
import {fetchPhotos} from "../../../api";
import {getSearchTerm} from "./selectors";

function* fetchPhotosWorkerSaga(){
    try{
        yield put(fetchPhotosInProgress())

        const {page, elementsPerPage} = yield select(getPagination);
        const searchTerm = yield select(getSearchTerm)
        console.log(searchTerm)
        // API response
        const response = yield call(fetchPhotos, searchTerm, page, elementsPerPage);

        const { pages, perpage, total} = response.data.photos;
        const pagination = {
            page: response.data.photos.page,
            totalPages: pages,
            elementsPerPage: perpage,
            totalElements: total
        }
        yield put(fetchPhotosSuccess({photosList: response.data.photos.photo}))
        yield put(setPagination(pagination))
    }catch(e){
        console.log(e)
        yield put(fetchPhotosError())
    }
}

export default function* fetchPhotosWatcherSaga(){
    yield takeLatest(
        actionTypes.fetchPhotos,
        fetchPhotosWorkerSaga
    )
}