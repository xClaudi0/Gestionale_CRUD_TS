import * as express from "express";

import * as uController from "../controllers/user.controller"
import { authenticateJWT } from "../middleware/auth";
import { isAdmin } from "../middleware/isAdmin";
import {userSelfMod} from "../middleware/userSelfMod";

export const router_User = express.Router();
router_User.post('/users/login',uController.UserAuth); 
router_User.get('/users',authenticateJWT, isAdmin, uController.UserGet); 
router_User.post('/users',authenticateJWT, isAdmin, uController.UserPost); 
router_User.put('/users/:id', authenticateJWT ,userSelfMod, uController.UserPutByID);
router_User.get('/users/:id',uController.UserGetByID) 
router_User.delete('/users/:id',authenticateJWT, isAdmin, uController.UserDeleteByID); 
