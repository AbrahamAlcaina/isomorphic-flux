import React from 'react';

class ImageLoader extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            loaded: false,
            mounted: false
        };
        this.onImageLoad = this.onImageLoad.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleVisible = this.handleVisible.bind(this);
    }

  onImageLoad() {
    if (this.state.mounted) {
      this.setState({loaded: true});
    }
  }

  componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
        this.handleScroll();
  }

  componentWillUnmount(){
    this.state.mounted = false;
     window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleScroll);
  }

  componentDidUpdate() {
            if(!this.state.visible) this.handleScroll();
        }

  render() {
    const {className, ...props} = this.props;
    let imgClasses = 'image';
    imgClasses+= className ? ' '+ className: '';
    if (this.state.loaded) {
      imgClasses += ' image-loaded';
    }
    return (
      <img  {...props} className={imgClasses} />
    );
  }

    handleScroll() {
        const bounds = React.findDOMNode(this).getBoundingClientRect(),
        scrollTop = window.pageYOffset,
        top = bounds.top + scrollTop,
        height = bounds.bottom - bounds.top;
        if(top < (scrollTop + window.innerHeight) && (top + height) > scrollTop){
            this.setState({visible: true});
            this.handleVisible();
        }
    }

    handleVisible() {
        var imgTag =  React.findDOMNode(this);
        var imgSrc = imgTag.getAttribute('src');
        this.state.mounted = true;
        // You may want to rename the component if the <Image> definition
        // overrides window.Image
        var img = new window.Image();
        img.onload = this.onImageLoad;
        img.src = imgSrc;
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    }
}

export default ImageLoader;
