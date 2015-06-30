import React from 'react';

function topPosition(domElt) {
  if (!domElt) {
    return 0;
  }
  return domElt.offsetTop + topPosition(domElt.offsetParent);
}


class InfiniteScroll extends React.Component {
    constructor (...params){
        super(...params);
        this.scrollListener = this.scrollListener.bind(this);
        this.attachScrollListener = this.attachScrollListener.bind(this);
        this.detachScrollListener = this.detachScrollListener.bind(this);
    }
    componentDidMount () {
      this.pageLoaded = this.props.pageStart;
      this.attachScrollListener();
    }

    componentDidUpdate () {
      this.attachScrollListener();
    }

    render() {
      const props = this.props;
      return React.DOM.div(null, props.children, props.hasMore && (props.loader || InfiniteScroll._defaultLoader));
    }

    scrollListener() {
      const el = React.findDOMNode(this);
      const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (topPosition(el) + el.offsetHeight - scrollTop - window.innerHeight < Number(this.props.threshold)) {
        this.detachScrollListener();
        // call loadMore after detachScrollListener to allow
        // for non-async loadMore functions
        this.props.loadMore(this.pageLoaded += 1);
      }
    }

    attachScrollListener () {
      if (!this.props.hasMore) {
        return;
      }
      window.addEventListener('scroll', this.scrollListener);
      window.addEventListener('resize', this.scrollListener);
      this.scrollListener();
    }

    detachScrollListener () {
      window.removeEventListener('scroll', this.scrollListener);
      window.removeEventListener('resize', this.scrollListener);
    }
    componentWillUnmount() {
      this.detachScrollListener();
    }
}

InfiniteScroll.defaultProps = {
        pageStart: 0,
        hasMore: false,
        loadMore: function () {},
        threshold: 250
      };

export default InfiniteScroll;
