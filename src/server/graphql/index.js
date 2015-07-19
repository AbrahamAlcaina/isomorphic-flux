import express from 'express';
import {index} from './controller';
const router = express.Router();

router.get('/', index);

export default router;
