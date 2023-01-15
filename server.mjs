import http from 'http';
import app from './app.mjs';
import { PORT } from './utils/constants.mjs';

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});