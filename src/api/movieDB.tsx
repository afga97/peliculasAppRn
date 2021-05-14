import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'c2780b1dacb75706ec75048a203748c0',
        language: 'es-ES'
    }
})

export default movieDB