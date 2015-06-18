/**
 * This leverages Express to create and run the http server.
 * A Fluxible context is created and executes the navigateAction
 * based on the URL. Once completed, the store state is dehydrated
 * and the application is rendered via React.
 */

import express from 'express';
import path from 'path';
import compression from 'compression';
import reactMiddleware from './reactMidelware';

const port = process.env.PORT || 3000;
const server = express();
server.use('/public', express.static(path.resolve(path.join(__dirname, '../../public'))));
server.set('state namespace', 'App');
server.use(compression());
server.use(reactMiddleware);

server.listen(port);

console.log('Listening on port ' + port);

export default server;
