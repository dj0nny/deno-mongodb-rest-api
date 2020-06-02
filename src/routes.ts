import { Router } from "https://deno.land/x/oak/mod.ts";

import helloWorld from './routes/helloWorld.ts';
import { getUsers, addUser, updateUser, deleteUser } from './routes/users.ts';

const router = new Router();

router.get('/', helloWorld);

router.get('/users', getUsers);
router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;