import express from "express";
import { manuNews, manuVideos } from "../controller/manuController";

const manuRouter = express.Router();

manuRouter.get("/videos", manuVideos);
manuRouter.get("/news", manuNews);


export default manuRouter;