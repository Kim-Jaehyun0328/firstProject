import express from "express";
import { chelseaNews, chelseaVideos, chelseaPlayerUpload, postChelseaPlayerUpload, chelseaVideoUpload,postChelseaVideoUpload, watchChelseaVideos, editChelseaVideos, deleteChelseaVideos, postEditChelseaVideos, searchChelseaVideo} from "../controller/chelseaController";

const chelseaRouter = express.Router();

chelseaRouter.route("/videos/:id([0-9a-f]{24})/edit").get(editChelseaVideos).post(postEditChelseaVideos);
chelseaRouter.get("/videos/:id([0-9a-f]{24})/delete", deleteChelseaVideos);
chelseaRouter.route("/videos/upload").get(chelseaVideoUpload).post(postChelseaVideoUpload); //uploading video
chelseaRouter.get("/videos/:id([0-9a-f]{24})", watchChelseaVideos);
chelseaRouter.get("/videos", chelseaVideos);
chelseaRouter.get("/news", chelseaNews);
chelseaRouter.get("/videos/search", searchChelseaVideo);
chelseaRouter.route("/upload").get(chelseaPlayerUpload).post(postChelseaPlayerUpload); //uploading player

export default chelseaRouter;