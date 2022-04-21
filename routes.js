module.exports = { route };

function route(app, Item) {
  app.get("/", (req, res) => {
    Item.findAll().then((items) => res.render("index", { items: items }));
  });
  app.get("/new-item", (req, res) => {
    res.render("new-item");
  });
  app.post("/item", (req, res) => {
    const newItem = { ...req.body };
    Item.create(newItem).then(() => res.redirect("/"));
  });
  app.get("/about", (req, res) => {
    res.render("about");
  });
}
