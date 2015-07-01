import React from 'react';

export default class ImageLoader extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            mounted: false
        };
        this.onImageLoad = this.onImageLoad.bind(this);
    }

  onImageLoad() {
    if (this.state.mounted) {
      this.setState({loaded: true});
    }
  }

  componentDidMount() {

    var imgTag = this.refs.img.getDOMNode();
    var imgSrc = imgTag.getAttribute('src');
    this.state.mounted = true;
    // You may want to rename the component if the <Image> definition
    // overrides window.Image
    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  }

  componentWillUnmount(){
    this.state.mounted = false;
  }

  render() {
    const {className, ...props} = this.props;
    let imgClasses = 'image';
    imgClasses+= className ? ' '+ className: '';
    if (this.state.loaded) {
      imgClasses += ' image-loaded';
    }
    return (
      <img ref="img" {...props} className={imgClasses} />
    );
  }
}
