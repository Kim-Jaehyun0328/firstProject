import express from "express";
import { chelseaNews, chelseaVideos, getVideo, postVideo, chelseaPlayerUpload, postChelseaPlayerUpload, chelseaVideoUpload,postChelseaVideoUpload} from "../controller/chelseaController";

const chelseaRouter = express.Router();

chelseaRouter.route("/videos/upload").get(chelseaVideoUpload).post(postChelseaVideoUpload);
chelseaRouter.get("/videos", chelseaVideos);
chelseaRouter.get("/news", chelseaNews);
chelseaRouter.route("/upload").get(chelseaPlayerUpload).post(postChelseaPlayerUpload); //uploading player

export default chelseaRouter;