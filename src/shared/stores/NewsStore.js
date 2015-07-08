import BaseStore from 'fluxible/addons/BaseStore';
import Immutable from 'immutable';

class NewsStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.news = Immutable.List();
        this.hasMoreItems = true;
        this.elements = 0;
        this.pageSize = 10;
    }

    handleReceivePage(payload) {
        this.hasMoreItems = payload.length === this.pageSize;
        this.elements += payload.length;
        this.news = this.news.concat(Immutable.fromJS(payload));
        this.emitChange();
    }

    getNews() {
        return this.news;
    }

    dehydrate() {
        return {
            news: this.news.toArray(),
            elements: this.elements,
            hasMoreItems: this.hasMoreItems
        };
    }

    rehydrate(state) {
        this.news = Immutable.fromJS(state.news);
        this.elements = state.elements;
        this.hasMoreItems = state.hasMoreItems;
    }
}


NewsStore.storeName = 'NewsStore';
NewsStore.handlers = {
    'RECEIVE_PAGE': 'handleReceivePage'
};

export default NewsStore;
