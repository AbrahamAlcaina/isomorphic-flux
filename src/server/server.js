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
import wall from './api/wall';
import mongoose from 'mongoose';


//mongoose.connect('mongodb://localhost:27017/e1');
mongoose.connect('mongodb://heroku_grqlbcz8uOWbYZ3m3f28fQQNrVYpQTgfad4wfu62@ds033390.mongolab.com:33390/heroku_grqlbcz8');

const server = express();

server.use(compression());
server.use('/api/wall', wall);
server.use('/public', express.static(staticPath));
server.set('state namespace', 'App');
server.use(reactMiddleware);


const port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);

export default server;
