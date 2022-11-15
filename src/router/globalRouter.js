import express from "express";
import {login, signup} from "../controller/userController";
import {team, chelseaPage, manuPage} from "../controller/teamController";

const globalRouter = express.Router();


globalRouter.get("/", team);
globalRouter.get("/login", login);
globalRouter.get("/signup", signup);
globalRouter.get("/chelsea", chelseaPage);
globalRouter.get("/manu", manuPage);



export default globalRouter;