import axios from 'axios';

/**
 *
 * @param {string} input
 */
function fetchImages(input)
{
    const options = {
        headers: {'X-Custom-Header': 'value'},
        params: { 'format':'json', 'nojsoncallback' : true}
    };

    return axios.get('http://www.omdbapi.com/?apikey=[yourkey]&', options).then(result => {
        console.log(result)
        return result
    });
}

export default fetchImages();