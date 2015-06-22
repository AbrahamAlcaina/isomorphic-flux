import React from 'react';
import {getWall} from '../actions/wallActions';

class Home extends React.Component {

    render() {

        const media = (<div className="Media z-depth-1">
                        <img className="Media-figure Image" src="//placekitten.com/g/50/50" alt="Kitten" />
                        <div className="Media-body">
                          <h3 className="Media-title">Standard Media Object</h3>
                          <p>Donec imperdiet sem leo, id rutrum risus aliquam vitae. Cras tincidunt porta mauris, vel feugiat mauris accumsan eget.</p>
                        </div>
                      </div>);
        const card = (
            <div className="card large">
            <div className="card-image">
              <img src="//lorempixel.com/300/300/" alt="image" />
              <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href='#'>This is a link</a>
            </div>
          </div>
            );

        const video = (

            <div className="card">
             <div className="card-image">
                <div className="video-container no-controls">
              <iframe width="853" height="480" src="//www.youtube.com/embed/Q8TXgCzxEnw?rel=0;autohide=1" frameborder="0" allowfullscreen></iframe>
            </div>
            </div>
            <div className="card-content ">

              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href='#'>This is a link</a>
            </div>
          </div>
            );

        // const list = [];
        // for(let i = 0; i < 20; i++){
        //     list.push(media);
        //     if ( Math.random()<0.4){
        //         list.push(card);
        //     }
        //     if ( Math.random()<0.1){
        //         list.push(video);
        //     }
        // }

        const list = this.props.wall.map((post)=>  (
            <div className="card large">
            <div className="card-image">
              <img src="{decodeURI(post.img)}" alt="image" />
              <span className="card-title">{post.title}</span>
            </div>
            <div className="card-content">
              <p>{post.text}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
              <a href='#'>This is a link</a>
            </div>
          </div>
            )
        );

        return (
            <article className="fi-content">
                 {list}
            </article>
        );
    }

}

Home.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};


export default Home;
