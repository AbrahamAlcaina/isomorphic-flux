import React from 'react';
import ImageLoader from './Image';

class Card extends React.Component {

    shouldComponentUpdate(nextProps) {
        return this.props.card !== nextProps.card;
    }

    render(){
        return (
            <div className="card large hoverable" key={this.props.card.get('_id')}>
                <div className="card-image">
                  <ImageLoader src={this.props.card.get('img')} alt="image" />
                  <span className="card-title">{this.props.card.get('title')}</span>
                </div>
                <div className="card-content">
                  <p>{this.props.card.get('text')}</p>
                </div>
                <div className="card-action">
                  <a href="#">This is a link</a>
                  <a href='#'>This is a link</a>
                </div>
              </div>
            );
    }
}

Card.contextTypes = {
    card: React.PropTypes.object.isRequired
};

export default Card;
