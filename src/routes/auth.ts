import { Router } from 'express';
import authController from '../controllers/authController';
import { passportMiddlewareLocal } from '../middlewares/passportConfig';

class IndexRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.post('/signup', authController.signUp);
        this.router.post('/signin', passportMiddlewareLocal, authController.signIn);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;