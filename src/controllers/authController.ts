import {Request, Response} from 'express';
import * as JWT from 'jsonwebtoken';
import config from '../config/passport';


import User, { IUserModel }  from '../models/User';

class AuthController {

    public signUp = async (req: Request, res: Response): Promise<Response> => {
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

    public signIn = (req: Request, res: Response): Response => {
        
        const user = req.user as IUserModel;    
        const token = this.signInToken(user);
        
        return res.status(200).json({
            msg: 'User sign in successfully!',
            token
        });  
    }

    private signInToken = (user: IUserModel): string => {
        return JWT.sign({
            iss: "naapi",
            sub: user.id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        }, config.JWT_SECRET);
    }
}

export default new AuthController();