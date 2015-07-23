import express from 'express';
import {index} from './controller';
const router = express.Router();

router.get('/', index);
router.post('/', index);

export default router;
