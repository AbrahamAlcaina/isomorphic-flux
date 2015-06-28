
import React from 'react';
import ApplicationStore from '../stores/ApplicationStore';
import path from 'path';
import fs from 'fs';

var css = fs.readFileSync(path.resolve(path.join(__dirname, '../../../public/css/main.css')));

class Html extends React.Component {
    render() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <style dangerouslySetInnerHTML={{__html: css.toString()}} />
            </head>
            <body id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script async src="/public/js/main.js"></script>
            </html>
        );
    }
}

export default Html;
