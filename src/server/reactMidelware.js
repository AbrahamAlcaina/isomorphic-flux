import serialize from 'serialize-javascript';
import {
    navigateAction
}
from 'fluxible-router';
import debugLib from 'debug';
import React from 'react';
import app from '../shared/app';
import HtmlComponent from '../shared/components/Html';
import css from './loadCss';

const htmlComponent = React.createFactory(HtmlComponent);
const debug = debugLib('traze');

function reactMiddleware(req, res, next) {

    let context = app.createContext();

    debug('Executing navigate action');
    context.getActionContext().executeAction(navigateAction, {
        url: req.url
    }, (err) => {
        if (err) {
            if (err.statusCode && err.statusCode === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }

        debug('Exposing context state');
        const exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';
        debug('Rendering Application component into html');
        const html = React.renderToStaticMarkup(htmlComponent({
            context: context.getComponentContext(),
            state: exposed,
            globalContext: context,
            css: css
        }));
        debug('Sending markup');
        res.set('Content-Type', 'text/html');
        res.send('<!DOCTYPE html>' + html);
        debug('Sent markup');
    });
}

export default reactMiddleware;
