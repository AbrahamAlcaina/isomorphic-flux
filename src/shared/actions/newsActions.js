import fetch from '../fetch';
import NewsStore from '../stores/NewsStore';

export async function getNews(actionContext, payload, done) {
    const newsStore = actionContext.getStore(NewsStore);
    if (newsStore.elements >  0 ) {
        return done();
    }

    const url = '/api/news/page/' + newsStore.elements + '/' + newsStore.pageSize;
    const news = await fetch(url).then((response) => response.json());
    actionContext.dispatch('RECEIVE_PAGE', news);
    done();
}


export async function getNextPage (actionContext, payload, done) {
    const newsStore = actionContext.getStore(NewsStore);
    if (!newsStore.hasMoreItems) {
        return done();
    }
    const url = '/api/news/page/' + newsStore.elements + '/' + newsStore.pageSize;
    const news = await fetch(url).then((response) => response.json());
    actionContext.dispatch('RECEIVE_PAGE', news);
    done();
}
