import { Router } from 'express';
import authController from '../controllers/authController';

class IndexRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes(): void {
        this.router.post('/signup', authController.signUp);
        this.router.post('/signin', authController.signIn);
    }
}

const indexRoutes = new IndexRoutes();

export default indexRoutes.router;