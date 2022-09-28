import { Request, response, Response } from "express";
const book = require("../models/book");
const { BookByIDService, BookDeleteService, BookDeleteByIDService, BookPutByIDService, BookByGenreService, booksGetService } = require("../services/services_book");
const service = require("../services/services_book");


   export async function booksGet (req: Request, res: Response){
        try {
            res.json(await booksGetService())
        }
        catch (e) {
            res.status(404).json("404");
        } 
    }
  export async function BookByGenre(req: Request, res: Response){
        let genre: String = req.params.genre;
        try {
            res.json(await BookByGenreService(genre))
        }
        catch (e) {
            res.status(404).json("404");
        }
    }

    export async function BookByID (req: Request, res: Response) {
         try {
            res.json(await BookByIDService(req.params.id))
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
    export async function BookPost(req: Request, res: Response) {
        let title: String = req.body.title;
        let genre: String = req.body.genere;
        let authorID: String= req.body.authorID;
        try{ 
        res.json(await service.BookPostService(title, genre, authorID));
        }catch(e){
            res.status(400).json("400");
        }
    }
    export async function BookdeleteByID(req: Request, res: Response){
        let id: String = req.params.id;
        try {
            res.json(await BookDeleteByIDService(id))
        }
        catch (e) {
            res.status(404).json("404");
        }
    }
    //Ho preferito accorciare la route e invece di passare tutto nella route faccio un mix /books/ID -> Body = titolo e genere nuovi
    export async function BookPutByID(req:Request, res:Response){
        let id: String = req.params.id
        let title: String = req.body.title;
        let genre: String = req.body.genre;
        try {
            res.json(await BookPutByIDService(id,title,genre))
        }
        catch (e) {
            res.status(304).json("304");
        }
    }
