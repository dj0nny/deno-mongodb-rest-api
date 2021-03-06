import { Application } from 'https://deno.land/x/oak/mod.ts';
import 'https://deno.land/x/dotenv/load.ts';

import router from './routes.ts';
import { db } from './connection.ts';

const app = new Application();
const port = 5050;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server is running on port http://localhost:${port}`);

await app.listen({ port });