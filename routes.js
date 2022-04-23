module.exports = { route };

function route(app, Item) {
  app.get("/", (req, res) => {
    Item.findAll().then((items) => res.render("index", { items: items }));
  });
  app.get("/new-item", (req, res) => {
    res.render("new-item");
  });
  app.delete("/delete/:id", (req, res) => {
    console.log(req.params.id)
    Item.destroy({where: { id: req.params.id }}).then(() => res.redirect("/"))
    console.log("item deleted")
  });
  app.post("/item", (req, res) => {
    const newItem = { ...req.body };
    Item.create(newItem).then(() => res.redirect("/"));
  });
  app.get("/about", (req, res) => {
    res.render("about");
  });
}
