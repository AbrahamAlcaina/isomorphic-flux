import BaseStore from 'fluxible/addons/BaseStore';

class WallStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.wall = [];
    }

    handleReceivePage(payload) {
        console.log('aqui');
        this.wall.push(payload);
        this.emitChange();
    }

    getWall() {
        return this.wall;
    }

    dehydrate() {
        return {
            wall: this.wall
        };
    }

    rehydrate(state) {
        this.wall = state.wall;
    }
}


WallStore.storeName = 'WallStore';
WallStore.handlers = {
    'RECEIVE_PAGE': 'handleReceivePage'
};

export default WallStore;
