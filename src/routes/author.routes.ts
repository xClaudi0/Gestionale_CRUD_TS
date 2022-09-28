import * as aController from "../controllers/author.controller"
import { authenticateJWT } from "../middleware/auth";
import { isAdmin } from "../middleware/isAdmin";
import { Router } from "express";

export const router_Author = Router();

router_Author.post('/author', authenticateJWT , aController.AuthorPost); //Ok
router_Author.get('/author/:id', authenticateJWT , aController.AuthorByID); //Ok
router_Author.get('/author',aController.AuthorGet); //Ok
router_Author.delete('/author/:id', authenticateJWT, isAdmin , aController.AutorDeleteByID);//Ok
router_Author.put('/author/:id/',authenticateJWT, isAdmin , aController.AuthorUpdate); //Ok

