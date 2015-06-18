import path from 'path';

let staticPath = path.resolve(path.join(__dirname, '../../public'));

console.log(process.env);
if (process.env.NODE_ENV == 'production') {
    console.log('production');
    console.log(__dirname);
    //base = process.cwd();
    staticPath = 'public';
}



console.log('static path ===>', staticPath);

export default staticPath;
