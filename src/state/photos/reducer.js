import {combineReducers} from 'redux';

import pagination from './pagination/reducer'
import list from './list/reducer'

const rootReducers = combineReducers({
    pagination,
    list
});

export default (state, action) => rootReducers(state, action)

