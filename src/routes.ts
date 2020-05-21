import { Router } from "https://deno.land/x/oak/mod.ts";

import helloWorld from './routes/helloWorld.ts';
import { getUsers, addUser } from './routes/users.ts';

const router = new Router();

router.get('/', helloWorld);
router.get('/users', getUsers);
router.post('/users', addUser);

export default router;