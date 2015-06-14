import React from 'react';

class Home extends React.Component {
    render() {
        const media = (<div className="Media">
                        <img className="Media-figure Image" src="//placekitten.com/g/50/50" alt="Kitten" />
                        <div className="Media-body">
                          <h3 className="Media-title">Standard Media Object</h3>
                          <p>Donec imperdiet sem leo, id rutrum risus aliquam vitae. Cras tincidunt porta mauris, vel feugiat mauris accumsan eget.</p>
                        </div>
                      </div>);
        const list = [];
        for(let i = 0; i < 100; i++){
            list.push(media);
        }

        return (
            <article className="fi-content">
                 {list}
            </article>
        );
    }
}

export default Home;
