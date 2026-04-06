import { createServer } from 'http';
import { handler } from './build/handler.js';
import { main } from './src/server/main.ts';
import express from 'express';
const port = 3000;
const app = express();
const server = createServer(app);

await main(server);

app.use(handler);

server.listen(port);
console.log(`graphix open on port ${port}`);
