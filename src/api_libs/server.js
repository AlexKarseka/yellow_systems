async function libsTopMovie(url, page = '1', settings = {}){
    const defaultPath = 'https://api.themoviedb.org/3/movie';
    const API_KEY = 'e25253996293548e3c460ece1353df35';
    const language = 'ru'
    const _url = `${ defaultPath }/${url}?api_key=${API_KEY}&language=${language}&page=${page}&region=${language}`;
    return fetch(_url).then(res => {
        return res.json();
    })
}

async function LibsGenres(settings = {}){
    const defaultPath = 'https://api.themoviedb.org/3/genre/movie/list';
    const API_KEY = 'e25253996293548e3c460ece1353df35';
    const language = 'ru'
    const _url = `${ defaultPath }?api_key=${API_KEY}&language=${language}`;
    return fetch(_url).then(res => {
        return res.json();
    })
}

async function LibsDetails (movie_id, settings = {}){
    const defaultPath = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'e25253996293548e3c460ece1353df35';
    const language = 'ru'
    const append = 'videos'
    const _url = `${defaultPath}${movie_id}?api_key=${API_KEY}&language=${language}&append_to_response=${append}`;
    return fetch(_url).then(res => {
        return res.json();
    })
}

async function LibsRecommendations (movie_id, settings = {}){
    const defaultPath = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'e25253996293548e3c460ece1353df35';
    const language = 'ru'
    const _url = `${defaultPath}${movie_id}/recommendations?api_key=${API_KEY}&language=${language}`;
    return fetch(_url).then(res => {
        return res.json();
    })
}

async function LibsSearch (search='', settings = {}){
    const defaultPath = 'https://api.themoviedb.org/3/search/movie';
    const API_KEY = 'e25253996293548e3c460ece1353df35';
    const language = 'ru'
    const include_adult = 'false'
    const _url = `${defaultPath}?api_key=${API_KEY}&language=${language}&query=${search}&page=1&include_adult=${include_adult}&region=${language}`;
    return fetch(_url).then(res => {
        return res.json();
    })
}

export { libsTopMovie, LibsGenres, LibsDetails, LibsRecommendations, LibsSearch }