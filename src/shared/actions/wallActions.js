import fetch from '../fetch';
import WallStore from '../stores/WallStore';

export async function getWall(actionContext, payload, done) {
    const wallStore = actionContext.getStore(WallStore);
    if (wallStore.elements > 0 ) {
        return done();
    }
    const url = '/api/wall/page/' + wallStore.elements + '/' + wallStore.pageSize;
    const wall = await fetch(url).then((response) => response.json());

    actionContext.dispatch('RECEIVE_PAGE', wall);
    done();

}
