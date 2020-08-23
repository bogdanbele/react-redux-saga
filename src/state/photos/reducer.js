import {combineReducers} from 'redux';

import pagination from './pagination/reducer'

const rootReducers = combineReducers({
    pagination
});

export default (state, action) => rootReducers(state, action)

