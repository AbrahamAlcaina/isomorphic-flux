require('isomorphic-fetch');


const newFetch = (url, ...params) => {
    if(typeof window === 'undefined') {
        // TODO Change by configuration
        const base = process.env.BASE_PATH  || 'http://localhost:3000' ;
        return fetch( base + url, ...params);
    }
    return fetch(url, ...params);
};

export default newFetch;
