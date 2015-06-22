require('isomorphic-fetch');


const newFetch = (url) => {
    if(global) {
        // TODO Change by configuration
        return fetch( `http://localhost:3000${url}`);
    }
    return fetch(url);
};

export default newFetch;
