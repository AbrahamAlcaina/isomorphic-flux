import React from 'react';

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

        const list = [];
        for(let i = 0; i < 10; i++){
            list.push(media);
            if ( Math.random()<0.5){
                list.push(card);
            }
            if ( Math.random()<0.5){
                list.push(video);
            }
        }

        return (
            <article className="fi-content">
                 {list}
            </article>
        );
    }
}

export default Home;
