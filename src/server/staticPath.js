import path from 'path';

let staticPath = path.resolve(path.join(__dirname, '../../public'));

console.log(process.env, staticPath);

if (process.env.NODE_ENV == 'production') {
    console.log('production');
    staticPath = 'app/public';
}

console.log('static path ===>', staticPath);

export default staticPath;
