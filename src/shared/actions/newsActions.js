import fetch from '../fetch';
import NewsStore from '../stores/NewsStore';

const fetchOptions = {
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/graphql'
    }
};


export async function getNews(actionContext, payload, done) {
    const newsStore = actionContext.getStore(NewsStore);
    if (newsStore.elements > 0) {
        return done();
    }

    fetchOptions.body = `
        query getPage {
            news(skip:${newsStore.elements}, take:${newsStore.pageSize}) {
                _id,
                title,
                text,
                img
            }
        }
    `;
    const news = await fetch('/graphql', fetchOptions).then((response) => response.json());
    actionContext.dispatch('RECEIVE_PAGE', news.data.news);
    done();
}


export async function getNextPage(actionContext, payload, done) {
    const newsStore = actionContext.getStore(NewsStore);
    if (!newsStore.hasMoreItems) {
        return done();
    }

    fetchOptions.body = `
        query getPage {
            news(skip:${newsStore.elements}, take:${newsStore.pageSize}) {
                title,
                text,
                img
            }
        }
    `;
    const news = await fetch('/graphql', fetchOptions).then((response) => response.json());
    actionContext.dispatch('RECEIVE_PAGE', news.data.news);
    done();
}
