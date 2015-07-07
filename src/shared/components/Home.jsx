import React from 'react';
import {getNextPage} from '../actions/wallActions';
import WallStore from '../stores/WallStore';
import Card from './Card';
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

    shouldComponentUpdate(nextProps) {
        return this.props.wall !== nextProps.wall;
    }

    render() {
        const list = this.props.wall.map((item) => ( <Card card={item} />));

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
    executeAction: React.PropTypes.func.isRequired,
    wall: React.PropTypes.array
};


export default Home;
