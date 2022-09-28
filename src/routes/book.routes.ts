import * as express from "express";
let bController = require("../controllers/book.controllers");
import { authenticateJWT } from "../middleware/auth";
import { isAdmin } from "../middleware/isAdmin";
export const router_Book = express.Router();
router_Book.get('/books', authenticateJWT, bController.booksGet);//Ok
router_Book.post('/books', authenticateJWT, isAdmin , bController.BookPost); //Ok
router_Book.put('/books/:id', authenticateJWT, isAdmin,  bController.BookPutByID); //Ok
router_Book.delete('/books/:id', authenticateJWT, isAdmin, bController.BookdeleteByID); //Ok
router_Book.get('/books/:id', authenticateJWT , bController.BookByID); //Ok


//module.exports = router_Book;
