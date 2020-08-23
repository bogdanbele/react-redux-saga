import {combineReducers} from 'redux';

import recentPhotos from './recentPhotos/reducer'
import recentPhotosPagination from './recentPhotosPagination/reducer'
import searchPhotos from './searchPhotos/reducer'
import searchPhotosPagination from './searchPhotosPagination/reducer'

const rootReducers = combineReducers({
    recentPhotos,
    recentPhotosPagination,
    searchPhotos,
    searchPhotosPagination
});

export default (state, action) => rootReducers(state, action)

