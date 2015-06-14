import React from 'react';

class Home extends React.Component {
    render() {
        const media = (<div className="Media z-depth-2">
                        <img className="Media-figure Image" src="//placekitten.com/g/50/50" alt="Kitten" />
                        <div className="Media-body">
                          <h3 className="Media-title">Standard Media Object</h3>
                          <p>Donec imperdiet sem leo, id rutrum risus aliquam vitae. Cras tincidunt porta mauris, vel feugiat mauris accumsan eget.</p>
                        </div>
                      </div>);
        const card = (
            <div className="card">
            <div className="card-image">
              <img src="//lorempixel.com/50/50/" alt="image" />
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
        const list = [];
        for(let i = 0; i < 100; i++){
            list.push(media);
            if (Math.floor((Math.random() * 1) + 1)){
                list.push(card);
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
