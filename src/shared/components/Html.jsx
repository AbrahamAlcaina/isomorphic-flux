
import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';

class Html extends React.Component {
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="//yui.yahooapis.com/pure/0.5.0/pure-min.css" />
                <link rel="stylesheet" href="/public/css/main.css" />
            </head>
            <body id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/js/main.js"></script>
            </html>
        );
    }
}

export default Html;
