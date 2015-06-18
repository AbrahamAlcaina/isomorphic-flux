import path from 'path';

process.env.PWD = __dirname);
console.log('====>', process.env.PWD);

const staticPath = path.resolve(path.join(process.env.PWD , '/public'));

console.log('static path ===>', staticPath);

export default staticPath;
