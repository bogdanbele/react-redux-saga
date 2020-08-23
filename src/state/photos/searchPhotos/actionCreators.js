import actionTypes from "./actionTypes";

export const fetchPhotosInProgress = () => ({
    type: actionTypes.fetchPhotosInProgress,
});


export const fetchPhotosSuccess = (photosList) => ({
    type: actionTypes.fetchPhotosSuccess,
    payload: photosList
});

export const fetchPhotosError = () => ({
    type: actionTypes.fetchPhotosError,
});


export const fetchPhotos = () => ({
    type: actionTypes.fetchPhotos,
});

export const setSearchTerm = (searchTerm) => ({
    type: actionTypes.setSearchTerm,
    payload: {searchTerm}
})