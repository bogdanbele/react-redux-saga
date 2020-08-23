import axios from 'axios';

require('dotenv').config();

/**
 *
 * @param page
 * @param elementsPerPage
 * @returns {Promise<AxiosResponse<any>>}
 */
export function fetchRecentPhotos(page = 0, elementsPerPage = 25) {
    // https://www.flickr.com/services/api/flickr.photos.search.html
    return axios({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
            method: 'flickr.photos.getRecent',
            api_key: 'ec33a8dc7b1a418247409978e61241ae',
            extras: 'date_upload, owner_name, date_taken, views, url_n',  // Supported fields: description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o
            format: 'json',
            nojsoncallback: 1,
            page: page,
            per_page: elementsPerPage,
        }
    }).then(result => {
        return result
    });
}

export function fetchPhotos(searchTerm, page, elementsPerPage) {
    // https://www.flickr.com/services/api/flickr.photos.search.html
    return axios({
        method: 'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
            method: 'flickr.photos.search',
            api_key: 'ec33a8dc7b1a418247409978e61241ae',
            extras: 'date_upload, owner_name, date_taken, views, url_n',  // Supported fields: description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o
            format: 'json',
            nojsoncallback: 1,
            page: page,
            per_page: elementsPerPage,
            text: searchTerm ? searchTerm : 'welcome'
        }
    }).then(result => {
        return result
    });

}