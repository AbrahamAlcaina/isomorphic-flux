
/**
 * This leverages Express to create and run the http server.
 * A Fluxible context is created and executes the navigateAction
 * based on the URL. Once completed, the store state is dehydrated
 * and the application is rendered via React.
 */
require('babel/polyfill');
import newrelic from 'newrelic';
import staticPath from './staticPath';
import spdy  from 'spdy';
import express from 'express';
import compression from 'compression';
import reactMiddleware from './reactMidelware';
import wall from './api/wall';
import mongoose from 'mongoose';



const mongoConection = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/e1';
mongoose.connect(mongoConection);
//mongoose.connect('mongodb://heroku_grqlbcz8:tj85i2e52rqej4b399qisbtjd9@ds033390.mongolab.com:33390/heroku_grqlbcz8');

const server = express();
server.use(compression());
server.use('/public', express.static(staticPath));
server.use('/api/wall', wall);
server.set('state namespace', 'App');
server.use(reactMiddleware);


const port = process.env.PORT || 3000;
const options =  {plain:true, ssl:false};
spdy.createServer(options, server).listen(port);
console.log('Listening on port ' + port);

export default server;
