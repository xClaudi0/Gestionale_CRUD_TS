 const servicesUser = require("../services/services.user");
import { Request, Response, NextFunction } from 'express';
import { UserGetByID } from '../controllers/user.controller';
import { user } from '../models/user';
import { UserByIDService, UserPutByIDService } from '../services/services.user';

export async function userSelfMod (req: Request, res: Response, next:NextFunction){
        let userWantEdit = (req as any).user;
        let userToEdit = await UserByIDService(req.params.id);
        if(userToEdit?.email != userWantEdit.email){
            return res.sendStatus(403); 
        }
        next();
    }