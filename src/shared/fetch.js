require('isomorphic-fetch');


const newFetch = (url) => {
    if(typeof window === 'undefined') {
        // TODO Change by configuration
        const base = process.env.BASE_PATH  || 'http://localhost:3000' ;
        return fetch( base + url);
    }
    return fetch(url);
};

export default newFetch;
