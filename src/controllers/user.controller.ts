//const user = require("../models/user")
import { user} from "../models/user"
const { UserByIDService, UserPutByIDService, userDeleteService, userPostService, userGetService } = require("../services/services.user");
import { Request, Response } from "express";
import { userAuthService, userByEmailService, UserDeleteByIDService, userGenTokenService } from "../services/services.user";


    export async function UserGet(req: Request, res: Response) {
        try {
            res.json(await userGetService())
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
    export async function UserPost(req:Request, res:Response){

        try {
            res.json(await userPostService(req.body))
        }
        catch (e) {
            res.status(400).json("400");
        }
    }
    export async function UserDelete (req:Request, res:Response) {
        try {
            res.json(await userDeleteService(req.params.email))
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
    export async function UserPutByID(req:Request, res:Response) {
        try {
            res.json(await UserPutByIDService(req.params.id, req.body))
        }
        catch (e) {
            res.status(301).json("301");
        }
}
export async function UserGetByID(req:Request, res:Response){
    try {
        res.json(await UserByIDService(req.params.id))
    }
    catch (e) {
        res.status(404).json("404");
    }
}

export async function UserAuth(req:Request,res:Response){
        let email: String= req.body.email;
        let _password:String= req.body.password;
        let _user = await userByEmailService(email)
        if (_user) {
            let result: Boolean = await userAuthService(_user, _password);
            console.log(_user.email + " loggato con successo");
            let token: String = await userGenTokenService(_user);
            //console.log(services_user.verifyUserToken(token, "chiaveultramegasegreta"))

            res.status(200).json({ "token": token })
        } else { console.log("Utente non esistente"); res.status(404); return }
    }
    export async function  UserDeleteByID(req:Request, res:Response){
        let id = req.params.id;
        try {
            res.json(await UserDeleteByIDService(id))
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
