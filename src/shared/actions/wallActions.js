import fetch from '../fetch';

export async function getWall(actionContext, payload, done) {
    let wall = await fetch('/api/wall')
        .then((response) => response.json());
    actionContext.dispatch('RECEIVE_PAGE', wall);
    done();

};
