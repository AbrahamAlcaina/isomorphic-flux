import React from 'react';
import {getNextPage} from '../actions/newsActions';
import NewsStore from '../stores/NewsStore';
import Card from './Card';
import InfiniteScroll from './InfiniteScroll';

class Home extends React.Component {
    constructor(...params){
        super(...params);
        this.loadMore = this.loadMore.bind(this);
        this.newsStore = this.props.context.getStore(NewsStore);
    }

    loadMore(){
        this.context.executeAction(getNextPage);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.news !== nextProps.news;
    }

    render() {
        const list = this.props.news.map((item) => ( <Card card={item} key={item.get('_id')}/>));
        return (

                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.newsStore.hasMoreItems}
                    threshold={400}
                    loader={<div className="progress">
                                <div className="indeterminate"></div>
                                <p className="flow-text center">Loading ...</p>
                            </div>}>
                    {list}
                </InfiniteScroll>
        );
    }

}

Home.contextTypes = {
    executeAction: React.PropTypes.func.isRequired,
    news: React.PropTypes.array
};


export default Home;
