import { NextFunction, Request, Response } from 'express';
import { IUser} from '../models/user';
const jwt = require("jsonwebtoken")

export async function authenticateJWT(req: Request, res:Response, next: NextFunction){
    console.log("Login in corso")
    const authHead = req.headers.authorization;
    
    if(authHead){        
        const token = authHead.split(' ')[1];
        jwt.verify(token, process.env.SECRET_KEY,(err: Error, _user: IUser) => {
            if(err) {
                return res.sendStatus(403); // IVAN perchè 403?
            }       
           
                (req as any).user = _user; 
                console.log("Login effettuato");
                next();
            
        });
    }else{
    console.log("Login fallito");
    res.sendStatus(401);
    }
}