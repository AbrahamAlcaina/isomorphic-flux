import BaseStore from 'fluxible/addons/BaseStore';

class WallStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.wall = [{
            id: 1,
            text: 'try'
        }];
    }

    handleReceivePage(payload) {
        this.wall.push(payload.post);
        this.emitChange();
    }

    getWall() {
        return this.wall;
    }

    // For sending state to the client
    dehydrate() {
        return {
            wall: this.wall
        };
    }

    // For rehydrating server state
    rehydrate(state) {
        this.wall = state.wall;
    }
}


WallStore.storeName = 'WallStore';
WallStore.handlers = {
    'RECEIVE_PAGE': 'handleReceivePage'
};

export default WallStore;
