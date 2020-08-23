import actionTypes from "./actionTypes";

export const setPagination = (pagination) => ({
    type: actionTypes.setPagination,
    payload: {pagination},
});

export const setPerPage = (elementsPerPage) => ({
    type: actionTypes.setPerPage,
    payload: {elementsPerPage},
});

export const setPage = (page) => ({
    type: actionTypes.setPage,
    payload: {page},
});

export const setTotalElements = (totalElements) => ({
    type: actionTypes.setTotalElements,
    payload: {totalElements},
});

export const setTotalPages = (totalPages) => ({
    type: actionTypes.setTotalPages,
    payload: {totalPages},
});