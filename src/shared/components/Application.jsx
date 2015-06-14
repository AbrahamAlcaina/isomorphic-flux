/*globals document*/

import React from 'react';
import Nav from './Nav';
import Footer from './footer';
import Home from './Home';
import About from './About';
import ApplicationStore from '../stores/ApplicationStore';
import provideContext from 'fluxible/addons/provideContext';
import connectToStores from 'fluxible/addons/connectToStores';
import { handleHistory } from 'fluxible-router';

// @TODO Upgrade to ES6 class when RouterMixin is replaced
var Application = React.createClass({
    render: function () {
        var Handler = this.props.currentRoute.get('handler');

        return (
            <div className="fi">
                <Nav selected={this.props.currentPageName} links={this.props.pages} />
                <main className="fi-body">

                    <Handler />
                    <aside className="fi-ads u-textCenter">
                    <strong>Advertisements</strong>
                  </aside>

                </main>
                <Footer />
                </div>
        );
    },

    componentDidUpdate: function(prevProps, prevState) {
        const newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
});

export default handleHistory(provideContext(connectToStores(
    Application,
    [ApplicationStore],
    function (stores, props) {
        var appStore = stores.ApplicationStore;
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            pages: appStore.getPages()
        };
    }
)));
