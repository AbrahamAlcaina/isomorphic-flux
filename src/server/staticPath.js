import path from 'path';



console.log(process.env);

let base = __dirname;

if (process.env.NODE_ENV == 'production') {
    console.log('production');
    //base = process.cwd();
    base = '../';
    console.log(base);
}

const staticPath = path.resolve(path.join(base, 'public'));

console.log('static path ===>', staticPath);

export default staticPath;
