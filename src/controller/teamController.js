export const team = (req, res) => res.render("home", {pageTitle: "Home"});
export const chelseaPage = (req, res) => {
  const players =[];
  return res.render("chelsea", {pageTitle: "Chelsea", players});
};
export const manuPage = (req, res) => {
  const players = [];
  return res.render("manu", {pageTitle: "ManUtd", players});
}