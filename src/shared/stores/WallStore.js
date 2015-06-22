import BaseStore from 'fluxible/addons/BaseStore';

class WallStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.wall = [{
            "_id": 1,
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus eget risus sollicitudin, sit amet convallis purus varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc porta mauris id nulla sollicitudin aliquet eu nec ex. Sed porta luctus nulla, at varius leo. Fusce lobortis vehicula eros et fermentum. Maecenas ut lorem gravida, semper nunc semper, sodales nisi. In pulvinar mauris metus, ut imperdiet tellus scelerisque nec. Phasellus varius in nulla vel finibus. Aenean mi nunc, viverra eu interdum eu, gravida in nulla. Aliquam non facilisis odio, eu dignissim mi. Nunc sed libero risus.",
            "title": "Trampa",
            "img": "//placekitten.com/g/50/50"
        }];
    }

    dehydratate() {
        console.log('dehydratate', this.wall);
        return {
            wall: this.wall
        };
    }

    rehydrate(state) {
        this.wall = state.wall;
    }


    handleReceiveWall(payload) {
        this.wall = payload.wall;
        this.emitChange();
    }

    getWall() {
        return this.wall;
    }
}

WallStore.storeName = 'WallStore';
WallStore.handlers = {
    'RECEIVE_WALL': 'handleReceiveWall'
};

export default WallStore;
