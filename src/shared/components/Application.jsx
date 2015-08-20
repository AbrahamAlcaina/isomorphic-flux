/*globals document*/

import React from 'react';
import Nav from './Nav';
import Footer from './footer';
import ApplicationStore from '../stores/ApplicationStore';
import NewsStore from '../stores/NewsStore';
import provideContext from 'fluxible-addons-react/provideContext';
import connectToStores from 'fluxible-addons-react/connectToStores';
import { handleHistory } from 'fluxible-router';

@provideContext
@handleHistory
@connectToStores(
    [ApplicationStore, NewsStore],
    (context, props) => {
        const appStore = context.getStore(ApplicationStore);
        const newsStore = context.getStore(NewsStore);
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            pages: appStore.getPages(),
            news: newsStore.getNews()
        };
    }
)
class Application extends React.Component{
    render() {
        var Handler = this.props.currentRoute.get('handler');
        return (
                <div className="fi">
                    <div className="navbar-fixed">
                        <Nav selected={this.props.currentNavigate.url} links={this.props.pages} />
                    </div>
                    <main className="fi-body">
                        <Handler {...this.props}/>
                        <aside className="fi-ads u-textCenter">
                            <strong>Advertisements</strong>
                         </aside>
                    </main>
                    <Footer />
                </div>);
    }

    componentDidUpdate (prevProps) {
        const newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
}

export default Application;
