import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import manuRouter from "./router/manuRouter";
import chelseaRouter from "./router/chelseaRouter";

const app = express();
const logger = morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use(express.urlencoded({extended: true}))

app.use("/", globalRouter);
app.use("/manu", manuRouter);
app.use("/chelsea", chelseaRouter);


export default app;
