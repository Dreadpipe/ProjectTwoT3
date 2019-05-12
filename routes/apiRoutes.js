var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/cocktails", function(req, res) {
    db.Cocktail.findAll({}).then(function(dbCocktails) {
      res.json(dbCocktails);
    });
  });

  // Create a new example
  app.post("/api/cocktails", function(req, res) {
    db.Cocktail.create(req.body).then(function(dbCocktail) {
      res.json(dbCocktail);
    });
  });

  // Delete an example by id
  app.delete("/api/cocktails/:id", function(req, res) {
    db.Cocktail.destroy({ where: { id: req.params.id } }).then(function(dbCocktail) {
      res.json(dbCocktail);
    });
  });
};
