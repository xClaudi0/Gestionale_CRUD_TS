import { NextFunction, Request, Response } from "express";

    export const isAdmin = async(req:Request, res:Response, next: NextFunction) =>{
        console.log("Verifica ruolo in corso..")
        const role: String = (req as any).user?.role;
    if( role != 'admin'){
        console.log("Privilegi insufficienti");
        return res.sendStatus(403); 
    }
    console.log("Privilegi sufficienti");
    next();
}

