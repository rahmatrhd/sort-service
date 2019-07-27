import { Router } from 'express';
import { text } from '../controllers';

const route = Router();

route.post('/', text.textSort);

export default route;
