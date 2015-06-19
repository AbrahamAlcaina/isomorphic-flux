import {index} from './controller';
import express from 'express';

const router = express.Router();

router.get('/', index);

export default router;
