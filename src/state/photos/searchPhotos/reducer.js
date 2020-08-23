import actionTypes from "./actionTypes";

const initialState = {
    fetchPhotosInProgress: false,
    fetchPhotosSuccess: false,
    fetchPhotosError: false,
    searchTerm: '',
    photosList: []
}

const setSearchTerm = (state, {payload: {searchTerm}}) => ({
    ...state,
    searchTerm,
})
const fetchPhotosInProgress = (state) => ({
    ...state,
    fetchPhotosInProgress: true,
    fetchPhotosSuccess: false,
    fetchPhotosError: false,
})

const fetchPhotosSuccess = (state, {payload: {photosList}}) => ({
    ...state,
    fetchPhotosInProgress: false,
    fetchPhotosSuccess: true,
    fetchPhotosError: false,
    photosList
})

const fetchPhotosError = (state) => ({
    ...state,
    fetchPhotosInProgress: false,
    fetchPhotosSuccess: false,
    fetchPhotosError: true,
})

const map = {
    [actionTypes.fetchPhotosSuccess] : fetchPhotosSuccess,
    [actionTypes.fetchPhotosError]: fetchPhotosError,
    [actionTypes.fetchPhotosInProgress]: fetchPhotosInProgress,
    [actionTypes.setSearchTerm]: setSearchTerm
}

export default function reducer(state = initialState, action) {
    const actionHandler = map[action.type];
    return actionHandler ? actionHandler(state, action) : state;
}