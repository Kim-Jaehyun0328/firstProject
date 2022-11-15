import Player from "../models/Player"

export const team = (req, res) => res.render("home", {pageTitle: "Home"});
export const chelseaPage = async (req, res) => {
  const players = await Player.find({});
  return res.render("chelsea", {pageTitle: "Chelsea", players});
};
export const manuPage = (req, res) => {
  return res.render("manu", {pageTitle: "ManUtd", players});
}