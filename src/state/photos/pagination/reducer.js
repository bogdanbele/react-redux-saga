import actionTypes from "./actionTypes";

const initialState = {
    page: 1,
    totalPages: null,
    elementsPerPage: 20,
    totalElements: null,
};

const setPagination = (state, { payload: { pagination } }) => {
    return {
        ...state,
        page: pagination.page,
        totalPages: pagination.totalPages,
        elementsPerPage: pagination.element,
        totalElements: pagination.totalElements,
    };
};

const setPage = (state, {payload: {page}}) => ({...state, page});

const setTotalPages = (state, {payload: {totalPages}}) => ({...state, totalPages})

const setElementsPerPage = (state, {payload: {elementsPerPage}}) => ({...state, elementsPerPage})

const setTotalElements = (state, {payload: {totalElements}}) => ({...state, totalElements})

const map = {
    [actionTypes.setPage]: setPage,
    [actionTypes.setPerPage]: setElementsPerPage,
    [actionTypes.setTotalElements]: setTotalElements,
    [actionTypes.setTotalPages]: setTotalPages,
    [actionTypes.setPagination]: setPagination
}

export default function reducer(state = initialState, action) {
    const actionHandler = map[action.type];
    return actionHandler ? actionHandler(state, action) : state;
}
