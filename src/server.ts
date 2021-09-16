import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import routers from './routers';

function runApplication() {
    const server = express();
    const PORT = 3000;

    server.set('view engine', 'mustache');
    server.set('views', path.join(__dirname, 'views'));
    server.engine('mustache', mustache());

    server.use(routers);

    server.listen(PORT, () => {
        console.log('Server listening on port ', PORT);
    });
}

runApplication();