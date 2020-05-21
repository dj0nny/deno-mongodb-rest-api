import { MongoClient } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';

const client = new MongoClient();
client.connectWithUri(Deno.env.get('MONGODB_URI')!);
const db = client.database(Deno.env.get('MONGODB_DB_NAME')!);

export { client, db };