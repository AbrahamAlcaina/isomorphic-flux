/*global document, window */

import React from 'react';
import debug from 'debug';
import app from '../shared/app';

require('../assets/css/app.scss');
require('isomorphic-fetch');
require('babel/polyfill');
require('./fastClickMobile');

// favicon
require('../assets/fav/apple-touch-icon-57x57.png');
require('../assets/fav/apple-touch-icon-60x60.png');
require('../assets/fav/apple-touch-icon-72x72.png');
require('../assets/fav/apple-touch-icon-76x76.png');
require('../assets/fav/apple-touch-icon-114x114.png');
require('../assets/fav/apple-touch-icon-120x120.png');
require('../assets/fav/apple-touch-icon-144x144.png');
require('../assets/fav/apple-touch-icon-152x152.png');
require('../assets/fav/apple-touch-icon-180x180.png');
require('../assets/fav/favicon-32x32.png');
require('../assets/fav/android-chrome-192x192.png');
require('../assets/fav/favicon-96x96.png');
require('../assets/fav/favicon-16x16.png');
require('../assets/fav/manifest.json');
require('../assets/fav/favicon.ico');
require('../assets/fav/mstile-144x144.png');
require('../assets/fav/browserconfig.xml');

const debugClient = debug('e1');
const dehydratedState = window.App; // Sent from the server

window.React = React; // For chrome dev tool support

// expose debug object to browser, so that it can be enabled/disabled from browser:
// https://github.com/visionmedia/debug#browser-support
window.fluxibleDebug = debug;

debugClient('rehydrating app');

// pass in the dehydrated server state from server.js
app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }
    window.context = context;
    const mountNode = document.getElementById('app');

    debugClient('React Rendering');
    React.render(context.createElement(), mountNode, function () {
        debugClient('React Rendered');
    });
});
