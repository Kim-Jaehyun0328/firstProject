import mongoose from "mongoose";


const videoSchema = mongoose.Schema({
  title: String,
  description: String,
});

const Video = mongoose.model("Video", videoSchema);

export default Video;