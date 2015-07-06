import React from 'react';
import {getNextPage} from '../actions/wallActions';
import WallStore from '../stores/WallStore';
import ImageLoader from './Image';
import InfiniteScroll from './InfiniteScroll';

class Home extends React.Component {
    constructor(...params){
        super(...params);
        this.loadMore = this.loadMore.bind(this);
        this.wallStore = this.props.context.getStore(WallStore);
    }
    loadMore(){
        this.context.executeAction(getNextPage);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.wall !== nextProps.wall;
    }

    render() {
        const list = this.props.wall.map((post)=> (
            <div className="card large hoverable" key={post.get('_id')}>
                <div className="card-image">
                  <ImageLoader src={post.get('img')} alt="image" />
                  <span className="card-title">{post.get('title')}</span>
                </div>
                <div className="card-content">
                  <p>{post.get('text')}</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href='#'>This is a link</a>
                </div>
              </div>
            )
        );

        return (

                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.wallStore.hasMoreItems}
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
    executeAction: React.PropTypes.func.isRequired
};


export default Home;
