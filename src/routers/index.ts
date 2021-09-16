
import { Router, Request, Response } from 'express';

const routers = Router();

routers.get('/', (req: Request, res: Response) => {
    return res.render('pages/home', {
        user: {
            name: 'Claudio Rodrigo',
            age: 24
        },
        data: {
            products: [
                { name: 'Coxinha', price: 1 },
                { name: 'Salsichão', price: 1 },
                { name: 'Torta', price: 2 },
            ],
        }
    });
});

routers.get('/contatos', (req: Request, res: Response) => {
    return res.send('Contatos');
});

export default routers;