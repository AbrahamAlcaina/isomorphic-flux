import path from 'path';
import fs from 'fs';

var css = fs.readFileSync(path.resolve(path.join(__dirname, '../../public/css/main.css')));

export default css;