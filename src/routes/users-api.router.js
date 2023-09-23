import express from "express";
export const usersApiRouter = express.Router();
import { usersController } from "../controllers/users.controller.js";

usersApiRouter.get("/", usersController.read);
usersApiRouter.put("/:_id", usersController.update);
usersApiRouter.delete("/:_id", usersController.delete);
usersApiRouter.get("/premium/:uid", usersController.premiumSwitch); // ahora solo funciona si el user en prop documemts[] tiene estas tres cosas => Identificación, Comprobante de domicilio, Comprobante
//:_id/documents con Multer guarda en profiles o products o documents
//documents: [] {name: 'tiketpago.jpg', reference: 'isdusuario/documents/tikets/'} {name: 'dni.jpg', reference: 'isdusuario/documents/profile/'}

//api/users/:uid/documents
