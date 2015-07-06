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
    render() {

        const list = this.props.wall.map((post)=> (
                <div className="card large hoverable" key={post._id}>
                <div className="card-image">
                  <ImageLoader  src={post.img} alt="image" />
                  <span className="card-title">{post.title}</span>
                </div>
                <div className="card-content">
                  <p className="truncate">{post.text}</p>
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
