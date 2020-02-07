import {Request, Response} from 'express';
import User from '../models/User';

class AuthController {

    public async signUp(req: Request, res: Response): Promise<Response>{
        const { username, email, password} = req.body;
        const newUser = new User({ username, email, password });
        try{
            await newUser.save();
            return res.json({
                msg: "Sign up successfully!",
                newUser
            });

        }catch(e){
            return res.json(e.errors).status(422);
        }
    }

    public signIn(req: Request, res: Response){
        console.log('signin');
    }
}

export default new AuthController();