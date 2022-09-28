import { Request, Response } from "express";
import { AuthorGetService, AuthorByIDService, AuthorPostService, AuthorDeleteService, AuthorDeleteByIDService, AuthorUpdateService } from "../services/services_author";

export async function AuthorGet (req: Request, res: Response) {   
    try {
            res.json(await AuthorGetService());
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
export async function AuthorByID (req: Request,res: Response) {
        try {
            res.json(await AuthorByIDService(req.params.id))
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
   export async function AuthorPost (req: Request, res: Response) {
        try {
            res.json(await AuthorPostService(req.body.name, req.body.genre))
        }
        catch (e) {
            res.status(400).json("400");
        }
    }

    export async function AuthorDelete (req: Request,res: Response) {
        try {
            res.json(await AuthorDeleteService(req.params.name))
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
    export async function AutorDeleteByID(req: Request,res: Response){
        try {
            res.json(await AuthorDeleteByIDService(req.params.id))
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
   export async function AuthorUpdate(req: Request,res: Response){
        try {
            res.json(await AuthorUpdateService(req.params.id, req.body.name, req.body.genre))
        }
        catch (e) {
            res.status(400).json("400");
        }
    }