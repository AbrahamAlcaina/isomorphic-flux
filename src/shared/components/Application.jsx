/*globals document*/

import React from 'react';
import Nav from './Nav';
import Footer from './footer';
import ApplicationStore from '../stores/ApplicationStore';
import NewsStore from '../stores/NewsStore';
import provideContext from 'fluxible/addons/provideContext';
import connectToStores from 'fluxible/addons/connectToStores';
import { handleHistory } from 'fluxible-router';

// @TODO Upgrade to ES6 class when RouterMixin is replaced
var Application = React.createClass({
    render: function () {
        var Handler = this.props.currentRoute.get('handler');
        return (
                <div className="fi">
                    <div className="navbar-fixed">
                        <Nav selected={this.props.currentNavigate.url} links={this.props.pages} />
                    </div>
                    <main className="fi-body">
                        <Handler {... this.props}/>
                        <aside className="fi-ads u-textCenter">
                            <strong>Advertisements</strong>
                         </aside>
                    </main>
                    <Footer />
                </div>);
    },

    componentDidUpdate: function(prevProps) {
        const newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
});

export default handleHistory(provideContext(connectToStores(
    Application,
    [ApplicationStore, NewsStore],
    function (stores, props) {
        const appStore = stores.ApplicationStore;
        const newsStore = stores.NewsStore;
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            pages: appStore.getPages(),
            news: newsStore.getNews()
        };
    }
)));
