module.exports = { route, log };

function route(app) {
  app.get("/", (req, res) => {
    res.render("index", { message: "some message" });
  });
  app.get("/about", (req, res) => {
    res.render("about");
  });
  app.post("/about", (req, res) => {
    res.render("about");
  });
}
