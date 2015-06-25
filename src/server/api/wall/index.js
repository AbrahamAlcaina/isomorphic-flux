import {index, page} from './controller';
import express from 'express';

const router = express.Router();

router.get('/', index);
router.get('/page/:skip/:take', page);

export default router;
