import request from 'superagent';

export default async function getWall(actionContext, payload, done) {
    let wall = await request.get('/api/wall').exec();
    actionContext.dispatch('RECEIVE_WALL', wall);
    done();
};
