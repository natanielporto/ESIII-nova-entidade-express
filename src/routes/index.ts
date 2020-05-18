import { Router } from 'express';
import productRouter from './product.routes';
import serviceRouter from './service.routes';

const routes = Router();

routes.use('/products', productRouter);
routes.use('/services', serviceRouter);

export default routes;
