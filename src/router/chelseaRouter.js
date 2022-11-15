import express from "express";
import { chelseaNews, chelseaVideos, getVideo, postVideo} from "../controller/chelseaController";

const chelseaRouter = express.Router();

const app = express();

chelseaRouter.route("/videos/:id(\\d+)").get(getVideo).post(postVideo);
chelseaRouter.get("/videos", chelseaVideos);
chelseaRouter.get("/news", chelseaNews);

export default chelseaRouter;