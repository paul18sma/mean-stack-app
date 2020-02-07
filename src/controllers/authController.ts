import {Request, Response} from 'express';

class AuthController {

    signUp(req: Request, res: Response){
        console.log('signup');
        return res.send('SignUp');
    }

    signIn(req: Request, res: Response){
        console.log('signin');
    }
}

export default new AuthController();