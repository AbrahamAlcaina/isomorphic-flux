/**
 * This leverages Express to create and run the http server.
 * A Fluxible context is created and executes the navigateAction
 * based on the URL. Once completed, the store state is dehydrated
 * and the application is rendered via React.
 */


import staticPath from './staticPath';
import express from 'express';
import compression from 'compression';
import reactMiddleware from './reactMidelware';

const server = express();
server.use(compression());
server.use('/public', express.static(staticPath));
server.set('state namespace', 'App');
server.use(reactMiddleware);

const port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);

export default server;
