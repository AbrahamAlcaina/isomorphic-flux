import path from 'path';

process.env.PWD = process.cwd();
console.log('====>', process.env.PWD);

console.log(process.env);
if (process.env.NODE_ENV === 'production'){
    console.log('production');
    process.env.PWD = '';
}
const staticPath = path.resolve(path.join(process.env.PWD , '/public'));

console.log('static path ===>', staticPath);

export default staticPath;
