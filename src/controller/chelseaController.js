export const chelseaVideos = (req, res) => {
  return res.render("chelseaVideos", {pageTitle: "Chelsea Videos", videos: []});
};
export const chelseaNews = (req, res) => res.send("Chelsea News");



export const getVideo = (req, res) => {
  const {id} = req.params;
  return res.render("eachVideo", {pageTitle: `Video ${videos[id-1].title}`, video: []});
};

export const postVideo = (req, res) => {
  const {id} = req.params;
  const {comment} = req.body;
  videos[id-1].comments.push(comment);
  return res.redirect(`${id}`);
}