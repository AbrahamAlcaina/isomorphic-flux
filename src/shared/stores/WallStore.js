import BaseStore from 'fluxible/addons/BaseStore';
import Immutable from 'immutable';

class WallStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.wall = Immutable.List();
        this.hasMoreItems = true;
        this.elements = 0;
        this.pageSize = 10;
    }

    handleReceivePage(payload) {
        this.hasMoreItems = payload.length === this.pageSize;
        this.elements += payload.length;
        this.wall = this.wall.concat(Immutable.fromJS(payload));
        this.emitChange();
    }

    getWall() {
        return this.wall;
    }

    dehydrate() {
        return {
            wall: this.wall.toArray(),
            elements: this.elements,
            hasMoreItems: this.hasMoreItems
        };
    }

    rehydrate(state) {
        this.wall = Immutable.fromJS(state.wall);
        this.elements = state.elements;
        this.hasMoreItems = state.hasMoreItems;
    }
}


WallStore.storeName = 'WallStore';
WallStore.handlers = {
    'RECEIVE_PAGE': 'handleReceivePage'
};

export default WallStore;
