import path from 'path';

process.env.PWD = process.cwd();
console.log('====>', process.env.PWD);

const staticPath = path.resolve(path.join(process.env.PWD , '/public'));

console.log(' static path ===>', staticPath);

export default staticPath;
