import Player from "../models/Player";
import Video from "../models/Video";

export const chelseaVideos = async (req, res) => {
  const videos = await Video.find({});
  return res.render("chelseaVideos", {pageTitle: "Chelsea Videos", videos});
};
export const chelseaNews = (req, res) => res.send("Chelsea News");

export const chelseaPlayerUpload = (req, res) => {
  return res.render("playerUpload", {pageTitle: "Uploading Chelsea Player"});
};

export const postChelseaPlayerUpload = async (req, res) => {
  const {name, position, age} = req.body;
  try{
    await Player.create({
      name,
      position,
      age,
    });
    return res.redirect("/chelsea");
  } catch(error){
    return res.render("playerUpload", {pageTitle: "Uploading Chelsea Player", players, errorMessage: error._message});
  }
}


export const chelseaVideoUpload = (req, res) => {
  return res.render("chelseaVideoUpload", {pageTitle: "Uploading Chelsea Video"});
};

export const postChelseaVideoUpload = async (req, res) => {
  const {title, description, hashtags}= req.body;
  try{
    await Video.create({
      title,
      description,
      hashtags: hashtags.split(",").map(word => `#${word}`),
    });
    return res.redirect("./");
  } catch(error){
    return res.render("upload", {pageTitle:"Upload Video", errorMessage: error._message});
  }
};