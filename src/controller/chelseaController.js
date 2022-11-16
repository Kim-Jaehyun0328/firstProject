import Player from "../models/Player";
import Video from "../models/Video";

export const chelseaVideos = async (req, res) => {
  const videos = await Video.find().sort({createdAt: "desc"});
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
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("./");
  } catch(error){
    console.log(error);
    return res.render("chelseaVideoUpload", {pageTitle:"Upload Video", errorMessage: error._message});
  }
};

export const watchChelseaVideos = async (req, res) => {
  const {id} = req.params;
  const video = await Video.findById(id);
  return res.render("watch", {pageTitle: video.title, video})
};

export const deleteChelseaVideos = async (req, res) => {
  const {id} = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("../");
};

export const editChelseaVideos = async (req, res) => {
  const {id} = req.params;
  const video = await Video.findById(id);
  return res.render("videoEdit", {pageTitle : `Edit: ${video.title}`, video});
};

export const postEditChelseaVideos = async (req, res) => {
  const {id} = req.params;
  const {title, description, hashtags} = req.body;
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect("../");
};

export const searchChelseaVideo = async (req, res) => {
  const {keyword} = req.query;
  let videos = [];
  if(keyword){
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      }
    });
    return res.render("searchVideo", {pageTitle: "Search", videos});
  }
  return res.render("searchVideo", {pageTitle: "Search", videos});
};