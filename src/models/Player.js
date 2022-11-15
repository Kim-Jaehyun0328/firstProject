import mongoose from "mongoose";


const playerSchema = mongoose.Schema({
  name: {type: String, required: true},
  position: {type: String, required: true},
  age: {type: String, required: true},
});

const Player = mongoose.model("Player", playerSchema);

export default Player;