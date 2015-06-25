import BaseStore from 'fluxible/addons/BaseStore';

class WallStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.wall = [];
        this.hasMoreItems = true;
        this.elements = 0;
        this.pageSize = 5;
    }

    handleReceivePage(payload) {
        this.hasMoreItems = payload.length === this.pageSize;
        this.elements += payload.length;
        this.wall = this.wall.concat(payload);
        this.emitChange();
    }

    getWall() {
        return this.wall;
    }

    dehydrate() {
        return {
            wall: this.wall,
            elements: this.elements
        };
    }

    rehydrate(state) {
        this.wall = state.wall;
        this.elements = state.elements;
    }
}


WallStore.storeName = 'WallStore';
WallStore.handlers = {
    'RECEIVE_PAGE': 'handleReceivePage'
};

export default WallStore;
